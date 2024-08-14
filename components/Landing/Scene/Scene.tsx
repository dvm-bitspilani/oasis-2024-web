'use client';

import { OrbitControls, ScrollControls } from "@react-three/drei";
import { Canvas } from "@react-three/fiber";
import { Perf } from 'r3f-perf'

import SlotMachine from "./SlotMachine";

export default function LandingScene() {
    return (
        <Canvas>
            <Perf />
            <OrbitControls enableZoom={false} enablePan={false} enableRotate={false} />
            <ambientLight intensity={1.0} />
            <perspectiveCamera fov={75} />
            <ScrollControls pages={4} damping={0.25}>
                <group position={[0, -4, 2]}>
                    <SlotMachine />
                </group>
            </ScrollControls>
        </Canvas>
    )
}