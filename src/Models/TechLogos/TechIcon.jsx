import React, { useEffect } from 'react';
import { Canvas } from '@react-three/fiber';
import { Float ,Environment, useGLTF, OrbitControls } from '@react-three/drei';
import * as THREE from 'three';

function TechIcon({ model }) {
  const scene = useGLTF(model.modelPath);

  useEffect(() => {
    if(model.name === 'Interactive Developer'){
      scene.scene.traverse((child) => {
        if(child.isMesh && child.name === 'Object_5'){
          child.material = new THREE.MeshBasicMaterial({ color: '#fff' });
        }
      })
    }
  },[scene])
  return (
    <Canvas>
      <ambientLight intensity={0.3}/>
      <directionalLight position={[5,5,5]} intensity={0.7} />
      <OrbitControls enableZoom={false}/>
      <Environment preset='city' />

      <Float speed={5} rotationIntensity={2} floatIntensity={1.5}>
        <group scale={model.scale} rotation={model.rotation}>
          <primitive object={scene.scene}/>
        </group>
      </Float>
    </Canvas>
    
  );
}

export default TechIcon;
