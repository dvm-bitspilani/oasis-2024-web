"use client";

import Image from "next/image";

import { useGSAP } from "@gsap/react"
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import { useEffect } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function CardsAndMachine() {
    useEffect(() => {
        window.onbeforeunload = function () {
            window.scrollTo(0, 0);
        };
    }, []);

    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'img[alt="slot machine"]',
                markers: true,
                start: () => `top ${document.querySelector('img[alt="slot machine"]')?.getBoundingClientRect().top}`,
                scrub: 1,
                snap: {
                    snapTo: [0, 1],
                    ease: 'power2.inOut',
                    duration: 2
                },
            }
        })

        timeline
            .to('img[alt="slot machine"]', {
                xPercent: 80,
            })
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
    }, {})
    return (
        <Image src="/slotmachine.png" alt="slot machine" width={449.65} height={669.1} />
    )
}