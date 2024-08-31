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
          const slotMachineVector = {
            posX: slotMachine.current.position.x,
            posZ: slotMachine.current.position.z,
            rotY: slotMachine.current.rotation.y,
          };

          const camTl = gsap.timeline();

          camTl.to(camera.position, {
            // z: 4,
            // x: 0.65,
            z:
              5 -
              Math.abs(slotMachineVector.posZ) -
              1.5 * Math.cos(slotMachineVector.rotY),
            x: Math.abs(slotMachineVector.posX),
            duration: 0.5,
            ease: "sine.inOut",
          });
          // .to(camera.position, {
          //   z:
          //     5 -
          //     slotMachineVector.posZ -
          //     1.5 * Math.cos(slotMachineVector.rotY),
          //   x:
          //     slotMachineVector.posX + 1.5 * Math.sin(slotMachineVector.rotY),
          //   duration: 0.5,
          //   ease: "sine.inOut",
          // })
          // .to(
          //   camera.rotation,
          //   {
          //     y: slotMachine.current.rotation.y,
          //     duration: 0.5,
          //     ease: "sine.inOut",
          //   },
          //   "<"
          // );
        } else {
          gsap.to(camera.position, {
            z: 5,
            x: 0,
            duration: 0.5,
            ease: "sine.inOut",
          });
          gsap.to(camera.rotation, {
            x: 0,
            y: 0,
            duration: 0.5,
            ease: "sine.inOut",
          });
        }
      }
    },
    { dependencies: [isVideoFocused, camera] }
  );

  function iframeClick() {
    console.log(slotMachine.current.position);
    console.log(slotMachine.current.rotation.y);
    console.log(camera.position);
    console.log(camera.rotation);
    setIsVideoFocused((prev) => !prev);
    if (window.scrollY === 0) {
    }
  }

  useEffect(() => {
    let overlayWrapper: any = document.querySelector("#mainwrapper");

    window.addEventListener("beforeunload", () => {
      window.scrollTo(0, 0);
    });

    window.addEventListener("scroll", () => {
      if (isVideoFocused) {
        setIsVideoFocused(false);
      }
      if (window.scrollY === 0 && !isLanding) {
        setIsLanding(true);
        overlayWrapper.setAttribute("style", "z-index: -2;");
      } else if (window.scrollY !== 0 && isLanding) {
        setIsLanding(false);
        overlayWrapper.setAttribute("style", "z-index: 1;");
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
          overlayWrapper.setAttribute("style", "z-index: -2;");
        } else if (window.scrollY !== 0 && isLanding) {
          setIsLanding(false);
          overlayWrapper.setAttribute("style", "z-index: 1;");
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
            // snap: {
            //   snapTo: [0, 0.4, 1],
            //   ease: "sine.inOut",
            //   duration: 1,
            // },
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
            // snap: {
            //   snapTo: [0, 0.4, 1],
            //   ease: "sine.inOut",
            //   duration: 1,
            // },
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
                  duration: 0,
                  pointerEvents: "auto",
                  onComplete: () => {
                    const container = document.querySelector(
                      "#contactCard"
                    ) as HTMLElement;
                    const cards = container?.querySelectorAll(
                      ".card"
                    ) as NodeListOf<HTMLElement>;
                    if (cards) {
                      const cardCount = cards.length;
                      const containerWidth = container.offsetWidth;
                      const cardWidth = cards[1]?.offsetWidth || 0;

                      const X1 = (containerWidth - 5 * cardWidth - 215) / 2;
                      const X2 = X1 + cardWidth + 50;
                      const X3 = X2 + cardWidth + 50;
                      const X4 = X3 + cardWidth + 50;
                      const X5 = X4 + cardWidth + 50;

                      const translations = [
                        { x: X1, y: 70, rotation: -18 },
                        { x: X2, y: -10, rotation: -10 },
                        { x: X3, y: -35, rotation: 0 },
                        { x: X4, y: -10, rotation: 10 },
                        { x: X5, y: 70, rotation: 18 },
                      ];

                      gsap.set(cards, {
                        x: X1,
                        y: 70,
                        rotation: -18,
                        zIndex: (index) => index,
                        duration: 0,
                      });

                      const tl = gsap.timeline({ delay: 1 });

                      for (let i = 1; i < cardCount; i++) {
                        tl.to(cards[i], {
                          x: translations[i].x,
                          y: translations[i].y,
                          rotation: translations[i].rotation,
                          zIndex: cardCount - i,
                          transformOrigin: "center center",
                          duration: 0.2,
                          ease: "power1.inOut",
                          onStart: () => {
                            for (let j = i + 1; j < cardCount; j++) {
                              gsap.to(cards[j], {
                                x: translations[i].x,
                                y: translations[i].y,
                                rotation: translations[i].rotation,
                                transformOrigin: "center center",
                                duration: 0.2,
                                ease: "power1.inOut",
                                zIndex: j,
                              });
                            }
                          },
                        });
                      }

                      const container1 = document.querySelector(
                        "#contactCard1"
                      ) as HTMLElement;
                      const cards1 = container1?.querySelectorAll(
                        ".card"
                      ) as NodeListOf<HTMLElement>;
                      if (cards1) {
                        const cardCount1 = cards1.length;
                        const cardHeight = cards[0]?.offsetHeight || 0;

                        const X6 = (containerWidth - 3 * cardWidth - 114) / 2;
                        const X7 = X6 + cardWidth + 50;
                        const X8 = X7 + cardWidth + 50;

                        const Y6 = cardHeight;
                        const Y7 = cardHeight - 30;
                        const Y8 = cardHeight;

                        const translations1 = [
                          { x: X6, y: Y6, rotation: -12 },
                          { x: X7, y: Y7, rotation: 0 },
                          { x: X8, y: Y8, rotation: 12 },
                        ];

                        gsap.set(cards1, {
                          opacity: 0,
                          x: X6,
                          y: Y6,
                          rotation: -12,
                          zIndex: (index) => index,
                          duration: 0,
                        });

                        const tl1 = gsap.timeline({
                          paused: true,
                          onStart: () => {
                            gsap.to(cards1, { opacity: 1, duration: 0.5 });
                          },
                        });

                        for (let i = 0; i < cardCount1; i++) {
                          tl1.to(cards1[i], {
                            x: translations1[i].x,
                            y: translations1[i].y,
                            rotation: translations1[i].rotation,
                            zIndex: cardCount1 - i,
                            transformOrigin: "center center",
                            duration: 0.2,
                            ease: "power1.out",
                            onStart: () => {
                              for (let j = i + 1; j < cardCount1; j++) {
                                gsap.to(cards1[j], {
                                  x: translations1[i].x,
                                  y: translations1[i].y,
                                  rotation: translations1[i].rotation,
                                  transformOrigin: "center center",
                                  duration: 0.2,
                                  ease: "power1.out",
                                  zIndex: j,
                                });
                              }
                            },
                          });
                        }

                        const masterTimeline = gsap.timeline();
                        masterTimeline.add(tl);
                        masterTimeline.add(() => {
                          tl1.play();
                          return null;
                        });
                      }
                    }
                  },
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
            // .to(
            //   {},
            //   {
            //     onComplete: () => {
            //       const contactCard = document.querySelector("#contactCard");
            //       if (contactCard) {
            //         contactCard.classList.add(styles.active);
            //         // console.log(document.querySelector('#contactCard'));
            //       }
            //     },
            //   },
            //   "<"
            // )
            // .to(
            //   {},
            //   {
            //     onComplete: () => {
            //       const contactCard1 =
            //         document.querySelector("#contactCard1");
            //       if (contactCard1) {
            //         contactCard1.classList.add(styles.active1);
            //       }
            //     },
            //   },
            //   "<"
            // );
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
