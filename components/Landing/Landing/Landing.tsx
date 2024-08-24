"use client";

import styles from "./landing.module.scss";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";
import dynamic from "next/dynamic";

import LandingScene from "../Scene/Scene";
// const LandingScene = dynamic(() => import('../Scene/Scene'), { ssr: false })

gsap.registerPlugin(ScrollTrigger);

interface MatchMediaParams {
  isMobile: boolean;
}

export default function Landing() {
  const slotMachine: any = useRef();
  const [is3dLoaded, setIs3dLoaded] = useState(false);
  const [isXS, setIsXS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        window.scrollTo(0, 0);
      });
    };
  }, []);

  useGSAP(
    () => {
      let timelineConfig;
      if (window.innerWidth < 800) {
        timelineConfig = {
          scrollTrigger: {
            trigger: 'img[alt="right tree"]',
            markers: false,
            start: () =>
              `top ${
                document
                  .querySelector('img[alt="right tree"]')
                  ?.getBoundingClientRect().top
              }`,
            end: "+=200%",
            scrub: 1,
          },
        };
      } else {
        timelineConfig = {
          scrollTrigger: {
            trigger: 'img[alt="right tree"]',
            markers: false,
            start: () =>
              `top ${
                document
                  .querySelector('img[alt="right tree"]')
                  ?.getBoundingClientRect().top
              }`,
            end: "+=200%",
            scrub: 1,
            snap: {
              snapTo: [0, 0.4, 1],
              ease: "sine.inOut",
              duration: 1,
            },
          },
        };
      }
      const timeline = gsap.timeline(timelineConfig);

      const mm = gsap.matchMedia();

      if (is3dLoaded && slotMachine.current) {
        mm.add(
          {
            isMobile: "(max-width: 1000px)",
            isDesktop: "(min-width: 1001px)",
            isXS: "(max-width: 585px)",
          },
          ({ conditions }: any) => {
            console.log(conditions);
            if (conditions.isXS !== isXS) {
              setIsXS(conditions.isXS);
            }
            if (conditions.isMobile !== isMobile) {
              setIsMobile(true);
            }
            timeline
              .to(slotMachine.current.rotation, {
                y: conditions.isMobile ? 0 : -Math.PI / 9,
                duration: 1,
              })
              .to(
                slotMachine.current.position,
                {
                  x: conditions.isMobile ? 0 : -0.9,
                  y: conditions.isMobile ? (conditions.isXS ? -0.75 : -0.5) : 0,
                  z: conditions.isMobile ? 0 : -0.5,
                  duration: 1,
                },
                "<"
              )
              .to(
                'img[alt="oasis logo landing"]',
                {
                  y: -150,
                  opacity: 0,
                  duration: 0.75,
                  pointerEvents: "none",
                },
                "<"
              )
              .to(
                'img[alt="left tree"]',
                {
                  x: -150,
                  opacity: 0,
                  duration: 0.75,
                },
                "<"
              )
              .to(
                'img[alt="right tree"]',
                {
                  x: 150,
                  opacity: 0,
                  duration: 0.75,
                },
                "<"
              )
              .to(
                "#countdownTimer",
                {
                  y: 100,
                  opacity: 0,
                  duration: 0.75,
                },
                "<"
              )
              .to(
                "#leftcards",
                {
                  y: -150,
                  opacity: 0,
                  pointerEvents: "none",
                  duration: 0.75,
                },
                "<"
              )
              .to(
                "#rightcards",
                {
                  y: -150,
                  opacity: 0,
                  pointerEvents: "none",
                  duration: 0.75,
                },
                "<"
              )
              .to(
                "#gradient",
                {
                  y: 100,
                  opacity: 0,
                  duration: 0.75,
                },
                "<"
              )
              .to(
                "#register",
                {
                  y: conditions.isXS ? 100 : 0,
                  opacity: conditions.isXS ? 0 : 1,
                  duration: conditions.isXS ? 0.75 : 0,
                },
                "<"
              )
              .to(slotMachine.current.rotation, {
                y: conditions.isMobile ? 0 : -Math.PI / 6,
              })
              .to("#aboutUs", {
                opacity: 1,
              })
              .from(
                "#aboutUs",
                {
                  y: 75,
                },
                "<"
              )
              .to(
                "#aboutUs",
                {
                  opacity: 0,
                  y: -75,
                },
                "+=1"
              )
              .to(
                slotMachine.current.position,
                {
                  x: conditions.isMobile ? 0 : -5,
                  y: conditions.isMobile ? -2.5 : 0,
                  // z: conditions.isMobile ? 0 : -0.5,
                  duration: 3,
                  ease: "power1.in",
                },
                "<"
              )
              .to(
                "#contactUs",
                {
                  opacity: 1,
                  duration: 1,
                  pointerEvents: "auto",
                },
                "-=1.5"
              )
              .from(
                "#contactUs",
                {
                  y: 75,
                  duration: 1,
                },
                "<"
              );
          }
        );
      }
    },
    { dependencies: [is3dLoaded] }
  );

  return (
    <>
      <LandingScene
        ref={slotMachine}
        setIs3dLoaded={setIs3dLoaded}
        isXS={isXS}
        isMobile={isMobile}
      />
    </>
  );
}
