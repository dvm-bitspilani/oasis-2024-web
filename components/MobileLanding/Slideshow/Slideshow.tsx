"use client";

import styles from "./slideshow.module.scss";

import { useGSAP } from "@gsap/react";
import { useState } from "react";
import Image from "next/image";

import one from "@/assets/MobileLanding/Slideshow/1.jpeg";
import two from "@/assets/MobileLanding/Slideshow/2.jpeg";
import three from "@/assets/MobileLanding/Slideshow/3.jpeg";
import four from "@/assets/MobileLanding/Slideshow/4.jpeg";
import five from "@/assets/MobileLanding/Slideshow/5.jpeg";

export default function Slideshow() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageArray = [one, two, three, four, five];
  useGSAP(() => {}, { dependencies: [activeImageIndex] });

  return (
    <div className={styles.slideshow}>
      <Image
        src={imageArray[activeImageIndex]}
        alt="visible image"
        placeholder="blur"
      />
      <Image
        src={
          activeImageIndex === imageArray.length - 1
            ? imageArray[0]
            : imageArray[activeImageIndex + 1]
        }
        alt="next image"
        placeholder="blur"
      />
    </div>
  );
}
