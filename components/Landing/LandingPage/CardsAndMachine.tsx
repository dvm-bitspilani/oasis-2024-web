'use client';

import Image from "next/image"

import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

export default function CardsAndMachine() {
    useGSAP(() => {
        const timeline = gsap.timeline({
            scrollTrigger: {
                trigger: 'img[alt="slot machine"]',
                markers: true,
                start: () => `top ${document.querySelector('img[alt="slot machine"]')?.getBoundingClientRect().top}`,
                scrub: 1,
            }
        })

        timeline.to('img[alt="slot machine"]', {
            xPercent: 80
        })
    }, {})
    return (
        <Image src="/slotmachine.png" alt="slot machine" width={449.65} height={669.1} />
    )
}