import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';
import { useTheme } from '../../context/ThemeContext';
import { HeroFallback3D } from './HeroFallback3D';

export const Hero3DComposition: React.FC = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const [hasWebGLError, setHasWebGLError] = useState(false);
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

    // Color definitions based on current theme
    const isDark = theme === 'dark';
    const primaryAccentColor = isDark ? 0x8BA8FF : 0x285FE8;
    const cubeColor = isDark ? 0x1A2333 : 0xF3F6FC;
    const edgeColor = isDark ? 0x8BA8FF : 0x285FE8;
    const coreColor = isDark ? 0x8BA8FF : 0x285FE8;
    const ringColor = isDark ? 0x303B4B : 0xCBD5E1;

    // Studio Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, isDark ? 0.8 : 1.1);
    scene.add(ambientLight);

    const keyLight = new THREE.DirectionalLight(0xffffff, isDark ? 1.2 : 1.6);
    keyLight.position.set(6, 8, 5);
    scene.add(keyLight);

    const fillLight = new THREE.DirectionalLight(primaryAccentColor, isDark ? 0.8 : 0.6);
    fillLight.position.set(-6, -4, 3);
    scene.add(fillLight);

    // Root Group for Mouse Parallax
    const rootGroup = new THREE.Group();
    scene.add(rootGroup);

    // 1. Central Glass Cube & Edges
    const cubeGroup = new THREE.Group();
    rootGroup.add(cubeGroup);

    const boxGeo = new THREE.BoxGeometry(2.1, 2.1, 2.1);
    const boxMat = new THREE.MeshPhysicalMaterial({
      color: cubeColor,
      roughness: 0.15,
      metalness: 0.1,
      transmission: 0.88,
      ior: 1.45,
      thickness: 1.2,
      transparent: true,
      opacity: isDark ? 0.75 : 0.65,
    });
    const cubeMesh = new THREE.Mesh(boxGeo, boxMat);
    cubeGroup.add(cubeMesh);

    const edgesGeo = new THREE.EdgesGeometry(boxGeo);
    const edgesMat = new THREE.LineBasicMaterial({
      color: edgeColor,
      transparent: true,
      opacity: isDark ? 0.7 : 0.5,
    });
    const edgesMesh = new THREE.LineSegments(edgesGeo, edgesMat);
    cubeGroup.add(edgesMesh);

    // Inner Core Octahedron
    const coreGeo = new THREE.OctahedronGeometry(0.85, 0);
    const coreMat = new THREE.MeshStandardMaterial({
      color: coreColor,
      emissive: coreColor,
      emissiveIntensity: isDark ? 0.9 : 0.5,
      roughness: 0.2,
      metalness: 0.7,
    });
    const coreMesh = new THREE.Mesh(coreGeo, coreMat);
    cubeGroup.add(coreMesh);

    // 2. Connected Satellite Nodes & Rays
    const nodesGroup = new THREE.Group();
    rootGroup.add(nodesGroup);

    const nodeCoords: [number, number, number][] = [
      [2.2, 1.3, -0.6],
      [-2.2, 1.1, 0.8],
      [1.7, -1.9, 1.0],
      [-1.8, -1.5, -0.9],
      [0.2, 2.3, 0.4],
      [-0.3, -2.4, 0.5],
    ];

    const nodeGeo = new THREE.SphereGeometry(0.1, 16, 16);
    nodeCoords.forEach((coord, i) => {
      const nodeMat = new THREE.MeshStandardMaterial({
        color: i % 2 === 0 ? primaryAccentColor : ringColor,
        roughness: 0.2,
        metalness: 0.8,
      });
      const nodeMesh = new THREE.Mesh(nodeGeo, nodeMat);
      nodeMesh.position.set(...coord);
      nodesGroup.add(nodeMesh);
    });

    // Clean Connection Lines
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
      color: edgeColor,
      transparent: true,
      opacity: isDark ? 0.3 : 0.2,
    });
    const rays = new THREE.LineSegments(linesGeo, linesMat);
    nodesGroup.add(rays);

    // 3. Orbiting Torus Ring
    const torusGeo = new THREE.TorusGeometry(3.1, 0.03, 16, 90);
    const torusMat = new THREE.MeshStandardMaterial({
      color: ringColor,
      roughness: 0.3,
      metalness: 0.7,
      transparent: true,
      opacity: 0.6,
    });
    const torusMesh = new THREE.Mesh(torusGeo, torusMat);
    torusMesh.rotation.x = Math.PI / 4;
    rootGroup.add(torusMesh);

    // 4. Subtle Abstract Floating Software Interface Panels
    const panelGeo1 = new THREE.BoxGeometry(1.6, 0.9, 0.03);
    const panelMat1 = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x202D49 : 0xFFFFFF,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: isDark ? 0.6 : 0.8,
    });
    const panel1 = new THREE.Mesh(panelGeo1, panelMat1);
    panel1.position.set(-2.4, 1.8, -1.0);
    panel1.rotation.set(0.18, 0.25, -0.08);
    rootGroup.add(panel1);

    const panelGeo2 = new THREE.BoxGeometry(1.7, 1.0, 0.03);
    const panelMat2 = new THREE.MeshPhysicalMaterial({
      color: isDark ? 0x1B2430 : 0xF5F6F8,
      roughness: 0.2,
      metalness: 0.1,
      transmission: 0.85,
      transparent: true,
      opacity: isDark ? 0.6 : 0.8,
    });
    const panel2 = new THREE.Mesh(panelGeo2, panelMat2);
    panel2.position.set(2.5, -1.6, 0.5);
    panel2.rotation.set(-0.15, -0.25, 0.08);
    rootGroup.add(panel2);

    // Pointer Parallax Tracking
    let targetRotationX = 0;
    let targetRotationY = 0;

    const handlePointerMove = (e: MouseEvent) => {
      const rect = container.getBoundingClientRect();
      const x = (e.clientX - rect.left) / rect.width - 0.5;
      const y = (e.clientY - rect.top) / rect.height - 0.5;
      targetRotationY = x * 0.4;
      targetRotationX = -y * 0.3;
    };

    window.addEventListener('mousemove', handlePointerMove);

    // Animation Loop
    let animationFrameId: number;
    let clock = new THREE.Clock();

    const animate = () => {
      animationFrameId = requestAnimationFrame(animate);
      const delta = clock.getDelta();
      const elapsedTime = clock.getElapsedTime();

      cubeGroup.position.y = Math.sin(elapsedTime * 1.4) * 0.12;
      cubeMesh.rotation.x += delta * 0.2;
      cubeMesh.rotation.y += delta * 0.28;
      edgesMesh.rotation.x = cubeMesh.rotation.x;
      edgesMesh.rotation.y = cubeMesh.rotation.y;
      coreMesh.rotation.x -= delta * 0.25;
      coreMesh.rotation.y -= delta * 0.35;

      nodesGroup.rotation.y += delta * 0.1;
      nodesGroup.rotation.z += delta * 0.06;

      torusMesh.rotation.x += delta * 0.12;
      torusMesh.rotation.y -= delta * 0.16;

      panel1.position.y = 1.8 + Math.sin(elapsedTime * 1.6 + 1) * 0.1;
      panel2.position.y = -1.6 + Math.cos(elapsedTime * 1.4) * 0.1;

      // Smooth Parallax Lerp
      rootGroup.rotation.y += (targetRotationY - rootGroup.rotation.y) * 0.05;
      rootGroup.rotation.x += (targetRotationX - rootGroup.rotation.x) * 0.05;

      renderer.render(scene, camera);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', updateSize);
      window.removeEventListener('mousemove', handlePointerMove);

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
      renderer.dispose();
    };
  }, [theme]);

  if (hasWebGLError) {
    return <HeroFallback3D />;
  }

  return (
    <div
      ref={containerRef}
      className="relative w-full h-[450px] lg:h-[540px] select-none flex items-center justify-center overflow-hidden"
    >
      {/* 3D Canvas */}
      <canvas
        ref={canvasRef}
        className="w-full h-full cursor-grab active:cursor-grabbing block"
      />

      {/* Interactive Floating Pipeline Badge */}
      <div className="absolute -bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 z-20 pointer-events-auto">
        <div className="px-4 py-2 rounded-full bg-[var(--bg-card)] border border-[var(--border-color)] shadow-sm flex items-center gap-2 text-xs font-mono">
          <span className="w-2 h-2 rounded-full bg-[var(--accent-primary)] animate-pulse" />
          <span className="text-[var(--text-secondary)] font-medium">Ideas</span>
          <span className="text-[var(--text-muted)]">→</span>
          <span className="text-[var(--text-secondary)] font-medium">Design</span>
          <span className="text-[var(--text-muted)]">→</span>
          <span className="text-[var(--text-secondary)] font-medium">Development</span>
          <span className="text-[var(--text-muted)]">→</span>
          <span className="text-[var(--accent-primary)] font-semibold">Launch</span>
        </div>
      </div>
    </div>
  );
};
