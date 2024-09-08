"use client";
import styles from "./overlay.module.scss";
import Navbar from "../Navbar/Navbar";
import CardsGroup from "../CardsGroup/CardsGroup";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import ContactUs from "@/components/ContactUs/ContactUs";
import Social from "../Social/Social";
import Countdown from "../Countdown/Countdown";
import Card from "../Card/Card";
import { useRef } from "react";

export default function LandingOverlay() {
  const leftCardContainerRef = useRef(null);
  const rightCardContainerRef = useRef(null);
  return (
    <div className={styles.mainwrapper} id="mainwrapper">
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
          ></div>
          <div className={styles.cardContainer}>
            <div className={styles.card}></div>
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
