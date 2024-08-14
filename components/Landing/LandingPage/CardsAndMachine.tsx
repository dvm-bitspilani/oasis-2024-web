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
                scrub: 2
            }
        })
    }, {})
    return (
        <Image src="/slotmachine.png" alt="slot machine" width={449.65} height={669.1} />
    )
}