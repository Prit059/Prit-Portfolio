import React from 'react'
import * as THREE from 'three'
function HeroLights() {
  return (
    <>
    <spotLight
    position={[6.9,14.5,6]}
    intensity={150}
    angle={0.6}
    penumbra={0.25}
    color="white"
    />

    <spotLight
    position={[4,-3,4]}
    intensity={50}
    angle={0.6}
    penumbra={0.5}
    color="blue"
    />

    <spotLight
    position={[-2,-5,8]}
    intensity={50}
    angle={0.57}
    penumbra={0.6}
    color="red"
    />

    <spotLight
    position={[2,-5,9]}
    intensity={250}
    angle={0.3}
    penumbra={0.6}
    color="green"
    />
    <primitive
      object={new THREE.AmbientLight('blue', 0.1)}
      
    />
    </>
  )
}

export default HeroLights