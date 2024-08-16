'use client';

import { OrbitControls, ScrollControls, useHelper } from "@react-three/drei";
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
            {/* <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} /> */}
            <ambientLight intensity={2.0} />
            <pointLight
                intensity={1.0}
                position={[0, 0, 4]}
            />
            <perspectiveCamera fov={75} />
            <ScrollControls pages={4} damping={0.25}>
                <SlotMachine2 />
                <LandingOverlay />
            </ScrollControls>
        </Canvas>
    )
}