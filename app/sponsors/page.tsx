import styles from "./sponsors.module.scss";

import React from "react";
import Link from "next/link";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Trees from "@/components/ComingSoon/Trees";

export default function Sponsors() {
  return (
    <div className={styles.wrapper}>
      <div className={styles.backgroundImage} />
      {/* <Link href="/" className={styles.backButton}>
        <BackButton />
      </Link> */}
      <div className={styles.mainContainer}>
        <Link href="/" className={styles.backButton}>
          <BackButton />
        </Link>
        <div className={styles.title}>Sponsors</div>
        <div className={styles.sponsorsContainer}></div>
      </div>
      <svg
        style={{ position: "absolute", width: "100%", height: "100%" }}
        width="1687"
        height="1080"
        viewBox="0 0 1687 1080"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
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
            <stop stopColor="#FADC69" />
            <stop offset="1" stopColor="#FADC69" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>

      <Trees />
    </div>
  );
}
