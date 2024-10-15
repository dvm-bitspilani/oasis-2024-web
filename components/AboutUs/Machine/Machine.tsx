"use client";

import styles from "./machine.module.scss";

import arrow from "@/assets/Events/Carousel/carouselArrow.png";

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
      <Image
        src={arrow}
        alt="left arrow"
        className={styles.arrow}
        onClick={prevVideoIframe}
      />
      <iframe
        src={`https://www.youtube.com/embed/${videoUrlArrayIframe[iframeIndex]}`}
        className={styles.ytEmbed}
      />
      <Image src={slotMachine} alt="slot-machine-2d" id="slot-machine-2d" />
      <Image
        src={arrow}
        alt="right arrow"
        className={styles.arrow}
        onClick={nextVideoIframe}
      />
    </div>
  );
});

export default MobileSlotMachine;
