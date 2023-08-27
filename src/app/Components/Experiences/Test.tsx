"use client"
import { Canvas } from "@react-three/fiber";
import AnimatedBackground from "./AnimatedBackground";
import { EffectComposer, Noise } from '@react-three/postprocessing'


export default function Test() {
  return (
    <div className="absolute h-full w-full z-[-1]">
        <Canvas 
            camera={{ position: [0, 0, 0.2], fov: 45 }}
        >
                <AnimatedBackground />
        </Canvas>
    </div>
  )
}
