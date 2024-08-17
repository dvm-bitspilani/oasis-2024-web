import styles from './overlay.module.scss'

import { Scroll, useScroll } from "@react-three/drei";
import Image from "next/image";
import CardsGroup from '../CardsGroup/CardsGroup';
import Navbar from '../Navbar/Navbar';
import { useGSAP } from '@gsap/react';
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect, useRef } from "react";
import { useFrame } from '@react-three/fiber';

gsap.registerPlugin(ScrollTrigger);

export default function LandingOverlay() {
    const scroll = useScroll()
    const tl: any = useRef()
    const leftTree: any = useRef()

    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }, []);

    useFrame(() => {
        if (tl.current) {
            tl.current.seek(scroll.offset * tl.current.duration())
        }
    })

    useGSAP(() => {
        tl.current = gsap.timeline()

        tl.current
            .to(leftTree.current,
                {
                    x: -150,
                    duration: 0.5
                },
                0
            )
    })
    return (
        <Scroll html>
            <main className={styles.wrapper}>
                <div className={styles.mainwrapper}>
                    <div className={styles.headerContainer}>
                        <Navbar />
                    </div>
                    {/* <div className={styles.machinecontainer}>
                        <div className={styles.cards}><CardsGroup group={1} /></div>
                        <div className={styles.cards}><CardsGroup group={2} /></div>
                    </div> */}
                    <div className={styles.treescontainer}>
                        <Image
                            src="/tree.png"
                            alt="left tree"
                            width={430}
                            height={530}
                            style={{ transform: "scaleX(-1)" }}
                            ref={leftTree}
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
            </main>
        </Scroll>
    )
}