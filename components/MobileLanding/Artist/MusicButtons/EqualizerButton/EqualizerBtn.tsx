"use client";

import { useState } from "react";
import styles from "./equalizer.module.scss";

export default function EqualizerBtn() {
  const [isPlaying, setIsPlaying] = useState(false);

  function clickHandler() {
    setIsPlaying((prev) => !prev);
  }
  return (
    <div
      className={`${styles.equalizer}  ${
        isPlaying ? styles.play : styles.pause
      }`}
      onClick={clickHandler}
    >
      <div className={styles.barContainer}>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
        <div className={styles.bar}></div>
      </div>
    </div>
  );
}
