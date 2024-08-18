'use client';

import styles from './landing.module.scss'

import { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import LandingScene from "../Scene/Scene";

gsap.registerPlugin(ScrollTrigger)

export default function Landing() {
    const slotMachine: any = useRef()
    const [is3dLoaded, setIs3dLoaded] = useState(false)

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'img[alt="right tree"]',
                markers: true,
                start: () => `top ${document.querySelector('img[alt="right tree"]')?.getBoundingClientRect().top}`,
                scrub: 1,
                snap: {
                    snapTo: [0, 1],
                    ease: 'sine.inOut',
                    duration: 2
                },
            }
        })

        if (is3dLoaded && slotMachine.current) {
            timeline
                .to(slotMachine.current.rotation, {
                    y: -Math.PI / 6,
                    duration: 1
                })
                .to(slotMachine.current.position, {
                    x: -0.9,
                    z: -0.5,
                    duration: 1
                }, '<')
                .to('img[alt="oasis logo landing"]', {
                    y: -150,
                    opacity: 0,
                    duration: 0.75
                }, '<')
                .to('img[alt="left tree"]', {
                    x: -150,
                    opacity: 0,
                    duration: 0.75
                }, '<')
                .to('img[alt="right tree"]', {
                    x: 150,
                    opacity: 0,
                    duration: 0.75
                }, '<')
                .to('#countdownTimer', {
                    y: 100,
                    opacity: 0,
                    duration: 0.75
                }, '<')
                // .to(slotMachine.current.rotation, {
                //     y: -Math.PI / 4,
                // })
                .to('#aboutUs', {
                    opacity: 1,
                })
                .from('#aboutUs', {
                    y: 75,
                }, '<')
        }
    }, { dependencies: [is3dLoaded] })

    return (
        <>
            <LandingScene ref={slotMachine} setIs3dLoaded={setIs3dLoaded} />
        </>
    )
}