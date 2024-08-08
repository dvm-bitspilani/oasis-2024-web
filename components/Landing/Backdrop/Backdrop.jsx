'use client';

import { Canvas } from "@react-three/fiber";
import BackdropGrid from "../Grid/Grid";

export default function LandingBackdrop() {
    return (
        <Canvas style={{
            width: '100vw',
            height: '100dvh',
            position: 'fixed',
            top: 0
        }}>
            <BackdropGrid />
        </Canvas>
    )
}