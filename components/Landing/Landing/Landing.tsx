"use client";

import React, { useCallback, useEffect, useRef, useState } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

import { waitForPreload } from "@/helper/waitForPreload";

import LandingScene from "../Scene/Scene";
import SlotMachineExitCross from "@/components/AboutUs/SlotMachineExitCross/SlotMachineExitCross";

gsap.registerPlugin(ScrollTrigger);

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
  const [camera, setCamera] = useState<any>(null);

  const [isSlotMachineLoaded, setIsSlotMachineLoaded] = useState(false);
  const [isXS, setIsXS] = useState(false);
  const [isMobile, setIsMobile] = useState(false);
  const [isEvents, setIsEvents] = useState(false);
  const [isVideoFocused, setIsVideoFocused] = useState(false);
  const [isLanding, setIsLanding] = useState(true);
  const [isAboutUs, setIsAboutUs] = useState(false);

  useGSAP(
    () => {
      // focus video when iframe clicked
      if (camera) {
        if (isVideoFocused) {
          const camTl = gsap.timeline();
          if (window.innerWidth > 1000) {
            camTl
              .to(camera.position, {
                x: 0,
                y: -0.3,
                z: 4,
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
            camTl
              .to(camera.position, {
                x: 0,
                y: -1,
                z: 4,
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
          }
        } else {
          const resetTl = gsap.timeline();
          resetTl
            .to(camera.position, {
              x: 0,
              y: 0,
              z: 5,
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

  const iframeClick = useCallback(
    function iframeClick() {
      if (isAboutUs && !isEvents) {
        setIsVideoFocused((prev) => !prev);
      }
    },
    [isAboutUs, isEvents]
  );

  useEffect(() => {
    // console.log(isVideoFocused);
    gsap.set("#hamBtn", {
      duration: 1,
      autoAlpha: isVideoFocused ? 0 : 1,
    });
    gsap.set("#atharvHamBtn", {
      display: isVideoFocused ? "none" : "flex",
    });
  }, [isVideoFocused]);

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

  useGSAP(() => {
    // these are the entry animations
    if (isLoaded && slotMachine.current && isSlotMachineLoaded) {
      const timeline = gsap.timeline();
      if (window.innerWidth > 1000) {
        timeline
          .set("#mainwrapper", { autoAlpha: 0 }) // Set initial state
          .set("#oasisLogo", { autoAlpha: 0 })
          .set("#hamBtn", { autoAlpha: 0 })
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
              ease: "power1.inOut",
            },
            0
          )
          .from(
            slotMachine.current.position,
            {
              z: -2.3,
              y: 0.395,
              duration: 2.5,
              ease: "power1.inOut",
            },
            0
          )
          .from(
            slotMachine.current.rotation,
            {
              x: -0.42,
              duration: 2.5,
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
            "#hamBtn",
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
          .call(() => {
            setIsAboutUs((prev) => !prev);
          })
          .from(
            "#tickets-container",
            {
              duration: 0.5,
              xPercent: 125,
              ease: "sine.out",
            },
            "<"
          )
          .call(() => {
            document
              .querySelector("body")
              ?.setAttribute("style", "overflow-y: scroll;");
          });
      } else {
        document
          .querySelector("body")
          ?.setAttribute("style", "overflow-y: scroll;");
      }
    }
  }, [isLoaded, slotMachine.current, slotMachine, isSlotMachineLoaded]);

  return (
    <>
      <SlotMachineExitCross iframeClick={iframeClick} />
      <LandingScene
        ref={slotMachine}
        setIs3dLoaded={setIsSlotMachineLoaded}
        iframeClick={iframeClick}
        isLanding={isLanding}
        isVideoFocused={isVideoFocused}
        isXS={isXS}
        isMobile={isMobile}
        setCamera={setCamera}
        isEvents={isEvents}
        isAboutUs={isAboutUs}
      />
    </>
  );
}
