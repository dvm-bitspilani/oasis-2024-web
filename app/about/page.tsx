"use client";

import React from "react";
import styles from "./about.module.scss";

import Grid from "@/components/Landing/Grid/Grid";
import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import SuitBackground from "@/components/Landing/Backdrop/Backdrop";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Link from "next/link";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import RegBtn from "@/components/Landing/Navbar/RegBtn/RegBtn";
import MobileSlotMachine from "@/components/AboutUs/Machine/Machine";
import CursorEffect from "@/components/CursorEffect/CursorEffect";

export default function About() {
  return (
    <>
      <PrePreloader />
      <CursorEffect />
      <div className={styles.aboutBack}>
        {/* <Glow /> */}
        <Grunge />
        <Grid />
        <SuitBackground />
      </div>
      <div className={styles.ham}>
        <Link href="/">
          <BackButton />
        </Link>
      </div>

      <div className={styles.reg}>
        <RegBtn />
      </div>
      <div className={styles.pageWrapper}>
        {/* <div className={styles.header}>
          <div className={styles.backBtn}>
            <Link href="/">
              <BackButton />
            </Link>
          </div>
          <div className={styles.reg}>
            <RegBtn />
          </div>
        </div> */}

        <AboutUsPage />
        <MobileSlotMachine />
      </div>
    </>
  );
}