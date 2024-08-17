'use client';

import { ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from 'r3f-perf'

import SlotMachine from "./SlotMachine";
import { SlotMachine2 } from "./SlotMachineTextured";
import LandingOverlay from "./Overlay";
import { useRef } from "react";

export default function LandingScene() {
    const pointRef = useRef()
    return (
        <Canvas>
            <Perf />
            <ambientLight intensity={2.0} />
            <pointLight
                intensity={1.0}
                position={[0, 0, 4]}
            />
            <perspectiveCamera fov={75} />
            <ScrollControls pages={2} damping={0.25}>
                <group position={[0, -0.7, 3]} rotation={[0, Math.PI, 0]}>
                    <SlotMachine2 video='/Videos/curtainRaiser23.mp4' />
                </group>
                <LandingOverlay />
            </ScrollControls>
        </Canvas>
    )
}