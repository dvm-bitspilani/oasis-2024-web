'use client';

import { Canvas } from "@react-three/fiber";
import { Perf } from 'r3f-perf'

export default function LandingScene() {
    return (
        <Canvas>
            <Perf />
        </Canvas>
    )
}