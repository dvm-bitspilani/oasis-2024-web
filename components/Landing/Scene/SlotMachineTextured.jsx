/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useLayoutEffect, useRef } from 'react'
import { Html, useGLTF, useScroll, useVideoTexture } from '@react-three/drei'
import { useFrame, useThree } from '@react-three/fiber'
import gsap from 'gsap'

export function SlotMachine2(props) {
    const { nodes, materials } = useGLTF('/Models/slotMachine.glb')

    const { gl } = useThree()

    const tl = useRef()
    const slotMachine = useRef()
    const screen = useRef()
    const htmlRef = useRef()

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
        console.log(gl)
        if (screen.current) {
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

        console.log(htmlRef.current)

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
                z: -0.75,
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
                // material={materials.MapTest}
                position={[0.008, 0.317, -0.235]}
                ref={screen}
            >
                {/* <Html
                    prepend
                    transform
                    portal={gl.domElement.parentNode}
                    position={[0, -1, 4]}
                    rotation={[0.30124383, 0, 0]}
                    wrapperClass='htmlScreen'
                    distanceFactor={1}
                >
                    <iframe
                        src="https://www.youtube.com/embed/ZCrClSBM1ns"
                        title="OASIS 2023 | Official Curtain Raiser"
                    />
                </Html> */}
            </mesh>
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