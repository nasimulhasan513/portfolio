"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Icosahedron, MeshDistortMaterial } from "@react-three/drei";
import { useRef, Suspense } from "react";
import type { Mesh, Group } from "three";

function Core() {
  const mesh = useRef<Mesh>(null);
  const wire = useRef<Mesh>(null);
  useFrame((_, delta) => {
    if (mesh.current) {
      mesh.current.rotation.y += delta * 0.18;
      mesh.current.rotation.x += delta * 0.05;
    }
    if (wire.current) {
      wire.current.rotation.y -= delta * 0.12;
    }
  });
  return (
    <group>
      <Icosahedron ref={mesh} args={[1.35, 12]}>
        <MeshDistortMaterial
          color="#7621B0"
          emissive="#B600A8"
          emissiveIntensity={0.35}
          roughness={0.2}
          metalness={0.8}
          distort={0.35}
          speed={1.6}
        />
      </Icosahedron>
      <Icosahedron ref={wire} args={[1.7, 1]}>
        <meshBasicMaterial color="#BE4C00" wireframe transparent opacity={0.25} />
      </Icosahedron>
    </group>
  );
}

function Nodes() {
  const group = useRef<Group>(null);
  useFrame((_, delta) => {
    if (group.current) group.current.rotation.y += delta * 0.3;
  });
  const positions: [number, number, number][] = [
    [2.4, 0.6, 0],
    [-2.3, -0.8, 0.5],
    [0.4, 2.2, -0.6],
    [-0.6, -2.1, 0.3],
  ];
  return (
    <group ref={group}>
      {positions.map((p, i) => (
        <mesh key={i} position={p}>
          <sphereGeometry args={[0.09, 16, 16]} />
          <meshStandardMaterial color="#D7E2EA" emissive="#B600A8" emissiveIntensity={0.6} />
        </mesh>
      ))}
    </group>
  );
}

export default function HeroObject() {
  return (
    <Canvas
      camera={{ position: [0, 0, 5], fov: 45 }}
      dpr={[1, 2]}
      gl={{ antialias: true, alpha: true }}
      style={{ background: "transparent" }}
    >
      <Suspense fallback={null}>
        <ambientLight intensity={0.4} />
        <pointLight position={[5, 5, 5]} intensity={60} color="#B600A8" />
        <pointLight position={[-5, -3, 2]} intensity={40} color="#BE4C00" />
        <Float speed={1.5} rotationIntensity={0.4} floatIntensity={0.8}>
          <Core />
        </Float>
        <Nodes />
      </Suspense>
    </Canvas>
  );
}
