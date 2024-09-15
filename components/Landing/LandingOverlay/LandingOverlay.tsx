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
import { useSpring, animated, config } from "@react-spring/web";

export default function LandingOverlay() {
  const [mouse, setMouse] = useState({ x: 0, y: 0 });
  const [isMouseOverLeft, setIsMouseOverLeft] = useState(false);
  const [isMouseOverRight, setIsMouseOverRight] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [angle, setAngle] = useState([0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]);
  const radius = 100;
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);
  const [verticalOffsets, setVerticalOffsets] = useState([0, 0, 0]);
  const [verticalOffsetRandomiser, setVerticalOffsetRandomiser] = useState(
    Array.from({ length: 6 }, () => Math.floor(Math.random() * 1000) + 1)
  );

  // Custom spring configuration for bounciness
  const bouncyConfig = {
    tension: 300,
    friction: 10,
    mass: 2,
  };

  // Springs for smooth animation for 3 cards
  const [styles1, api1] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));
  const [styles2, api2] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));
  const [styles3, api3] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));
  const [styles4, api4] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));
  const [styles5, api5] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));
  const [styles6, api6] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: bouncyConfig,
  }));

  // Update the cards' positions based on mouse movement or hovering
  useEffect(() => {
    if (isMouseOverLeft) {
      if (!isMouseMoving) {
        const cardX1 = mouse.x + radius * Math.cos(angle[0]);
        const cardY1 = mouse.y + radius * Math.sin(angle[0]);

        const cardX2 = mouse.x + radius * Math.cos(angle[1]);
        const cardY2 = mouse.y + radius * Math.sin(angle[1]);

        const cardX3 = mouse.x + radius * Math.cos(angle[2]);
        const cardY3 = mouse.y + radius * Math.sin(angle[2]);

        // Update all three cards' positions with delay
        api1.start({ x: cardX1, y: cardY1, delay: 50 });
        api2.start({ x: cardX2, y: cardY2, delay: 100 });
        api3.start({ x: cardX3, y: cardY3, delay: 150 });

        // Increment the angles for the next frame
        setAngle((prevAngle) => [
          (prevAngle[0] + 0.01) % (2 * Math.PI),
          (prevAngle[1] + 0.01) % (2 * Math.PI),
          (prevAngle[2] + 0.01) % (2 * Math.PI),
        ]);
      } else {
        // When the mouse is moving, all cards follow the cursor with different delays
        api1.start({ x: mouse.x, y: mouse.y, delay: 50 });
        api2.start({ x: mouse.x, y: mouse.y, delay: 100 });
        api3.start({ x: mouse.x, y: mouse.y, delay: 150 });
      }
    } else {
      const centerX = window.innerWidth / 2 - 400;
      const centerY = window.innerHeight / 2 + 150;

      // Apply sine wave hovering effect
      api1.start({ x: centerX - 100, y: centerY + verticalOffsets[0] });
      api2.start({ x: centerX, y: centerY + 130 + verticalOffsets[1] });
      api3.start({ x: centerX + 100, y: centerY + verticalOffsets[2] });
    }
  }, [
    mouse,
    angle,
    isMouseMoving,
    verticalOffsets,
    isMouseOverLeft,
    api1,
    api2,
    api3,
  ]);

  // Effect for updating vertical offsets
  useEffect(() => {
    if (!isMouseOverLeft) {
      const interval = setInterval(() => {
        setVerticalOffsets((prevOffsets) =>
          prevOffsets.map(
            (_, index) =>
              Math.sin(
                (Date.now() * 2) / 1000 + verticalOffsetRandomiser[index] * 2
              ) * 15
          )
        );
      }, 16); // Run approx. 60 times per second

      return () => clearInterval(interval);
    }
  }, [isMouseOverLeft, verticalOffsetRandomiser]);

  const handleMouseMove = (e: React.MouseEvent) => {
    // Update mouse position
    setMouse({ x: e.clientX, y: e.clientY });

    // If there's already a timeout, clear it
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    // Set the mouse as moving
    setIsMouseMoving(true);

    // Start a new timeout to detect when the mouse stops moving
    const newTimeoutId = setTimeout(() => {
      setIsMouseMoving(false);
    }, 100); // 100ms of no movement triggers revolving

    setTimeoutId(newTimeoutId);
  };

  const leftCardContainerRef = useRef(null);
  const rightCardContainerRef = useRef(null);

  return (
    <div
      className={styles.mainwrapper}
      id="mainwrapper"
      onMouseMove={handleMouseMove}
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
              setIsMouseOverLeft(true);
            }}
            onMouseLeave={() => {
              setIsMouseOverLeft(false);
            }}
          ></div>
          <div className={styles.cardContainer}>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles1.x,
                top: styles1.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles2.x,
                top: styles2.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles3.x,
                top: styles3.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
          </div>
        </div>
        <div className={styles.cardsRightOuterContainer}>
          <div
            className={styles.cardsFollowZone}
            ref={rightCardContainerRef}
            onMouseEnter={() => {
              setIsMouseOverRight(true);
            }}
            onMouseLeave={() => {
              setIsMouseOverRight(false);
            }}
          ></div>
          <div className={styles.cardContainer}>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles4.x,
                top: styles4.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles5.x,
                top: styles5.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
            <animated.div
              className={styles.card}
              style={{
                position: "absolute",
                left: styles6.x,
                top: styles6.y,
                transform: "translate(-50%, -50%)",
              }}
            ></animated.div>
          </div>
        </div>
      </div>
      <AboutUsPage />
      <ContactUs />
    </div>
  );
}
