import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';

export const WhyUs3DElement: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasError, setHasError] = useState(false);
  const { theme } = useTheme();

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

    const isDark = theme === 'dark';
    const accentColor = isDark ? 0x8BA8FF : 0x2459E8;
    const ring1Color = isDark ? 0x8BA8FF : 0x2459E8;
    const ring2Color = isDark ? 0x303B4B : 0xCBD5E1;
    const coreColor = isDark ? 0x1E2738 : 0xF3F6FC;

    // Lights
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.9 : 1.2);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.2 : 1.5);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);

    const pointLight = new THREE.PointLight(accentColor, 1.5, 10);
    pointLight.position.set(-3, 3, 2);
    scene.add(pointLight);

    // Gyroscope Group
    const gyroGroup = new THREE.Group();
    scene.add(gyroGroup);

    // Outer Ring
    const outerGeo = new THREE.TorusGeometry(2.1, 0.035, 16, 75);
    const outerMat = new THREE.MeshStandardMaterial({
      color: ring1Color,
      roughness: 0.25,
      metalness: 0.7,
    });
    const outerMesh = new THREE.Mesh(outerGeo, outerMat);
    gyroGroup.add(outerMesh);

    // Middle Ring
    const midGeo = new THREE.TorusGeometry(1.6, 0.03, 16, 65);
    const midMat = new THREE.MeshStandardMaterial({
      color: ring2Color,
      roughness: 0.3,
      metalness: 0.6,
    });
    const midMesh = new THREE.Mesh(midGeo, midMat);
    midMesh.rotation.x = Math.PI / 3;
    gyroGroup.add(midMesh);

    // Inner Crystalline Core
    const coreGeo = new THREE.IcosahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshPhysicalMaterial({
      color: coreColor,
      roughness: 0.15,
      metalness: 0.2,
      transmission: 0.85,
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

      outerMesh.rotation.x += delta * 0.25;
      outerMesh.rotation.y += delta * 0.18;

      midMesh.rotation.y -= delta * 0.3;
      midMesh.rotation.z += delta * 0.2;

      coreMesh.rotation.x += delta * 0.4;
      coreMesh.rotation.z -= delta * 0.25;

      gyroGroup.rotation.y += delta * 0.04;

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
  }, [theme]);

  if (hasError) {
    return (
      <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center">
        <div className="w-32 h-32 rounded-full border-2 border-[var(--border-color)] border-dashed animate-spin flex items-center justify-center">
          <div className="w-20 h-20 rounded-full border-2 border-[var(--accent-primary)] border-dotted" />
        </div>
      </div>
    );
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center select-none overflow-hidden"
    >
      <canvas ref={canvasRef} className="w-full h-full block" />

      {/* Overlay Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-xs text-[11px] font-mono text-[var(--text-secondary)] pointer-events-auto">
        ENGINEERING FOUNDATION
      </div>
    </div>
  );
};
