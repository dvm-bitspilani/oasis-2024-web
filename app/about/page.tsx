"use client";

import React, {useEffect} from "react";
import { useRouter } from "next/navigation";
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

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile =
        /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 800;

      if (isMobile) {
        router.push("/");
      }
    }
    document.body.style.overflow = "hidden";
  }, []);

  useEffect(() => {
    if (!localStorage.getItem("hasAboutReloaded")) {
      localStorage.setItem("hasAboutReloaded", "true");
      window.location.reload();
    }
  });

  const handleBackButtonClick = () => {
    localStorage.removeItem("hasAboutReloaded");
  };

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
        <Link href="/" onClick={handleBackButtonClick}>
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