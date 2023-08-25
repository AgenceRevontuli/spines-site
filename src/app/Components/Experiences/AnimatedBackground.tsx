"use client"
import { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import backgroundVertexShader from '@/app/Shaders/vertex.glsl'
import backgroundFragmentShader from '@/app/Shaders/fragment.glsl'
import * as THREE from 'three'

let colors = [
  '#bababa', 
  '#c54787',
  '#414060',
  '#414572',
  '#d47fa6'
] as any 
colors = colors.map((color: any) => new THREE.Color(color))

export default function AnimatedBackground() {

  const backgroundRef = useRef()
  useFrame((state, delta) => {
    // @ts-ignore
    backgroundRef.current.uniforms.uTime.value += delta * 0.005
  })

  return (
    <>
        <mesh>
            <planeGeometry args={[2, 2, 200, 200]} />
            <shaderMaterial 
              // @ts-ignore
              ref={backgroundRef}
              vertexShader={backgroundVertexShader}
              fragmentShader={backgroundFragmentShader}
              uniforms={{
                uTime: { value: 0.5 },
                uColor: { value: colors }
              }}
            />
        </mesh>
    </>
  )
}
