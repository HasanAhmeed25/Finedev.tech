import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { HeroFallback3D } from './HeroFallback3D';

export const Hero3DComposition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);

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
        powerPreference: 'high-performance',
      });
    } catch (e) {
      console.warn('WebGL initialization failed, falling back to CSS 3D:', e);
      setHasWebGLError(true);
      return;
    }

    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(45, 1, 0.1, 100);
    camera.position.set(0, 0, 7.5);

    // Resize handler
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

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.9);
    scene.add(ambientLight);

    const dirLight = new THREE.DirectionalLight(0xffffff, 1.5);
    dirLight.position.set(8, 10, 6);
    scene.add(dirLight);

    const violetLight = new THREE.PointLight(0xc084fc, 3.5, 15);
    violetLight.position.set(-5, 4, 3);
    scene.add(violetLight);

    const cyanLight = new THREE.PointLight(0x22d3ee, 3.5, 15);
    cyanLight.position.set(5, -4, 3);
    scene.add(cyanLight);

    // Root Group for Mouse Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Glass Cube & Edges
    const cubeGroup = new THREE.Group();
    rootGroup.add(cubeGroup);

    const boxGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: 0x8b5cf6,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.85,
      ior: 1.45,
      thickness: 1.2,
      transparent: true,
      opacity: 0.7,
    });
    const cubeMesh = new THREE.Mesh(boxGeo, boxMat);
    cubeGroup.add(cubeMesh);

    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: 0x38bdf8,
      linewidth: 1.5,
      transparent: true,
      opacity: 0.75,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    cubeGroup.add(edgesMesh);

    // Inner Glowing Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: 0x22d3ee,
      emissive: 0x06b6d4,
      emissiveIntensity: 1.8,
      roughness: 0.2,
      metalness: 0.8,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    cubeGroup.add(coreMesh);

    // 2. Connected Satellite Nodes & Rays
    const nodesGroup = new THREE.Group();
    rootGroup.add(nodesGroup);

    const nodeCoords: [number, number, number][] = [
      [2.2, 1.4, -0.6],
      [-2.3, 1.2, 0.8],
      [1.8, -2.0, 1.1],
      [-1.9, -1.6, -1.0],
      [0.2, 2.4, 0.4],
      [-0.4, -2.5, 0.5],
    ];

    const nodeGeo = new THREE.SphereGeometry(0.12, 16, 16);
    nodeCoords.forEach((coord, i) => {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? 0xc084fc : 0x22d3ee,
        emissive: i % 2 === 0 ? 0x9333ea : 0x0284c7,
        emissiveIntensity: 2.2,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(...coord);
      nodesGroup.add(nodeMesh);
    });

    // Connecting Lines
    const linePoints: THREE.Vector3[] = [];
    nodeCoords.forEach((coord, idx) => {
      linePoints.push(new THREE.Vector3(0, 0, 0));
      linePoints.push(new THREE.Vector3(...coord));
      const next = nodeCoords[(idx + 1) % nodeCoords.length];
      linePoints.push(new THREE.Vector3(...coord));
      linePoints.push(new THREE.Vector3(...next));
    });
    const linesGeo = new THREE.BufferGeometry().setFromPoints(linePoints);
    const linesMat = new THREE.LineBasicMaterial({
      color: 0x818cf8,
      transparent: true,
      opacity: 0.35,
    });
    const rays = new THREE.LineSegments(linesGeo, linesMat);
    nodesGroup.add(rays);

    // 3. Orbiting Torus Ring
    const torusGeo = new THREE.TorusGeometry(3.1, 0.035, 16, 90);
    const torusMat = new THREE.MeshStandardMaterial({
      color: 0xc084fc,
      emissive: 0xa855f7,
      emissiveIntensity: 1.4,
      transparent: true,
      opacity: 0.55,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 4;
    rootGroup.add(torusMesh);

    // 4. Floating Interface Panels
    const panelGeo1 = new THREE.BoxGeometry(1.6, 0.9, 0.04);
    const panelMat1 = new THREE.MeshPhysicalMaterial({
      color: 0x9333ea,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.5,
    });
    const panel1 = new THREE.Mesh(panelGeo1, panelMat1);
    panel1.position.set(-2.4, 1.8, -1.0);
    panel1.rotation.set(0.2, 0.3, -0.1);
    rootGroup.add(panel1);

    const panelGeo2 = new THREE.BoxGeometry(1.7, 1.0, 0.04);
    const panelMat2 = new THREE.MeshPhysicalMaterial({
      color: 0x06b6d4,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: 0.5,
    });
    const panel2 = new THREE.Mesh(panelGeo2, panelMat2);
    panel2.position.set(2.5, -1.6, 0.5);
    panel2.rotation.set(-0.15, -0.3, 0.1);
    rootGroup.add(panel2);

    // 5. Particle Dust Field
    const particleCount = 180;
    const particlePositions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount * 3; i += 3) {
      particlePositions[i] = (Math.random() - 0.5) * 16;
      particlePositions[i + 1] = (Math.random() - 0.5) * 16;
      particlePositions[i + 2] = (Math.random() - 0.5) * 10;
    }
    const particleGeo = new THREE.BufferGeometry();
    particleGeo.setAttribute('position', new THREE.BufferAttribute(particlePositions, 3));
    const particleMat = new THREE.PointsMaterial({
      size: 0.06,
      color: 0x38bdf8,
      transparent: true,
      opacity: 0.7,
      sizeAttenuation: true,
    });
    const particleField = new THREE.Points(particleGeo, particleMat);
    scene.add(particleField);

    // Pointer Parallax Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.45;
      targetRotationX = -y * 0.35;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      // Smooth float & rotation
      cubeGroup.position.y = Math.sin(elapsedTime * 1.5) * 0.15;
      cubeMesh.rotation.x += delta * 0.25;
      cubeMesh.rotation.y += delta * 0.35;
      edgesMesh.rotation.x = cubeMesh.rotation.x;
      edgesMesh.rotation.y = cubeMesh.rotation.y;
      coreMesh.rotation.x -= delta * 0.3;
      coreMesh.rotation.y -= delta * 0.4;

      nodesGroup.rotation.y += delta * 0.12;
      nodesGroup.rotation.z += delta * 0.08;

      torusMesh.rotation.x += delta * 0.15;
      torusMesh.rotation.y -= delta * 0.2;

      panel1.position.y = 1.8 + Math.sin(elapsedTime * 1.8 + 1) * 0.12;
      panel2.position.y = -1.6 + Math.cos(elapsedTime * 1.6) * 0.12;

      particleField.rotation.y += delta * 0.02;

      // Smooth Parallax Lerp
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    // Cleanup
    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handlePointerMove);

      // Dispose resources
      boxGeo.dispose();
      boxMat.dispose();
      edgesGeo.dispose();
      edgesMat.dispose();
      coreGeo.dispose();
      coreMat.dispose();
      nodeGeo.dispose();
      linesGeo.dispose();
      linesMat.dispose();
      torusGeo.dispose();
      torusMat.dispose();
      panelGeo1.dispose();
      panelMat1.dispose();
      panelGeo2.dispose();
      panelMat2.dispose();
      particleGeo.dispose();
      particleMat.dispose();
      renderer.dispose();
    };
  }, []);

  if (hasWebGLError) {
    return <HeroFallback3D />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] lg:h-[540px] select-none flex items-center justify-center overflow-hidden"
    >
      {/* Soft radial background depth */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        <div className="w-80 h-80 rounded-full bg-purple-600/15 blur-[100px]" />
        <div className="w-72 h-72 rounded-full bg-cyan-500/10 blur-[90px] translate-x-10 translate-y-10" />
      </div>

      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Interactive Floating Pipeline Badge */}
      <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="px-4 py-2.5 rounded-full bg-[#0e1224]/85 backdrop-blur-xl border border-white/10 shadow-[0_10px_30px_rgba(0,0,0,0.5)] flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
          <span className="text-slate-300 font-medium">Ideas</span>
          <span className="text-purple-400">→</span>
          <span className="text-slate-300 font-medium">Design</span>
          <span className="text-purple-400">→</span>
          <span className="text-slate-300 font-medium">Development</span>
          <span className="text-purple-400">→</span>
          <span className="text-cyan-300 font-semibold">Launch</span>
        </div>
      </div>
    </div>
  );
};
