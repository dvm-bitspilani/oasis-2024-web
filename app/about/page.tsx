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
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import RegBtn from "@/components/Landing/Navbar/RegBtn/RegBtn";
import MobileSlotMachine from "@/components/AboutUs/Machine/Machine";

export default function About() {

  const router = useRouter();
  useEffect(() => {
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "auto";
    return () => { document.body.style.overflow = previousOverflow; };
  }, []);



  return (
    <>
      <div className={styles.aboutBack}>
        {/* <Glow /> */}
        <Grunge />
        <Grid />
        <SuitBackground />
      </div>
      <div className={styles.ham}>
        <Link prefetch={false} href="/" aria-label="Back to home">
          <BackButton />
        </Link>
      </div>

      <div className={styles.reg}>
        <RegBtn />
      </div>
      <div className={styles.pageWrapper}>
        {/* <div className={styles.header}>
          <div className={styles.backBtn}>
            <Link prefetch={false} href="/" aria-label="Back to home">
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