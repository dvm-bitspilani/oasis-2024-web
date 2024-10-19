"use client";

import { useEffect, useState } from "react";
import styles from "./preloader.module.scss";

import { detectAppleDevice } from "@/helper/detectAppleDevice";

export default function Preloader({ ...props }) {
  const [isAppleDevice, setIsAppleDevice] = useState(false);

  useEffect(() => {
    setIsAppleDevice(detectAppleDevice());
  }, []);
  return (
    <div className={styles.preloader} {...props} id="preloader">
      {isAppleDevice ? (
        <img src="/Videos/preloaderCoinVideo.gif" alt="preloader gif" />
      ) : (
        <video
          autoPlay
          disablePictureInPicture
          loop
          muted
          preload="auto"
          src="/Videos/preloaderCoinVideo.mp4"
        />
      )}
    </div>
  );
}
