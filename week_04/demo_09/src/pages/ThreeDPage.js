import { createRoot } from 'react-dom/client'
import React, { useRef, useState } from 'react'
import { Canvas, useFrame } from '@react-three/fiber'
import { Box } from '../components/3d';

const ThreeDPage = () => {
  return (
    <Canvas>x
      <ambientLight intensity={0.6} />
      <directionalLight color="blue" position={[0, 0, 5]} />
      <Box position={[0, 0, 3]}/>
    </Canvas>
  );
};

export default ThreeDPage;