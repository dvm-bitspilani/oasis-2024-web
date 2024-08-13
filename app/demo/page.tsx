'use client';

import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js'
import { DRACOLoader } from 'three/addons/loaders/DRACOLoader.js'
import gsap from 'gsap';
import { useEffect } from 'react';

import particlesVertexShader from '@/shaders/ParticleMorph/vertex.glsl'
import particlesFragmentShader from '@/shaders/ParticleMorph/fragment.glsl'

export default function demoPage() {
    useEffect(() => {
        const canvas = document.querySelector('#particleMorph') as HTMLCanvasElement
        // Scene
        const scene = new THREE.Scene()

        // Loader
        const dracoLoader = new DRACOLoader()
        dracoLoader.setDecoderPath('./draco/')
        const gltfLoader = new GLTFLoader()
        gltfLoader.setDRACOLoader(dracoLoader)

        /**
        * Sizes
        */
        const sizes = {
            width: window.innerWidth,
            height: window.innerHeight,
            pixelRatio: Math.min(window.devicePixelRatio, 2)
        }

        window.addEventListener('resize', () => {
            // Update sizes
            sizes.width = window.innerWidth
            sizes.height = window.innerHeight
            sizes.pixelRatio = Math.min(window.devicePixelRatio, 2)

            // Materials
            if (particles && particles.material) {
                particles.material.uniforms.uResolution.value.set(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)
            }

            // Update camera
            camera.aspect = sizes.width / sizes.height
            camera.updateProjectionMatrix()

            // Update renderer
            renderer.setSize(sizes.width, sizes.height)
            renderer.setPixelRatio(sizes.pixelRatio)
        })

        /**
        * Camera
        */
        // Base camera
        const camera = new THREE.PerspectiveCamera(35, sizes.width / sizes.height, 0.1, 500)
        camera.position.set(5, 5, 5)
        camera.lookAt(new THREE.Vector3(0, 0, 0))
        scene.add(camera)

        // Controls
        const controls = new OrbitControls(camera, canvas)
        controls.enableDamping = true

        /**
         * Renderer
         */
        const renderer = new THREE.WebGLRenderer({
            canvas: canvas,
            antialias: true,
        })

        renderer.setSize(sizes.width, sizes.height)
        renderer.setPixelRatio(sizes.pixelRatio)
        renderer.setClearColor('#160920')

        /**
        * Particles
        */
        let particles: any
        particles = null

        // Load Models
        gltfLoader.load('/Models/SlotmachineScaled9.glb', (gltf) => {
            particles = {
                index: 0
            }

            // Positions
            const positions = gltf.scene.children.map((child: any) => {
                return child.geometry.attributes.position
            })

            particles.maxCount = 0
            for (const position of positions) {
                if (position.count > particles.maxCount) {
                    particles.maxCount = position.count
                }
            }

            particles.positions = []
            for (const position of positions) {
                const originalArray = position.array
                const newArray = new Float32Array(particles.maxCount * 3)

                for (let i = 0; i < particles.maxCount; i++) {
                    const i3 = i * 3;

                    if (i3 < originalArray.length) {
                        newArray[i3 + 0] = originalArray[i3 + 0]
                        newArray[i3 + 1] = originalArray[i3 + 1]
                        newArray[i3 + 2] = originalArray[i3 + 2]
                    }
                    else {
                        const randomIndex = Math.floor(position.count * Math.random()) * 3

                        newArray[i3 + 0] = originalArray[randomIndex + 0]
                        newArray[i3 + 1] = originalArray[randomIndex + 1]
                        newArray[i3 + 2] = originalArray[randomIndex + 2]
                    }
                }

                particles.positions.push(new THREE.BufferAttribute(newArray, 3))
            }

            // Geometry
            particles.geometry = new THREE.BufferGeometry()
            particles.geometry.setAttribute('position', particles.positions[particles.index])
            particles.geometry.setAttribute('aPositionTarget', particles.positions[particles.index + 1])
            particles.geometry.setIndex(null)

            // Material
            particles.material = new THREE.ShaderMaterial({
                vertexShader: particlesVertexShader,
                fragmentShader: particlesFragmentShader,
                uniforms:
                {
                    uSize: new THREE.Uniform(0.02),
                    uResolution: new THREE.Uniform(new THREE.Vector2(sizes.width * sizes.pixelRatio, sizes.height * sizes.pixelRatio)),
                    uProgress: new THREE.Uniform(0)
                },
                blending: THREE.AdditiveBlending,
                depthWrite: false
            })

            // Points
            particles.points = new THREE.Points(particles.geometry, particles.material)
            scene.add(particles.points)

            // Methods
            particles.morph = (index: number) => {
                // Update Attributes
                particles.geometry.attributes.position = particles.positions[particles.index]
                gsap.set(particles.material.uniforms.uProgress, { value: 0 })
                particles.geometry.attributes.aPositionTarget = particles.positions[index]

                // Animate
                gsap.fromTo(
                    particles.material.uniforms.uProgress,
                    { value: 0 },
                    { value: 1, duration: 3, ease: 'linear' }
                )

                // Save index
                particles.index = index
            }

            let morphIndex = 1
            const morphingInterval = setInterval(() => {
                particles.morph(morphIndex)
                morphIndex += 1
                if (morphIndex > gltf.scene.children.length - 1) {
                    morphIndex = 0
                }
            }, 5000)
        })

        /**
        * Animate
        */
        const tick = () => {
            // Update controls
            controls.update()

            // Render normal scene
            renderer.render(scene, camera)

            // Call tick again on the next frame
            window.requestAnimationFrame(tick)
        }

        tick()
    }, [])
    return (
        <canvas id='particleMorph' style={{
            width: '100vw',
            height: '100dvh'
        }}></canvas>
    )
}