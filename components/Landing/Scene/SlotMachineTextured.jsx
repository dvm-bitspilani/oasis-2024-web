/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { useGLTF, useScroll, useVideoTexture } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import gsap from 'gsap'
import { MeshTransmissionMaterial } from './MeshTransmssionMaterial'
import { MeshBasicMaterial } from 'three'

export function SlotMachine2(props) {
    const { nodes, materials } = useGLTF('/Models/slotMachine.glb')

    const tl = useRef()
    const slotMachine = useRef()
    const screen = useRef()

    const texture = useVideoTexture(props.video, {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: 0,
        crossOrigin: 'anonymous',
        playsInline: true
    })

    const scroll = useScroll()

    useEffect(() => {
        if (screen.current) {
            const material = new MeshTransmissionMaterial(10);
            material.clearcoat = 1;
            material.clearcoatRoughness = 0;
            material.transmission = 1.025;
            material.chromaticAberration = 50;
            material.anisotrophicBlur = 0;
            material.roughness = 0;
            material.thickness = 4.5;
            material.ior = 0;
            material.distortion = 0.1;
            material.distortionScale = 0.2;
            material.temporalDistortion = 0.2;
            material.map = texture;
            material.transparent = false;
            material.opacity = 1;
            // material.color = new THREE.Color(0x9AF0F4);
            screen.current.material.map = texture;
        }

        const videoElement = texture.source.data;
        if (videoElement) {
            videoElement.play().catch(e => console.error("Error playing video:", e));
        }
    }, [texture])

    useFrame(() => {
        tl.current.seek(scroll.offset * tl.current.duration())
    })

    useLayoutEffect(() => {
        tl.current = gsap.timeline()

        tl.current.to(
            slotMachine.current.rotation,
            {
                duration: 0.5,
                y: -Math.PI / 6,
                ease: 'sine.inOut'
            },
            0
        )
        tl.current.to(
            slotMachine.current.position,
            {
                duration: 0.5,
                x: -0.9,
                z: -0.5,
                ease: 'sine.inOut'
            },
            0
        )
        tl.current.to(
            slotMachine.current.rotation,
            {
                duration: 0.45,
                y: -Math.PI / 4,
                ease: 'sine.inOut'
            },
            0.5
        )
    }, [])

    return (
        <group ref={slotMachine} {...props} dispose={null}>
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere001.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere002.geometry}
                material={materials.MapTest}
                position={[0.008, 0.317, -0.235]}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere003.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere004.geometry}
                material={materials.MapTest}
            />
            <mesh
                castShadow
                receiveShadow
                geometry={nodes.Sphere005.geometry}
                material={materials.MapTest}
            />
        </group>
    )
}

useGLTF.preload('/Models/slotMachine.glb')