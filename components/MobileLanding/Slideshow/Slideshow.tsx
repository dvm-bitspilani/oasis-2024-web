"use client";

import styles from "./slideshow.module.scss";

import { useGSAP } from "@gsap/react";
import { useEffect, useState } from "react";
import Image from "next/image";

import one from "@/assets/MobileLanding/Slideshow/1.jpeg";
import two from "@/assets/MobileLanding/Slideshow/2.jpeg";
import three from "@/assets/MobileLanding/Slideshow/3.jpeg";
import four from "@/assets/MobileLanding/Slideshow/4.jpeg";
import five from "@/assets/MobileLanding/Slideshow/5.jpeg";

export default function Slideshow() {
  const [activeImageIndex, setActiveImageIndex] = useState(0);
  const imageArray = [one, two, three, four, five];

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveImageIndex((prev) => {
        if (prev === imageArray.length - 1) {
          return 0;
        } else {
          return prev + 1;
        }
      });
    }, 5000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <div className={styles.slideshow}>
      {imageArray.map((img, index) => {
        return (
          <Image
            src={img}
            alt="image"
            placeholder="blur"
            key={index}
            style={{
              zIndex: imageArray.length - index,
              opacity: activeImageIndex === index ? 1 : 0,
            }}
          />
        );
      })}
    </div>
  );
}
