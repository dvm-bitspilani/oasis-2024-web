"use client";
import styles from "./overlay.module.scss";
import Navbar from "../Navbar/Navbar";
import CardsGroup from "../CardsGroup/CardsGroup";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import ContactUs from "@/components/ContactUs/ContactUs";
import Social from "../Social/Social";
import Countdown from "../Countdown/Countdown";
import Nav from "@/components/Nav/Nav";
import Card from "../Card/Card";
import { useEffect, useRef, useState } from "react";

import { useSpring, animated } from "@react-spring/web";

export default function LandingOverlay() {
  const [mouse, setMouse] = useState({
    x: 0,
    y: 0,
  });

  // This will handle the spring physics for smooth animation
  const [style, api] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: { tension: 200, friction: 20 }, // Adjust the physics here for more/less resistance and stiffness
  }));

  // Update the spring whenever the mouse position changes
  useEffect(() => {
    api.start({
      x: mouse.x,
      y: mouse.y,
    });
  }, [mouse, api]);

  const leftCardContainerRef = useRef(null);
  const rightCardContainerRef = useRef(null);
  return (
    <div
      className={styles.mainwrapper}
      id="mainwrapper"
      onMouseMove={(e) => {
        console.log(e.clientX, e.clientY);
        setMouse({ x: e.clientX, y: e.clientY });
      }}
    >
      <Social />
      <Countdown dateString="October 23, 2024 19:00:00" />
      <div className={styles.headerContainer}>
        <Navbar />
      </div>
      <div className={styles.machinecontainer}></div>
      <div className={styles.cardContainer}>
        <div className={styles.cardsLeftOuterContainer}>
          <div
            className={styles.cardsFollowZone}
            ref={leftCardContainerRef}
            onMouseEnter={() => {
              console.log("enter");
            }}
            onMouseLeave={() => {
              console.log("leave");
            }}
          ></div>
          <div className={styles.cardContainer}>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: style.x,
                top: style.y,
                width: "50px",
                height: "50px",
                backgroundColor: "red",
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
          </div>
        </div>
        <div className={styles.cardsRightOuterContainer}>
          <div className={styles.cardsFollowZone}></div>
          <div className={styles.cardContainer}></div>
        </div>
      </div>
      <AboutUsPage />
      <ContactUs />
    </div>
  );
}
