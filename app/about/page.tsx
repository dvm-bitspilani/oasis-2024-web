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
import SlotMachine from "../../components/AboutUs/Machine/Machine";

export default function About() {
  return (
    <>
      <PrePreloader />
      <div className={styles.brochureBack}>
        <Glow />
        <Grunge />
        <Grid />
        <SuitBackground />
      </div>
      <div className={styles.pageWrapper}>
        <AboutUsPage />
        <SlotMachine />
        <div className={styles.backBtn}>
          <Link href="/">
            <BackButton />
          </Link>
        </div>
        {/* <div className={styles.reg}>
          <RegBtn />
        </div> */}
        <div className={styles.ham}>
          <Link href="/">
            <BackButton />
          </Link>
        </div>
        
        

        {/* <div className={styles.reg}>
          <RegBtn />
        </div> */}
      </div>
    </>
  );
}
