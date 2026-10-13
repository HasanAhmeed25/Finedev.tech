import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';

const GyroscopeRings = () => {
  const outerRing = useRef<THREE.Mesh>(null!);
  const midRing = useRef<THREE.Mesh>(null!);
  const innerCore = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (outerRing.current) {
      outerRing.current.rotation.x += delta * 0.3;
      outerRing.current.rotation.y += delta * 0.2;
    }
    if (midRing.current) {
      midRing.current.rotation.y -= delta * 0.4;
      midRing.current.rotation.z += delta * 0.25;
    }
    if (innerCore.current) {
      innerCore.current.rotation.x += delta * 0.5;
      innerCore.current.rotation.z -= delta * 0.35;
    }
  });

  return (
    <group>
      {/* Outer Torus */}
      <mesh ref={outerRing}>
        <torusGeometry args={[2.2, 0.04, 16, 80]} />
        <meshStandardMaterial
          color="#a855f7"
          emissive="#7c3aed"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Middle Torus */}
      <mesh ref={midRing} rotation={[Math.PI / 3, 0, 0]}>
        <torusGeometry args={[1.6, 0.035, 16, 70]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#0284c7"
          emissiveIntensity={1.5}
          roughness={0.2}
          metalness={0.8}
        />
      </mesh>

      {/* Center Crystalline Icosahedron */}
      <mesh ref={innerCore}>
        <icosahedronGeometry args={[0.9, 0]} />
        <meshPhysicalMaterial
          color="#c084fc"
          emissive="#9333ea"
          emissiveIntensity={0.8}
          roughness={0.15}
          metalness={0.2}
          transmission={0.8}
          transparent
          opacity={0.85}
        />
      </mesh>
    </group>
  );
};

export const WhyUs3DElement: React.FC = () => {
  return (
    <div className="relative w-full h-[320px] sm:h-[400px] flex items-center justify-center select-none pointer-events-none">
      {/* Ambient background glow */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
        <div className="w-64 h-64 rounded-full bg-purple-600/15 blur-[90px]" />
        <div className="w-56 h-56 rounded-full bg-cyan-500/10 blur-[80px]" />
      </div>

      <Canvas
        camera={{ position: [0, 0, 5], fov: 45 }}
        gl={{ antialias: true, alpha: true }}
        className="w-full h-full"
      >
        <ambientLight intensity={0.9} />
        <directionalLight position={[5, 5, 5]} intensity={1.5} />
        <pointLight position={[-4, 3, 2]} intensity={2} color="#c084fc" />
        <pointLight position={[4, -3, 2]} intensity={2} color="#22d3ee" />
        <Float speed={2} rotationIntensity={0.3} floatIntensity={0.4}>
          <GyroscopeRings />
        </Float>
      </Canvas>

      {/* Overlay Badge */}
      <div className="absolute bottom-4 left-1/2 -translate-x-1/2 px-4 py-1.5 rounded-full bg-[#0d1020]/80 border border-white/10 backdrop-blur-md text-[11px] font-mono text-slate-300 pointer-events-auto">
        CORE ENGINEERING FOUNDATION
      </div>
    </div>
  );
};
