"use client";

import React, { useState, useEffect } from "react";
import styles from "./gallerygrid.module.scss";

import Image from "next/image";
import { StaticImageData } from "next/image";

import one from "../../../assets/Gallery/one.webp";
import two from "../../../assets/Gallery/two.webp";
import three from "../../../assets/Gallery/three.webp";
import four from "../../../assets/Gallery/four.webp";
import five from "../../../assets/Gallery/five.webp";
import six from "../../../assets/Gallery/six.webp";
import seven from "../../../assets/Gallery/seven.webp";
import eight from "../../../assets/Gallery/eight.webp";
import nine from "../../../assets/Gallery/nine.webp";
import ten from "../../../assets/Gallery/ten.webp";
import eleven from "../../../assets/Gallery/eleven.webp";
import twelve from "../../../assets/Gallery/twelve.webp";
import thirteen from "../../../assets/Gallery/thirteen.webp";
import fourteen from "../../../assets/Gallery/fourteen.webp";
import sixteen from "../../../assets/Gallery/sixteen.webp";
import seventeen from "../../../assets/Gallery/seventeen.webp";
import eightteen from "../../../assets/Gallery/eightteen.webp";
import nineteen from "../../../assets/Gallery/nineteen.webp";
import twenty from "../../../assets/Gallery/twenty.webp";
import twentyone from "../../../assets/Gallery/twentyone.webp";

const images = [
  one,
  four,
  three,
  five,
  two,
  seven,
  six,
  ten,
  nine,
  eight,
  eleven,
  twelve,
  thirteen,
  fourteen,
  sixteen,
  sixteen,
  seventeen,
  twenty,
  nineteen,
  eightteen,
  twentyone,
];

const imageClasses = [
  styles.hStrech,
  styles.pic,
  styles.vStrech,
  styles.pic,
  styles.hStrech,
  styles.vhStrech,
  styles.pic,
  styles.vStrech,
  styles.pic,
  styles.vStrech,
  styles.hStrech,
  styles.pic,
  styles.hStrech,
  styles.pic,
  styles.vStrech,
  styles.largeScreen,
  styles.pic,
  styles.hStrech,
  styles.hStrech,
  styles.pic,
  styles.pic,
];

interface GalleryGridProps {
  eventImg: StaticImageData[];
  eventName: string[];
  eventCategory: string;
}

export default function GalleryGrid({
  eventImg,
  eventName,
  eventCategory,
}: GalleryGridProps) {
  return (
    <div className={styles.galleryGrid}>
      <div className={styles.images}>
        {eventImg.map((img, index) => (
          <div key={index} className={styles.eventImgCard}>
            <Image
              src={img}
              alt={`Image ${index + 1}`}
              className={styles.pic}
              width={200}
              height={200}
            />
            <p>{eventName[index]}</p>
          </div>
        ))}
      </div>
      <h4>{eventCategory}</h4>
    </div>
  );
}
