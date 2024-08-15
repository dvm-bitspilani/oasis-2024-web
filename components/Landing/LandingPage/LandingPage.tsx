import React from "react";
import styles from "./landingpage.module.scss";
import CardsGroup from "../CardsGroup/CardsGroup";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";
import CardsAndMachine from "./CardsAndMachine";

export default function LandingPage() {
  return (
    <>
      <div className={styles.mainwrapper}>
        <div className={styles.glow}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="1687"
            height="1080"
            viewBox="0 0 1687 1080"
            fill="none"
          >
            <path
              opacity="0.15"
              d="M0 1394L0 -293L1687 -293L1687 1394L0 1394Z"
              fill="url(#paint0_radial_1444_3421)"
            />
            <defs>
              <radialGradient
                id="paint0_radial_1444_3421"
                cx="0"
                cy="0"
                r="1"
                gradientUnits="userSpaceOnUse"
                gradientTransform="translate(843.5 550.5) scale(843.5)"
              >
                <stop stop-color="#FADC69" />
                <stop offset="1" stop-color="#FADC69" stop-opacity="0" />
              </radialGradient>
            </defs>
          </svg>
        </div>
        <div className={styles.headerContainer}>
          <Navbar />
        </div>
        <div className={styles.machinecontainer}>
          <div className={styles.cards}>
            <CardsGroup />
          </div>
          <CardsAndMachine />
          <div className={styles.cards}>
            <CardsGroup />
          </div>
        </div>
        <div className={styles.treescontainer}>
          <Image
            src="/tree.png"
            alt=""
            width={430}
            height={530}
            style={{ transform: "scaleX(-1)" }}
          />
          <Image
            src="/tree.png"
            alt=""
            width={430}
            height={530}
            className={styles.righttree}
          />
        </div>
      </div>
    </>
  );
}
