import { OrbitControls } from '@react-three/drei'
import { Canvas } from '@react-three/fiber'
import React from 'react'
import { useMediaQuery } from 'react-responsive'
import { Room } from './Room';
import HeroLights from './HeroLights';
import Particles from './Particles';
import { gsap } from 'gsap/gsap-core';
import { useGSAP } from '@gsap/react';

function HeroExperience() {
  const isTablet = useMediaQuery({ query: '(max-width: 1024px)' });
  const isMobile = useMediaQuery({ query: '(max-width: 768px)' });

  useGSAP(()=>{
    gsap.fromTo("group",
      {
      
        x:-100,
        opacity:0,
      },
      {
        x:0,
        opacity:1,
      }  
    )
  })
  return (
    <Canvas camera={{position: [0, 0, 15], fov: 45}} >
      <OrbitControls 
        enablePan={false}
        enableZoom={!isTablet}
        maxDistance={20}
        minDistance={5}
        minPolarAngle={Math.PI / 5}
        maxPolarAngle={Math.PI / 2}

      />
      <HeroLights />

      <Particles count={400} />

      <group
      scale={isMobile ? 0.7 : 1}
      position={isMobile ? [0, -2.5, 0] : [0, -3.5, 0]}
      rotation={[0,-Math.PI / 4, 0]}

      >
      <Room
      />
      </group>
    </Canvas>
  )
}

export default HeroExperience