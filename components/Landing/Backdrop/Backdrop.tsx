'use client';

import * as THREE from 'three'
import { useEffect } from "react";

import backdropVertexShader from '@/shaders/LandingBackdrop/vertex.glsl'
import backdropFragmentShader from '@/shaders/LandingBackdrop/fragment.glsl'

import styles from './backdrops.module.scss'

export default function LandingBackdrop() {
    useEffect(() => {
        const canvas = document.querySelector('#landingBackdrop') as HTMLCanvasElement

        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
        })

        const scene = new THREE.Scene()

        const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height, 0.1, 100)
        camera.position.set(0, 0, 1)
        scene.add(camera)

        const geometry = new THREE.PlaneGeometry(5, 5, 64, 64)

        geometry.setAttribute('aRandom', new THREE.BufferAttribute(randoms, 1))

        const material = new THREE.ShaderMaterial({
            vertexShader: backdropVertexShader,
            fragmentShader: backdropFragmentShader,
            transparent: true,
            uniforms: {
                uTime: { value: 0.0 },
                uColor: { value: new THREE.Color('white') },
                uMouseX: { value: 0.0 },
                uMouseY: { value: 0.0 }
            },
            wireframe: true
        })

        const mesh = new THREE.Mesh(geometry, material)

        scene.add(mesh)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const clock = new THREE.Clock()

        window.addEventListener('mousemove', (event) => {
            material.uniforms.uMouseX.value = (2 * (event.clientX / sizes.width) - 1) * 2.1
            material.uniforms.uMouseY.value = (-(2 * (event.clientY / sizes.height) - 1)) * 1.15
        })

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            // Update material
            material.uniforms.uTime.value = elapsedTime

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }
        tick()

        return () => {
            window.removeEventListener('resize', () => {
                // Update sizes
                sizes.width = window.innerWidth
                sizes.height = window.innerHeight

                // Update camera
                camera.aspect = sizes.width / sizes.height
                camera.updateProjectionMatrix()

                // Update renderer
                renderer.setSize(sizes.width, sizes.height)
                renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
            })

            if (mesh) {
                scene.remove(mesh)
                mesh.geometry.dispose()
                mesh.material.dispose()
            }

            // window.cancelAnimationFrame(tick)
        }
    }, [])
    return (
        <canvas
            className={styles.webgl}
            id='landingBackdrop'
        ></canvas>
    )
}