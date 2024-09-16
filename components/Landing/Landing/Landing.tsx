"use client";

import { useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import LandingScene from "../Scene/Scene";
import styles from "../../ContactUs/contactus.module.scss";
import SlotMachineExitCross from "@/components/AboutUs/SlotMachineExitCross/SlotMachineExitCross";
import MobileSlotMachine from "../2DSlotMachine/2DSlotMachine";

gsap.registerPlugin(ScrollTrigger);

interface MatchMediaParams {
  isMobile: boolean;
}

interface updateTypesScrollTrigger {
  progress: number;
}

function waitForPreload(querySelector: string) {
  return new Promise((resolve, reject) => {
    const preloader = document.querySelector(querySelector);
    if (preloader) {
      return resolve("loaded");
    }

    const observer = new MutationObserver(() => {
      if (preloader) {
        observer.disconnect();
        return resolve("loaded");
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

export default function Landing() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    waitForPreload("#preloader").then(() => {
      setTimeout(() => {
        setIsLoaded(true);
        // console.log("hello loaded");
      }, 500);
      // console.log("#preloader");
    });
  }, []);

  const slotMachine: any = useRef();
  const slotMachine2D: any = useRef();
  const [camera, setCamera] = useState<any>(null);

  const [is3dLoaded, setIs3dLoaded] = useState(false);
  const [isXS, setIsXS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isEvents, setIsEvents] = useState(false);
  // const [renderMobile, setRenderMobile] = useState(false);
  const [isVideoFocused, setIsVideoFocused] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [tlProgress, setTlProgress] = useState(0);

  useGSAP(
    () => {
      if (camera) {
        if (isVideoFocused) {
          const camTl = gsap.timeline();

          camTl
            .to(camera.position, {
              z: 4,
              x: 0,
              duration: 0.5,
              ease: "sine.inOut",
            })
            .to(
              camera.rotation,
              {
                y: slotMachine.current.rotation.y,
                duration: 0.5,
                ease: "sine.inOut",
              },
              "<"
            )
            .to(
              "#exit-cross",
              {
                opacity: 1,
                zIndex: 100,
                duration: 0.25,
              },
              "<"
            )
            .to(
              "#mainwrapper",
              {
                opacity: 0,
                zIndex: -1,
                duration: 0.25,
              },
              "<"
            );
        } else {
          const resetTl = gsap.timeline();
          resetTl
            .to(camera.position, {
              z: 5,
              x: 0,
              duration: 0.5,
              ease: "sine.inOut",
            })
            .to(
              camera.rotation,
              {
                x: 0,
                y: 0,
                z: 0,
                duration: 0.5,
                ease: "sine.inOut",
              },
              "<"
            )
            .to(
              "#exit-cross",
              {
                opacity: 0,
                zIndex: -1,
                duration: 0.25,
              },
              "<"
            )
            .to(
              "#mainwrapper",
              {
                opacity: 1,
                zIndex: 2,
                duration: 0.25,
              },
              "-=0.25"
            );
        }
      }
    },
    { dependencies: [isVideoFocused, camera] }
  );

  function iframeClick() {
    console.log("iframe click");
    console.log(tlProgress, "Iframe click recorded");
    if (tlProgress >= 0.23 && tlProgress <= 0.24) {
      console.log(tlProgress, "Iframe click recorded");
      setIsVideoFocused((prev) => !prev);
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
        if (window.innerWidth > 1000) {
          overlayWrapper.setAttribute("style", "z-index: -2;");
        }
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
          if (window.innerWidth > 1000) {
            overlayWrapper.setAttribute("style", "z-index: -2;");
          }
        } else if (window.scrollY !== 0 && isLanding) {
          setIsLanding(false);
          overlayWrapper.setAttribute("style", "z-index: 1;");
        }
      });
    };
  }, [isVideoFocused, isLanding]);

  // useEffect(() => {
  //   function setRenderState() {
  //     if (window.innerWidth <= 1000 && !renderMobile) {
  //       setRenderMobile(true);
  //     } else if (window.innerWidth > 1000 && renderMobile) {
  //       setRenderMobile(false);
  //     }
  //   }

  //   window.addEventListener("resize", setRenderState);
  //   window.addEventListener("load", setRenderState);
  //   window.addEventListener("loadstart", setRenderState);
  //   window.addEventListener("DOMContentLoaded", setRenderState);

  //   return () => {
  //     window.removeEventListener("resize", setRenderState);
  //     window.removeEventListener("load", setRenderState);
  //     window.removeEventListener("loadstart", setRenderState);
  //     window.removeEventListener("DOMContentLoaded", setRenderState);
  //   };
  // }, []);

  useGSAP(() => {
    // these are the entry animations
    if (isLoaded && slotMachine.current) {
      const timeline = gsap.timeline();
      if (window.innerWidth > 1000) {
        timeline
          .set("#mainwrapper", { autoAlpha: 0 }) // Set initial state
          .set("#oasisLogo", { autoAlpha: 0 })
          .from(
            "#leftTree",
            {
              x: "-100vw",
              duration: 1.5,
              ease: "sine.inOut",
            },
            0
          )
          .from(
            "#rightTree",
            {
              x: "100vw",
              duration: 1.5,
              ease: "sine.inOut",
            },
            0
          )
          .from(
            slotMachine.current.position,
            {
              z: -2.3,
              y: 0.19,
              duration: 4,
              ease: "sine.inOut",
            },
            0
          )
          .from(
            slotMachine.current.rotation,
            {
              x: -0.42,
              duration: 4,
              ease: "sine.inOut",
            },
            0
          )
          .to(
            "#mainwrapper",
            {
              autoAlpha: 1,
              duration: 1,
              ease: "sine.inOut",
            },
            "-=1"
          )
          .to(
            "#oasisLogo",
            {
              autoAlpha: 1,
              duration: 0.5,
              ease: "sine.inOut",
            },
            "-=1"
          )
          .from(
            "#tickets-container",
            {
              duration: 0.5,
              xPercent: 100,
              ease: "sine.out",
            },
            "<"
          )
          .to(
            "#iframe-overlay",
            {
              opacity: 0,
              ease: "none",
              duration: 0.5,
            },
            "<"
          );
      } else {
        timeline
          .set("#mainwrapper", { autoAlpha: 0 }) // Set initial state
          .set("#oasisLogo", { autoAlpha: 0 })
          .from(
            "#leftTree",
            {
              x: "-100vw",
              duration: 1.5,
              ease: "sine.inOut",
            },
            0
          )
          .from(
            "#rightTree",
            {
              x: "100vw",
              duration: 1.5,
              ease: "sine.inOut",
            },
            0
          )
          .to(
            "#mainwrapper",
            {
              autoAlpha: 1,
              duration: 1,
              ease: "sine.inOut",
            },
            "-=1"
          )
          .to(
            "#oasisLogo",
            {
              autoAlpha: 1,
              duration: 0.5,
              ease: "sine.inOut",
            },
            "-=1"
          )
          .to(
            "#iframe-overlay",
            {
              opacity: 0,
              ease: "none",
              duration: 0.5,
            },
            "-=0.5"
          );
      }
    }
  }, [isLoaded, camera, slotMachine.current]);

  useGSAP(
    () => {
      let timelineConfig;
      const commonConfigs = {
        onUpdate: ({ progress }: updateTypesScrollTrigger) => {
          console.log(progress);
          setTlProgress(progress);
          // if (progress >= 0.225 && progress <= 0.245) {
          //   setTlProgress(progress);
          // } else if (tlProgress) {
          //   setTlProgress(0);
          // }
        },
        trigger: 'img[alt="right tree"]',
        markers: false,
        start: () =>
          `top ${
            document
              .querySelector('img[alt="right tree"]')
              ?.getBoundingClientRect().top
          }`,
        scrub: 1,
      };
      if (window.innerWidth <= 1000) {
        timelineConfig = {
          scrollTrigger: {
            ...commonConfigs,
            snap: {
              snapTo: [0, 0.17, 0.18, 0.5, 0.51, 0.85],
              ease: "sine.inOut",
              duration: 1,
            },
            end: "+=400%",
          },
        };
      } else {
        timelineConfig = {
          scrollTrigger: {
            ...commonConfigs,
            snap: {
              snapTo: [0, 0.23, 0.24, 0.64, 0.65, 1],
              ease: "sine.inOut",
              duration: 1,
            },
            end: "+=300%",
          },
        };
      }

      if (window.innerWidth <= 1000) {
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
                // .to(slotMachine2D.current, {
                //   yPercent: 35,
                //   duration: 1,
                // })
                .to(slotMachine.current.rotation, {
                  y: conditions.isMobile ? 0 : -Math.PI / 9,
                  duration: 1,
                })
                .to(
                  slotMachine.current.position,
                  {
                    x: conditions.isMobile ? 0 : -0.9,
                    y: conditions.isMobile
                      ? conditions.isXS
                        ? -0.5
                        : -0.5
                      : 0,
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
                .call(() => {
                  setIsEvents((prev) => !prev);
                }, [])
                .to(slotMachine.current.position, {
                  x: 0,
                  y: 0.5,
                  z: -1.25,
                  duration: 3,
                  ease: "power1.inOut",
                })
                .to(
                  slotMachine.current.position,
                  {
                    x: conditions.isMobile ? 0 : -5,
                    y: conditions.isMobile ? -2.5 : 0,
                    z: conditions.isMobile ? 0 : -0.5,
                    duration: 3,
                    ease: "power1.in",
                  },
                  "+=1"
                )
                .to("#contactUs", {
                  opacity: 1,
                  duration: 1,
                })
                .to(
                  "#contact-us-inner-scroll",
                  {
                    yPercent: -110,
                    duration: 1,
                    pointerEvents: "auto",
                  },
                  "-=0.5"
                );
            }
          );
        }
      } else {
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
                    y: conditions.isMobile
                      ? conditions.isXS
                        ? -0.5
                        : -0.5
                      : 0,
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
                .to(
                  "#tickets",
                  {
                    duration: 2,
                    rotate: 5,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(
                  slotMachine.current.rotation,
                  {
                    y: conditions.isMobile ? 0 : -Math.PI / 6,
                  },
                  "-=0.5"
                )
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
                .call(() => {
                  setIsEvents((prev) => !prev);
                }, [])
                .to(slotMachine.current.position, {
                  x: 0,
                  y: 0,
                  z: -1.25,
                  duration: 3,
                  ease: "power1.inOut",
                })
                .to(
                  slotMachine.current.rotation,
                  {
                    y: 0,
                    duration: 3,
                    ease: "power1.inOut",
                  },
                  "<"
                )
                .to(
                  slotMachine.current.position,
                  {
                    x: conditions.isMobile ? 0 : -5,
                    y: conditions.isMobile ? -2.5 : 0,
                    z: conditions.isMobile ? 0 : -0.5,
                    duration: 3,
                    ease: "power1.in",
                  },
                  "+=1"
                )
                .to(
                  "#tickets",
                  {
                    duration: 3,
                    rotate: 15,
                    ease: "power1.out",
                  },
                  "<"
                )
                .to(
                  "#contactUs",
                  {
                    opacity: 1,
                    duration: 1,
                  },
                  "-=1.5"
                )
                .to(
                  "#contactUs",
                  {
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
                          { x: X1, y: 50, rotation: -18 },
                          { x: X2, y: -10, rotation: -10 },
                          { x: X3, y: -35, rotation: 0 },
                          { x: X4, y: -10, rotation: 10 },
                          { x: X5, y: 50, rotation: 18 },
                        ];

                        gsap.set(cards, {
                          x: X1,
                          y: 50,
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
                            duration: 0.25,
                            ease: "power1.inOut",
                            onStart: () => {
                              for (let j = i + 1; j < cardCount; j++) {
                                gsap.to(cards[j], {
                                  x: translations[i].x,
                                  y: translations[i].y,
                                  rotation: translations[i].rotation,
                                  transformOrigin: "center center",
                                  duration: 0.25,
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

                          const Y6 = cardHeight - 10;
                          const Y7 = cardHeight - 40;
                          const Y8 = cardHeight - 10;

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
                              duration: 0.25,
                              ease: "power1.out",
                              onStart: () => {
                                for (let j = i + 1; j < cardCount1; j++) {
                                  gsap.to(cards1[j], {
                                    x: translations1[i].x,
                                    y: translations1[i].y,
                                    rotation: translations1[i].rotation,
                                    transformOrigin: "center center",
                                    duration: 0.25,
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
                  "<"
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
                  "#contactBottom",
                  {
                    opacity: 1,
                    duration: 0,
                    pointerEvents: "auto",
                  },
                  "-=1.5"
                )
                .from(
                  "#contactBottom",
                  {
                    y: 75,
                    duration: 1,
                  },
                  "<"
                );
            }
          );
        }
      }
    },
    {
      dependencies: [
        is3dLoaded,
        slotMachine2D.current,
        slotMachine.current,
        // renderMobile,
      ],
    }
  );

  return (
    <>
      <SlotMachineExitCross iframeClick={iframeClick} />
      <LandingScene
        ref={slotMachine}
        setIs3dLoaded={setIs3dLoaded}
        iframeClick={iframeClick}
        isLanding={isLanding}
        isVideoFocused={isVideoFocused}
        isXS={isXS}
        isMobile={isMobile}
        setCamera={setCamera}
        isEvents={isEvents}
      />
      {/* {renderMobile ? (
        <MobileSlotMachine ref={slotMachine2D} />
      ) : (
        <>
        </>
      )} */}
    </>
  );
}
