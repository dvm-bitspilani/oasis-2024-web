/*
Auto-generated by: https://github.com/pmndrs/gltfjsx
*/

import React, { useEffect, useRef, forwardRef } from 'react'
import { Html, useGLTF, useVideoTexture } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import * as THREE from 'three'
import { useControls } from 'leva'

type GLTFResult = GLTF & {
    nodes: {
        Sphere001: THREE.Mesh
        Sphere002: THREE.Mesh
        Sphere003: THREE.Mesh
        Sphere004: THREE.Mesh
        Sphere005: THREE.Mesh
    }
    materials: {
        MapTest: THREE.MeshStandardMaterial
    }
}

interface Props {
    video: string;
    setIs3dLoaded: (value: boolean) => void;
}

export const SlotMachine2 = forwardRef(function SlotMachine2({ video, setIs3dLoaded, ...props }: Props, ref: any) {
    const { distFactor, pos, rot } = useControls({
        distFactor: {
            value: 1.29,
            min: 0,
            max: 5,
            step: 0.01
        },
        pos: [0, -1.1900000000000002, 5.509999999999978],
        rot: [0.5210000000000004, 0, 0]
    })

    const { nodes, materials } = useGLTF('/Models/slotMachine.glb') as GLTFResult

    const screen: any = useRef()

    const texture = useVideoTexture(video, {
        unsuspend: 'canplay',
        muted: true,
        loop: true,
        start: false,
        crossOrigin: 'anonymous',
        playsInline: true
    })

    useEffect(() => {
        if (screen.current) {
            screen.current.material.map = texture;
        }

        const videoElement = texture.source.data;
        if (videoElement) {
            videoElement.play().catch((e: Event) => console.error("Error playing video:", e));
        }

        setIs3dLoaded(true)
    }, [texture])

    return (
        <group ref={ref} {...props} dispose={null}>
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
                position={[0.008, 0.317, -0.235]}
                ref={screen}
            >
                <Html
                    transform
                    wrapperClass='htmlScreen'
                    distanceFactor={distFactor}
                    position={pos}
                    rotation={rot}
                >
                    <iframe
                        src="https://www.youtube.com/embed/ZCrClSBM1ns"
                        title="OASIS 2023 | Official Curtain Raiser"
                    />
                </Html>
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
})

useGLTF.preload('/Models/slotMachine.glb')