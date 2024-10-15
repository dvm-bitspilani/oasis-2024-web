"use client";

import styles from "./machine.module.scss";

import prev from "../../../assets/About/prev.png";
import next from "../../../assets/About/next.png";
import pause from "../../../assets/About/pause.png";

import slotMachine from "@/assets/Landing/slotMachine2D.svg";

import Image from "next/image";
import { forwardRef, useState } from "react";

const MobileSlotMachine = forwardRef(function MobileSlotMachine(
  props,
  ref: any
) {
  const [iframeIndex, setIframeIndex] = useState(0);

  const nextVideoIframe = () => {
    setIframeIndex((prev) => {
      console.log(prev);
      if (prev === 2) {
        return 0;
      }
      return prev + 1;
    });
  };

  const prevVideoIframe = () => {
    setIframeIndex((prev) => {
      console.log(prev);
      if (prev === 0) {
        return 2;
      }
      return prev - 1;
    });
  };

  const videoUrlArrayIframe = ["ZCrClSBM1ns", "0BYgHIMnz50", "krsrGOqnAN0"];

  return (
    <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
      <iframe
        src={`https://www.youtube.com/embed/${videoUrlArrayIframe[iframeIndex]}`}
        className={styles.ytEmbed}
      />
      <Image
        src={slotMachine}
        alt="slot-machine-2d"
        className={styles.machine}
      />
      <div className={styles.buttonContainer}>
        <Image
          src={prev}
          alt="left arrow"
          className={styles.arrow}
          onClick={prevVideoIframe}
        />
        <Image
          src={pause}
          alt="pause"
          className={styles.pause}
          onClick={prevVideoIframe}
        />
        <Image
          src={next}
          alt="right arrow"
          className={styles.arrow}
          onClick={nextVideoIframe}
        />
      </div>
    </div>
  );
});

export default MobileSlotMachine;