"use client";

import { Canvas } from "@react-three/fiber";
// import React from 'react';

type Props = {};

export default function ViewCanvas({}: Props) {
  return (
    <Canvas>
      {/* <ambientLight /> 
      <pointLight position={[10, 10, 10]} />  */}
      
      <mesh>
        <boxGeometry args={[1, 1, 1]} /> 
        <meshStandardMaterial color="orange" /> 
      </mesh>
    </Canvas>
  );
}