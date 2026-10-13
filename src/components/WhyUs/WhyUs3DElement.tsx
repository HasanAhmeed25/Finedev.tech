import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

export const WhyUs3DElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);

  useEffect(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    let renderer: THREE.WebGLRenderer;
    try {
      renderer = new THREE.WebGLRenderer({
        canvas,
        alpha: true,
        antialias: true,
      });
    } catch {
      setHasError(true);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 5);

    const updateSize = () => {
      if (!container || !renderer) return;
      const width = container.clientWidth;
      const height = container.clientHeight;
      if (width === 0 || height === 0) return;
      camera.aspect = width / height;
      camera.updateProjectionMatrix();
      renderer.setSize(width, height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    };

    updateSize();
    window.addEventListener('resize', updateSize);

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.8);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.2);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointViolet = new THREE.PointLight(0xc084fc, 2.5, 10);
    pointViolet.position.set(-4, 3, 2);
    scene.add(pointViolet);

    const pointCyan = new THREE.PointLight(0x22d3ee, 2.5, 10);
    pointCyan.position.set(4, -3, 2);
    scene.add(pointCyan);

    // Gyroscope Group
    const gyroGroup = new THREE.Group();
    scene.add(gyroGroup);

    // Outer Ring
    const outerGeo = new THREE.TorusGeometry(2.1, 0.038, 16, 75);
    const outerMat = new THREE.MeshStandardMaterial({
      color: 0xa855f7,
      emissive: 0x7c3aed,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    gyroGroup.add(outerMesh);

    // Middle Ring
    const midGeo = new THREE.TorusGeometry(1.6, 0.032, 16, 65);
    const midMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x0284c7,
      emissiveIntensity: 1.5,
      roughness: 0.2,
      metalness: 0.8,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    midMesh.rotation.x = Math.PI / 3;
    gyroGroup.add(midMesh);

    // Inner Crystalline Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: 0xc084fc,
      emissive: 0x9333ea,
      emissiveIntensity: 0.9,
      roughness: 0.2,
      metalness: 0.2,
      transmission: 0.8,
      transparent: true,
      opacity: 0.85,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    gyroGroup.add(coreMesh);

    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();

      outerMesh.rotation.x += delta * 0.3;
      outerMesh.rotation.y += delta * 0.2;

      midMesh.rotation.y -= delta * 0.4;
      midMesh.rotation.z += delta * 0.25;

      coreMesh.rotation.x += delta * 0.5;
      coreMesh.rotation.z -= delta * 0.35;

      gyroGroup.rotation.y += delta * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      outerGeo.dispose();
      outerMat.dispose();
      midGeo.dispose();
      midMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (hasError) {
    return (
      <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
        <div className="w-36 h-36 rounded-full border-2 border-purple-500/40 border-dashed animate-spin-slow flex items-center justify-center">
          <div className="w-24 h-24 rounded-full border-2 border-cyan-400/40 border-dotted animate-reverse-spin" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden"
    >
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-purple-600/15 blur-[90px]" />
        <div className="w-56 h-56 rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Overlay Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0d1020]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300 pointer-events-auto">
        CORE ENGINEERING FOUNDATION
      </div>
    </div>
  );
};
