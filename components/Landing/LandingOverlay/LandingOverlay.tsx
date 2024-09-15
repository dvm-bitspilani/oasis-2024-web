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
  const [isMouseOverLeft, setIsMouseOverLeft] = useState(false);
  const [isMouseMoving, setIsMouseMoving] = useState(true);
  const [angle, setAngle] = useState([0, (2 * Math.PI) / 3, (4 * Math.PI) / 3]); // Start at different angles for 3 cards
  const radius = 100; // Distance from the cursor to the card
  const [timeoutId, setTimeoutId] = useState<NodeJS.Timeout | null>(null);

  // Springs for smooth animation for 3 cards
  const [styles1, api1] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: { tension: 200, friction: 20 },
  }));
  const [styles2, api2] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: { tension: 200, friction: 20 },
  }));
  const [styles3, api3] = useSpring(() => ({
    x: mouse.x,
    y: mouse.y,
    config: { tension: 200, friction: 20 },
  }));

  // Update the cards' positions based on mouse movement or revolving when the mouse is stationary
  useEffect(() => {
    if (!isMouseMoving) {
      const cardX1 = mouse.x + radius * Math.cos(angle[0]);
      const cardY1 = mouse.y + radius * Math.sin(angle[0]);

      const cardX2 = mouse.x + radius * Math.cos(angle[1]);
      const cardY2 = mouse.y + radius * Math.sin(angle[1]);

      const cardX3 = mouse.x + radius * Math.cos(angle[2]);
      const cardY3 = mouse.y + radius * Math.sin(angle[2]);

      // Update all three cards' positions
      api1.start({
        x: cardX1,
        y: cardY1,
      });
      api2.start({
        x: cardX2,
        y: cardY2,
      });
      api3.start({
        x: cardX3,
        y: cardY3,
      });

      // Increment the angles for the next frame
      setAngle((prevAngle) => [
        (prevAngle[0] + 0.01) % (2 * Math.PI),
        (prevAngle[1] + 0.01) % (2 * Math.PI),
        (prevAngle[2] + 0.01) % (2 * Math.PI),
      ]);
    } else {
      // When the mouse is moving, all cards follow the cursor
      api1.start({ x: mouse.x, y: mouse.y });
      api2.start({ x: mouse.x, y: mouse.y });
      api3.start({ x: mouse.x, y: mouse.y });
    }
  }, [mouse, angle, isMouseMoving, api1, api2, api3]);

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
          <div className={styles.cardsFollowZone}></div>
          <div className={styles.cardContainer}></div>
        </div>
      </div>
      <AboutUsPage />
      <ContactUs />
    </div>
  );
}
