"use client";

import {useGSAP} from "@gsap/react";
import gsap from "gsap";

export default function EventsEntrance() {
  useGSAP(() => {
    if (!matchMedia("(min-width: 801px) and (prefers-reduced-motion: no-preference)").matches) return;
    const row = document.querySelector("#eventsRow");
    if (!row) return;
    gsap.from(row.children, {scale: 0, duration: 0.5, stagger: 0.25, delay: 0.15, ease: "power2.out"});
  }, []);
  return null;
}
