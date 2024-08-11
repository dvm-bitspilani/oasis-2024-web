'use client';

import { useEffect, useRef } from 'react';
import styles from './backdrops.module.scss'
import webGLFluidEnhanced from 'webgl-fluid-enhanced';

export default function FluidBackground() {
    const canvasRef = useRef(null)
    useEffect(() => {
        webGLFluidEnhanced.config({
            SIM_RESOLUTION: 128, // Resolution of the simulation grid
            DYE_RESOLUTION: 1024, // Resolution of the dye grid
            CAPTURE_RESOLUTION: 512, // Resolution of captured frames
            DENSITY_DISSIPATION: 1, // Rate at which density dissipates
            VELOCITY_DISSIPATION: 0.2, // Rate at which velocity dissipates
            PRESSURE: 0.8, // Pressure value used in the simulation
            PRESSURE_ITERATIONS: 10, // Number of pressure iterations
            CURL: 30, // Curl value used in the simulation
            INITIAL: false, // Enables splats on initial load
            SPLAT_AMOUNT: 5, // Number of initial splats (Random number between n and n * 5)
            SPLAT_RADIUS: 0.3, // Radius of the splats
            SPLAT_FORCE: 6000, // Force applied by the splats
            SPLAT_KEY: '', // Keyboard key to spawn new splats (empty to disable)
            SHADING: true, // Enables shading in the visualization
            COLORFUL: true, // Enables rapid changing of colors
            COLOR_UPDATE_SPEED: 10, // Speed of color update
            COLOR_PALETTE: [], // Custom color palette (empty by default, uses hex colors)
            HOVER: true, // Enables interaction on hover
            BACK_COLOR: '#190D2C', // Background color of the canvas
            TRANSPARENT: false, // Makes the canvas transparent if true
            BRIGHTNESS: 0.5, // Color brightness (Recommend lower than 1.0 if BLOOM is true)
            BLOOM: true, // Enables bloom effect
            BLOOM_ITERATIONS: 8, // Number of bloom effect iterations
            BLOOM_RESOLUTION: 256, // Resolution of the bloom effect
            BLOOM_INTENSITY: 0.8, // Intensity of the bloom effect
            BLOOM_THRESHOLD: 0.6, // Threshold for the bloom effect
            BLOOM_SOFT_KNEE: 0.7, // Soft knee value for the bloom effect
            SUNRAYS: true, // Enables sunrays effect
            SUNRAYS_RESOLUTION: 196, // Resolution of the sunrays effect
            SUNRAYS_WEIGHT: 1.0, // Weight of the sunrays effect
        });

        webGLFluidEnhanced.simulation(canvasRef.current!);
    }, [])
    return (
        <canvas className={styles.webgl} ref={canvasRef}></canvas>
    )
}