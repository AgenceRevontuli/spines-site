// @ts-nocheck
"use client"
import { useRef, useMemo } from 'react'
import { useFrame, Canvas } from '@react-three/fiber'
import { OrbitControls, useFBO, Float } from "@react-three/drei"
import backgroundVertexShader from '@/app/Shaders/background/vertex.glsl'
import backgroundFragmentShader from '@/app/Shaders/background/fragment.glsl'
import vertexShader from '@/app/Shaders/reflexion/vertex'
import fragmentShader from '@/app/Shaders/reflexion/fragment'
import { uuid as uuidv4 } from "uuidv4"
import { Leva, folder, useControls } from 'leva'
import * as THREE from 'three'
import { sin } from 'three/examples/jsm/nodes/Nodes.js'

let colors = [
  '#bababa', 
  '#c54787',
  '#414060',
  '#414572',
  '#d47fa6'
] as any 
colors = colors.map((color: any) => new THREE.Color(color))

const Geometries = () => {
  // This reference gives us direct access to our mesh
  const mesh = useRef();
  const backgroundGroup = useRef();
  
  // This is our main render target where we'll render and store the scene as a texture
  const mainRenderTarget = useFBO();
  const backRenderTarget = useFBO();

  const {
    light,
    shininess,
    diffuseness,
    fresnelPower,
    iorR,
    iorY,
    iorG,
    iorC,
    iorB,
    iorP,
    saturation,
    chromaticAberration,
    refraction
  } = useControls({

    light: {
      value: new THREE.Vector3(-1.0, 1.0, 1.0),
    },
    diffuseness: {
      value: 0.2,
    },
    shininess: {
      value: 15.0,
    },
    fresnelPower: {
      value: 8.0,
    },
    ior: folder({
      iorR: { min: 1.0, max: 2.333, step: 0.001, value: 1.15 },
      iorY: { min: 1.0, max: 2.333, step: 0.001, value: 1.16 },
      iorG: { min: 1.0, max: 2.333, step: 0.001, value: 1.18 },
      iorC: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorB: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
      iorP: { min: 1.0, max: 2.333, step: 0.001, value: 1.22 },
    }),
    saturation: { value: 1.14, min: 1, max: 1.25, step: 0.01 },
    chromaticAberration: {
      value: 0.5,
      min: 0,
      max: 1.5,
      step: 0.01,
    },
    refraction: {
      value: 0.25,
      min: 0,
      max: 1,
      step: 0.01,
    },
  })

  const uniforms = useMemo(() => ({
    uTexture: {
      value: "",
    },
    uIorR: { value: 1.0 },
    uIorY: { value: 1.0 },
    uIorG: { value: 1.0 },
    uIorC: { value: 1.0 },
    uIorB: { value: 1.0 },
    uIorP: { value: 1.0 },
    uRefractPower: {
      value: 0.2,
    },
    uChromaticAberration: {
      value: 1.0
    },
    uSaturation: { value: 0.0 },
    uShininess: { value: 40.0 },
    uDiffuseness: { value: 0.2 },
    uFresnelPower: { value: 8.0 },
    uLight: {
      value: new THREE.Vector3(-1.0, 1.0, 1.0),
    },
    winResolution: {
      value: new THREE.Vector2(
        window.innerWidth,
        window.innerHeight
      ).multiplyScalar(Math.min(window.devicePixelRatio, 2)), // if DPR is 3 the shader glitches 🤷‍♂️
    },
  }), [])

  useFrame((state) => {
    const { gl, scene, camera } = state;
    mesh.current.visible = false;

    mesh.current.material.uniforms.uDiffuseness.value = diffuseness;
    mesh.current.material.uniforms.uShininess.value = shininess;
    mesh.current.material.uniforms.uLight.value = new THREE.Vector3(
      light.x,
      light.y,
      light.z
    );
    mesh.current.material.uniforms.uFresnelPower.value = fresnelPower;

    mesh.current.material.uniforms.uIorR.value = iorR;
    mesh.current.material.uniforms.uIorY.value = iorY;
    mesh.current.material.uniforms.uIorG.value = iorG;
    mesh.current.material.uniforms.uIorC.value = iorC;
    mesh.current.material.uniforms.uIorB.value = iorB;
    mesh.current.material.uniforms.uIorP.value = iorP;

    mesh.current.material.uniforms.uSaturation.value = saturation;
    mesh.current.material.uniforms.uChromaticAberration.value = chromaticAberration;
    mesh.current.material.uniforms.uRefractPower.value = refraction;

    gl.setRenderTarget(backRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = backRenderTarget.texture;
    mesh.current.material.side = THREE.BackSide;

    mesh.current.visible = true;

    gl.setRenderTarget(mainRenderTarget);
    gl.render(scene, camera);

    mesh.current.material.uniforms.uTexture.value = mainRenderTarget.texture;
    mesh.current.material.side = THREE.FrontSide;

    gl.setRenderTarget(null);
    
  });



  const backgroundRef = useRef()
  useFrame((state, delta) => {
    // @ts-ignore
    backgroundRef.current.uniforms.uTime.value += delta * 0.01
  })

  useFrame((state, delta) => {
    mesh.current.rotation.y += Math.sin(delta) * 0.002
    mesh.current.rotation.x += Math.cos(delta) * 0.002
  })

  return (
    <>
      <group ref={backgroundGroup} visible={false}>
        <mesh position={[-4, -3, -4]}>
          <icosahedronGeometry args={[2, 16]} />
          <meshBasicMaterial color="white" transparent={true} />
        </mesh>
        <mesh position={[4, -3, -4]}>
          <icosahedronGeometry args={[2, 16]} />
          <meshBasicMaterial color="white" transparent={true} />
        </mesh>
        <mesh position={[-5, 3, -4]}>
          <icosahedronGeometry args={[2, 16]} />
          <meshBasicMaterial color="white" transparent={true} />
        </mesh>
        <mesh position={[5, 3, -4]}>
          <icosahedronGeometry args={[2, 16]} />
          <meshBasicMaterial color="white" transparent={true} />
        </mesh>
      </group>
      <mesh ref={mesh} position={[0.14, 0, 0]}>
        <torusGeometry args={[0.05, 0.03, 32, 100]} />
        <shaderMaterial
          key={uuidv4()}
          vertexShader={vertexShader}
          fragmentShader={fragmentShader}
          uniforms={uniforms}
          transparent={true}
        />
      </mesh>
        <mesh>
            <planeGeometry args={[4, 4, 200, 200]} />
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



const Scene = () => {
  return (
    <>
      <Leva collapsed hidden />
      <Canvas camera={{ position: [0, 0, 0.2] }} dpr={[1, 2]}>
        <ambientLight intensity={1.0} />
        <Geometries />
      </Canvas>
    </>
  );
};

export default Scene;