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

        const geometry = new THREE.PlaneGeometry(4.5, 4.5, 64, 64)

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

        const raycaster = new THREE.Raycaster()
        const rayOrigin = new THREE.Vector3(0, 0, 1)
        const rayDirection = new THREE.Vector3(0, 0, -1)
        rayDirection.normalize()
        raycaster.set(rayOrigin, rayDirection)

        mesh.updateMatrix()

        // const intersect = raycaster.intersectObject(mesh)
        // console.log(intersect)

        const renderer = new THREE.WebGLRenderer({
            canvas: canvas
        })
        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

        const clock = new THREE.Clock()

        const mouse = new THREE.Vector2()
        window.addEventListener('mousemove', (event) => {
            mouse.x = event.clientX / sizes.width * 2 - 1
            mouse.y = - (event.clientY / sizes.height * 2 - 1)
            // material.uniforms.uMouseX.value = (2 * (event.clientX / sizes.width) - 1) * 2.1
            // material.uniforms.uMouseY.value = (-(2 * (event.clientY / sizes.height) - 1)) * 1.15
        })

        let animationFrameReqId: any;
        animationFrameReqId = null

        const tick = () => {
            const elapsedTime = clock.getElapsedTime()

            raycaster.setFromCamera(mouse, camera)
            const intersect = raycaster.intersectObject(mesh)
            material.uniforms.uMouseX.value = intersect[0]?.point.x
            material.uniforms.uMouseY.value = intersect[0]?.point.y

            // Update material
            material.uniforms.uTime.value = elapsedTime

            // Render
            renderer.render(scene, camera)

            // Call tick again on the next frame
            animationFrameReqId = window.requestAnimationFrame(tick)
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

            window.removeEventListener('mousemove', (event) => {
                material.uniforms.uMouseX.value = (2 * (event.clientX / sizes.width) - 1) * 2.1
                material.uniforms.uMouseY.value = (-(2 * (event.clientY / sizes.height) - 1)) * 1.15
            })

            if (animationFrameReqId) {
                window.cancelAnimationFrame(animationFrameReqId)
            }
        }
    }, [])
    return (
        <canvas
            className={styles.webgl}
            id='landingBackdrop'
        ></canvas>
    )
}