"use client";

// import styles from "./landing.module.scss";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import LandingScene from "../Scene/Scene";
import styles from "../../ContactUs/contactus.module.scss";

gsap.registerPlugin(ScrollTrigger);

interface MatchMediaParams {
  isMobile: boolean;
}

export default function Landing() {
  const slotMachine: any = useRef();
  const [camera, setCamera] = useState<any>(null);

  const [is3dLoaded, setIs3dLoaded] = useState(false);
  const [isXS, setIsXS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isVideoFocused, setIsVideoFocused] = useState(false);
  const [isLanding, setIsLanding] = useState(true);

  useGSAP(
    () => {
      if (camera) {
        if (isVideoFocused) {
          gsap.to(camera.position, {
            z: 3.5,
            duration: 0.5,
            ease: "sine.inOut",
          });
          gsap.to(camera.rotation, {
            x: -0.4,
            duration: 0.5,
            ease: "sine.inOut",
          });
        } else {
          gsap.to(camera.position, {
            z: 5,
            duration: 0.5,
            ease: "sine.inOut",
          });
          gsap.to(camera.rotation, {
            x: 0,
            duration: 0.5,
            ease: "sine.inOut",
          });
        }
      }
    },
    { dependencies: [isVideoFocused, camera] }
  );

  function iframeClick() {
    if (window.scrollY === 0) {
      setIsVideoFocused((prev) => !prev);
    }
  }

  useEffect(() => {
    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", () => {
      if (isVideoFocused) {
        setIsVideoFocused(false);
      }
      if (window.scrollY === 0 && !isLanding) {
        setIsLanding(true);
      } else if (window.scrollY !== 0 && isLanding) {
        setIsLanding(false);
      }
    });

    return () => {
      window.removeEventListener("beforeunload", () => {
        window.scrollTo(0, 0);
      });

      window.removeEventListener("scroll", () => {
        if (isVideoFocused) {
          setIsVideoFocused(false);
        }
        if (window.scrollY === 0 && !isLanding) {
          setIsLanding(true);
        } else if (window.scrollY !== 0 && isLanding) {
          setIsLanding(false);
        }
      });
    };
  }, [isVideoFocused]);

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
            snap: {
              snapTo: [0, 0.4, 1],
              ease: "sine.inOut",
              duration: 1,
            },
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
            // console.log(conditions);
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
                "#social",
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
              )
              .to(
                {},
                {
                  onComplete: () => {
                    const contactCard = document.querySelector("#contactCard");
                    if (contactCard) {
                      contactCard.classList.add(styles.active);
                      // console.log(document.querySelector('#contactCard'));
                    }
                  },
                },
                "<"
              )
              .to(
                {},
                {
                  onComplete: () => {
                    const contactCard1 =
                      document.querySelector("#contactCard1");
                    if (contactCard1) {
                      contactCard1.classList.add(styles.active1);
                    }
                  },
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
    <LandingScene
      ref={slotMachine}
      setIs3dLoaded={setIs3dLoaded}
      iframeClick={iframeClick}
      isLanding={isLanding}
      isVideoFocused={isVideoFocused}
      isXS={isXS}
      isMobile={isMobile}
      setCamera={setCamera}
    />
  );
}
