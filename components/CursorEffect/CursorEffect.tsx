"use client";
import { useEffect, useRef } from "react";
import styles from "./CursorEffect.module.scss";
import clubs2 from "@/public/CursorEffect/clubs2.png";
import diamonds2 from "@/public/CursorEffect/diamonds2.png";
import hearts2 from "@/public/CursorEffect/hearts2.png";
import spades2 from "@/public/CursorEffect/spades2.png";

interface Spark {
  els: HTMLImageElement[];
}

export default function CursorEffect() {
  const containerRef = useRef<HTMLDivElement>(null);
  const lastParticleTime = useRef<number>(0); // Time of the last particle generation
  const particleInterval = 37.5; // Fixed time interval in milliseconds for particle generation
  const sparkCount = 1; // Number of sparks
  const sparkParticleCount = 1; // Particles per spark

  const icons = [clubs2.src, diamonds2.src, hearts2.src, spades2.src];

  function lerp(p1: number, p2: number, t: number) {
    return p1 + (p2 - p1) * t;
  }

  function circularRandom(r: number) {
    r = r * Math.sqrt(Math.abs(Math.random() - Math.random()));
    const theta = Math.random() * 2 * Math.PI;
    const x = r * Math.cos(theta);
    const y = r * Math.sin(theta);
    return { x, y, r };
  }

  const createSparks = (e: MouseEvent) => {
    const container = containerRef.current;
    if (!container) return;

    for (let i = 0; i < sparkCount; i++) {
      const spark: Spark = { els: [] };

      for (let j = 0; j < sparkParticleCount; j++) {
        const icon = document.createElement("img");
        icon.src = icons[Math.floor(Math.random() * icons.length)]; // Random icon
        icon.classList.add(styles.icon);
        container.appendChild(icon);
        spark.els.push(icon);

        const particleSize = 100;
        const sparkRadius = 20;
        const { x, y, r } = circularRandom(sparkRadius);

        const randomRotation = Math.random() * 360;

        icon.style.width = `${lerp(particleSize, 1, r / sparkRadius)}px`;
        icon.style.height = `${lerp(particleSize, 1, r / sparkRadius)}px`;
        icon.style.opacity = "1";
        icon.style.position = "absolute";
        icon.style.transform = `rotate(${randomRotation}deg)`;
        icon.style.left = `${e.clientX}px`;
        icon.style.top = `${e.clientY}px`;

        setTimeout(() => {
          const newX = Math.random() * 60 - 30;
          const newY = Math.random() * 60 - 30;

          icon.style.transform = `translateX(${newX}px) translateY(${newY}px) rotate(${randomRotation}deg)`;
          icon.style.transition =
            "transform 0.8s ease-out, opacity 0.8s ease-out";

          setTimeout(() => {
            icon.style.opacity = "0";
            setTimeout(() => {
              container.removeChild(icon);
            }, 300);
          }, Math.random() * 300 + 500);
        }, 0);
      }
    }
  };

  const onMouseMove = (e: MouseEvent) => {
    const currentTime = performance.now();

    // Throttle particle generation by a fixed interval (e.g., 50ms)
    if (currentTime - lastParticleTime.current >= particleInterval) {
      lastParticleTime.current = currentTime;
      createSparks(e);
    }
  };

  useEffect(() => {
    window.addEventListener("mousemove", onMouseMove);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
    };
  }, []);

  return <div ref={containerRef} className={styles.anime_container} />;
}
