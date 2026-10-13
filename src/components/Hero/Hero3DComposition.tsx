import React, { useRef, useMemo, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float } from '@react-three/drei';
import * as THREE from 'three';
import { HeroFallback3D } from './HeroFallback3D';

// Central Glass Cube with inner glowing core and node edges
const CentralGlassCube = () => {
  const outerMeshRef = useRef<THREE.Mesh>(null!);
  const innerMeshRef = useRef<THREE.Mesh>(null!);
  const edgesRef = useRef<THREE.LineSegments>(null!);

  useFrame((_state, delta) => {
    // Gentle rotation
    if (outerMeshRef.current) {
      outerMeshRef.current.rotation.x += delta * 0.25;
      outerMeshRef.current.rotation.y += delta * 0.35;
    }
    if (innerMeshRef.current) {
      innerMeshRef.current.rotation.x -= delta * 0.3;
      innerMeshRef.current.rotation.y -= delta * 0.4;
    }
    if (edgesRef.current && outerMeshRef.current) {
      edgesRef.current.rotation.x = outerMeshRef.current.rotation.x;
      edgesRef.current.rotation.y = outerMeshRef.current.rotation.y;
    }
  });

  const boxGeometry = useMemo(() => new THREE.BoxGeometry(2.2, 2.2, 2.2), []);
  const edgesGeometry = useMemo(() => new THREE.EdgesGeometry(boxGeometry), [boxGeometry]);

  return (
    <group position={[0, 0, 0]}>
      {/* Outer Translucent Glass Cube */}
      <mesh ref={outerMeshRef} geometry={boxGeometry}>
        <meshPhysicalMaterial
          color="#8b5cf6"
          roughness={0.1}
          metalness={0.15}
          transmission={0.88}
          ior={1.45}
          thickness={1.5}
          transparent={true}
          opacity={0.7}
        />
      </mesh>

      {/* Cube Wireframe Edge Accents */}
      <lineSegments ref={edgesRef} geometry={edgesGeometry}>
        <lineBasicMaterial color="#38bdf8" linewidth={1.5} transparent opacity={0.65} />
      </lineSegments>

      {/* Inner Glowing Core Hexahedron */}
      <mesh ref={innerMeshRef}>
        <octahedronGeometry args={[0.9, 0]} />
        <meshStandardMaterial
          color="#22d3ee"
          emissive="#06b6d4"
          emissiveIntensity={1.8}
          roughness={0.3}
          metalness={0.8}
        />
      </mesh>
    </group>
  );
};

// Connected Satellite Nodes & Orbiting Lines
const ConnectedNodes = () => {
  const groupRef = useRef<THREE.Group>(null!);

  const nodePositions: [number, number, number][] = useMemo(
    () => [
      [2.2, 1.4, -0.6],
      [-2.3, 1.2, 0.8],
      [1.8, -2.0, 1.1],
      [-1.9, -1.6, -1.0],
      [0.2, 2.4, 0.4],
      [-0.4, -2.5, 0.5],
    ],
    []
  );

  const linesGeometry = useMemo(() => {
    const points: THREE.Vector3[] = [];
    nodePositions.forEach((pos, idx) => {
      // Connect to center origin and to next node
      points.push(new THREE.Vector3(0, 0, 0));
      points.push(new THREE.Vector3(...pos));

      const nextPos = nodePositions[(idx + 1) % nodePositions.length];
      points.push(new THREE.Vector3(...pos));
      points.push(new THREE.Vector3(...nextPos));
    });
    return new THREE.BufferGeometry().setFromPoints(points);
  }, [nodePositions]);

  useFrame((_state, delta) => {
    if (groupRef.current) {
      groupRef.current.rotation.y += delta * 0.12;
      groupRef.current.rotation.z += delta * 0.08;
    }
  });

  return (
    <group ref={groupRef}>
      {/* Node connecting rays */}
      <lineSegments geometry={linesGeometry}>
        <lineBasicMaterial color="#818cf8" transparent opacity={0.3} />
      </lineSegments>

      {/* Floating glowing vertices */}
      {nodePositions.map((pos, i) => (
        <mesh key={i} position={pos}>
          <sphereGeometry args={[0.12, 16, 16]} />
          <meshStandardMaterial
            color={i % 2 === 0 ? '#c084fc' : '#22d3ee'}
            emissive={i % 2 === 0 ? '#9333ea' : '#0284c7'}
            emissiveIntensity={2}
          />
        </mesh>
      ))}
    </group>
  );
};

// Orbiting Torus Ring
const OrbitingRing = () => {
  const ringRef = useRef<THREE.Mesh>(null!);

  useFrame((_state, delta) => {
    if (ringRef.current) {
      ringRef.current.rotation.x += delta * 0.15;
      ringRef.current.rotation.y -= delta * 0.2;
    }
  });

  return (
    <mesh ref={ringRef} rotation={[Math.PI / 4, 0, 0]}>
      <torusGeometry args={[3.2, 0.03, 16, 100]} />
      <meshStandardMaterial
        color="#c084fc"
        emissive="#a855f7"
        emissiveIntensity={1.2}
        transparent
        opacity={0.5}
      />
    </mesh>
  );
};

