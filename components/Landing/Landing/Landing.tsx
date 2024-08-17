'use client';

import styles from './landing.module.scss'

import Image from 'next/image';
import { useRef, useState } from 'react';
import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import LandingScene from "../Scene/Scene";
import Navbar from '../Navbar/Navbar';
import CardsGroup from '../CardsGroup/CardsGroup';

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
                })
                .to(slotMachine.current.position, {
                    x: -0.9,
                    z: -0.5,
                }, '<')
                .to('img[alt="oasis logo landing"]', {
                    y: -150,
                    opacity: 0,
                }, '<')
                .to('img[alt="left tree"]', {
                    x: -150,
                    opacity: 0
                }, '<')
                .to('img[alt="right tree"]', {
                    x: 150,
                    opacity: 0
                }, '<')
                .to(slotMachine.current.rotation, {
                    y: -Math.PI / 4,
                })
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
            <div className={styles.mainwrapper}>
                <div className={styles.glow}>
                    <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="1687"
                        height="1080"
                        viewBox="0 0 1687 1080"
                        fill="none"
                    >
                        <path
                            opacity="0.15"
                            d="M0 1394L0 -293L1687 -293L1687 1394L0 1394Z"
                            fill="url(#paint0_radial_1444_3421)"
                        />
                        <defs>
                            <radialGradient
                                id="paint0_radial_1444_3421"
                                cx="0"
                                cy="0"
                                r="1"
                                gradientUnits="userSpaceOnUse"
                                gradientTransform="translate(843.5 550.5) scale(843.5)"
                            >
                                <stop stopColor="#FADC69" />
                                <stop offset="1" stopColor="#FADC69" stopOpacity="0" />
                            </radialGradient>
                        </defs>
                    </svg>
                </div>
                <div className={styles.headerContainer}>
                    <Navbar />
                </div>
                <div className={styles.machinecontainer}>
                    <div className={styles.cards}><CardsGroup group={1} /></div>
                    {/* <CardsAndMachine /> */}
                    <div className={styles.cards}><CardsGroup group={2} /></div>
                </div>
                <div className={styles.treescontainer}>
                    <Image
                        src="/tree.png"
                        alt="left tree"
                        width={430}
                        height={530}
                        style={{ transform: "scaleX(-1)" }}
                    />
                    <Image
                        src="/tree.png"
                        alt="right tree"
                        width={430}
                        height={530}
                        className={styles.righttree}
                    />
                </div>
            </div>
        </>
    )
}