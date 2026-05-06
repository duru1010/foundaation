"use client";

import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { Float, PerspectiveCamera, Environment, ContactShadows } from "@react-three/drei";

/**
 * 3D Cube Component
 * Adjusted for Light Theme: White/Silver cubes with purple glows
 */
function FloatingCube({ position, rotation, scale = 1 }: { position: [number, number, number], rotation: [number, number, number], scale?: number }) {
  return (
    <Float speed={1.2} rotationIntensity={0.8} floatIntensity={1}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color="#ffffff" 
          roughness={0.1} 
          metalness={0.9} 
          emissive="#a855f7" 
          emissiveIntensity={0.15} 
        />
      </mesh>
    </Float>
  );
}

function CubesScene() {
  return (
    <div className="absolute inset-0 z-0 h-full w-full">
      <Canvas shadows gl={{ antialias: true }}>
        <PerspectiveCamera makeDefault position={[0, 0, 10]} fov={50} />
        
        {/* Warm light and Purple tint for the "White/Purple" theme */}
        <ambientLight intensity={0.7} />
        <pointLight position={[10, 10, 10]} intensity={1.5} color="#d8b4fe" />
        <spotLight position={[-10, 10, 10]} angle={0.15} penumbra={1} intensity={1} color="#ffffff" />
        
        <Suspense fallback={null}>
          <FloatingCube position={[4, 2, 0]} rotation={[0.4, 0.2, 0.5]} scale={1.4} />
          <FloatingCube position={[6, 0, -2]} rotation={[1.1, 0.4, 0.2]} scale={1.1} />
          <FloatingCube position={[3, -2.5, 1]} rotation={[0.2, 1.2, 0.8]} scale={1.3} />
          <FloatingCube position={[7, 3, -3]} rotation={[0, 0, 0]} scale={0.8} />
          <FloatingCube position={[8, -2, -1]} rotation={[0.5, 0.5, 0.5]} scale={0.9} />
          <FloatingCube position={[2, 0.5, -2]} rotation={[0.8, 0.1, 0.4]} scale={0.6} />
          
          <Environment preset="city" />
          {/* Subtle purple shadows on the white floor */}
          <ContactShadows position={[0, -4, 0]} opacity={0.15} scale={20} blur={2.5} far={4.5} color="#7e22ce" />
        </Suspense>
      </Canvas>
    </div>
  );
}

export default function LandingPage() {
  return (
    <main className="relative h-[600px] w-full bg-[#fdfaff] text-[#1a1a1a] selection:bg-purple-200">
      
      {/* 1. BACKGROUND EFFECTS */}
      {/* Soft Purple Glow against white bg */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_75%_50%,#f3e8ff_0%,transparent_50%)] opacity-100" />
      
      {/* Grid Pattern (Light Version) */}
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_right,#7e22ce10_1px,transparent_1px),linear-gradient(to_bottom,#7e22ce10_1px,transparent_1px)] bg-[size:45px_45px] [mask-image:radial-gradient(ellipse_80%_60%_at_50%_100%,#000_20%,transparent_100%)]" />

      {/* 2. 3D LAYER */}
      <CubesScene />

      {/* 3. CONTENT LAYER */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 pt-32 pb-20 md:pt-48">
        <div className="max-w-2xl">
          
          {/* Badge (White/Purple) */}
         

          {/* Title (Dark Grey to Purple Gradient) */}
          <h1 className="mb-8 text-6xl font-extrabold leading-[1.1] tracking-tight text-gray-900 md:text-8xl">
          Our 
            <span className="bg-gradient-to-r from-purple-600 to-purple-400 bg-clip-text text-transparent">
           Gallary
            </span>
          </h1>

          {/* Description */}
          

          {/* Form (Clean White/Purple Shadow) */}
         
        </div>
      </div>

      {/* 4. LOGO BAR (BOTTOM) */}
      
    </main>
  );
}