// Floating Abstract UI Panels in 3D Space
const FloatingInterfacePanel = ({
  position,
  rotation,
  scale = [1.4, 0.8, 0.04],
  color = '#8b5cf6',
}: {
  position: [number, number, number];
  rotation: [number, number, number];
  scale?: [number, number, number];
  color?: string;
}) => {
  const meshRef = useRef<THREE.Mesh>(null!);

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={meshRef} position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshPhysicalMaterial
          color={color}
          roughness={0.2}
          metalness={0.1}
          transmission={0.85}
          ior={1.4}
          transparent
          opacity={0.55}
        />
      </mesh>
    </Float>
  );
};

// Subtle Star / Particle Dust Field
const ParticleDustField = () => {
  const count = 180;
  const pointsRef = useRef<THREE.Points>(null!);

  const [positions] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      pos[i * 3] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 1] = (Math.random() - 0.5) * 16;
      pos[i * 3 + 2] = (Math.random() - 0.5) * 10;
    }
    return [pos];
  }, [count]);

  useFrame((_state, delta) => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += delta * 0.02;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        color="#38bdf8"
        transparent
        opacity={0.7}
        sizeAttenuation
      />
    </points>
  );
};

// Parallax Scene Root Group
const ParallaxScene = () => {
  const groupRef = useRef<THREE.Group>(null!);

  useFrame((state, delta) => {
    if (groupRef.current) {
      // Smooth lerp based on cursor coordinates
      const targetX = state.pointer.x * 0.35;
      const targetY = state.pointer.y * 0.25;
      groupRef.current.rotation.y = THREE.MathUtils.damp(
        groupRef.current.rotation.y,
        targetX,
        3,
        delta
      );
      groupRef.current.rotation.x = THREE.MathUtils.damp(
        groupRef.current.rotation.x,
        -targetY,
        3,
        delta
      );
    }
  });

  return (
    <group ref={groupRef}>
      <Float speed={1.8} rotationIntensity={0.25} floatIntensity={0.5}>
        <CentralGlassCube />
        <ConnectedNodes />
        <OrbitingRing />

        {/* Abstract Software Interface Panels */}
        <FloatingInterfacePanel
          position={[-2.4, 1.8, -1]}
          rotation={[0.2, 0.3, -0.1]}
          scale={[1.5, 0.9, 0.04]}
          color="#9333ea"
        />
        <FloatingInterfacePanel
          position={[2.5, -1.6, 0.5]}
          rotation={[-0.15, -0.3, 0.1]}
          scale={[1.6, 1.0, 0.04]}
          color="#06b6d4"
        />
      </Float>

      <ParticleDustField />
    </group>
  );
};

// Error Boundary & WebGL capability detection wrapper
class WebGLErrorBoundary extends React.Component<
  { children: React.ReactNode; fallback: React.ReactNode },
  { hasError: boolean }
> {
  constructor(props: { children: React.ReactNode; fallback: React.ReactNode }) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error: any) {
    console.warn('WebGL rendering error caught by boundary:', error);
  }

  render() {
    if (this.state.hasError) {
      return this.props.fallback;
    }
    return this.props.children;
  }
}

export const Hero3DComposition: React.FC = () => {
  const [webGLSupported, setWebGLSupported] = useState<boolean>(true);

  useEffect(() => {
    // Check if WebGL is supported
    try {
      const canvas = document.createElement('canvas');
      const gl =
        canvas.getContext('webgl') ||
        canvas.getContext('experimental-webgl');
      if (!gl) {
        setWebGLSupported(false);
      }
    } catch {
      setWebGLSupported(false);
    }
  }, []);

  if (!webGLSupported) {
    return <HeroFallback3D />;
  }

  return (
    <WebGLErrorBoundary fallback={<HeroFallback3D />}>
      <div className="relative w-full h-[450px] lg:h-[540px] select-none flex items-center justify-center">
        {/* Soft radial background depth */}
        <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
          <div className="w-80 h-80 rounded-full bg-purple-600/15 blur-[100px]" />
          <div className="w-72 h-72 rounded-full bg-cyan-500/10 blur-[90px] translate-x-10 translate-y-10" />
        </div>

        {/* 3D Canvas */}
        <Canvas
          camera={{ position: [0, 0, 7.5], fov: 42 }}
          gl={{
            antialias: true,
            alpha: true,
            powerPreference: 'high-performance',
          }}
          className="w-full h-full cursor-grab active:cursor-grabbing"
        >
          {/* Ambient & directional lighting */}
          <ambientLight intensity={0.8} />
          <directionalLight position={[10, 10, 5]} intensity={1.4} color="#ffffff" />
          <pointLight position={[-6, 4, 3]} intensity={2.5} color="#c084fc" distance={15} />
          <pointLight position={[6, -4, 3]} intensity={2.5} color="#22d3ee" distance={15} />

          {/* Parallax Scene */}
          <ParallaxScene />
        </Canvas>

        {/* Interactive Floating Pipeline Badge: "Ideas → Design → Development → Launch" */}
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
    </WebGLErrorBoundary>
  );
};
