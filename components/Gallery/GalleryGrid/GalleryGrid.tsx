"use client";

import React, { useState, useEffect } from "react";
import styles from "./gallerygrid.module.scss";

import Image from "next/image";
import { StaticImageData } from "next/image";

import one from "../../../assets/Gallery/one.jpg";
import two from "../../../assets/Gallery/two.jpg";
import three from "../../../assets/Gallery/three.jpg";
import four from "../../../assets/Gallery/four.jpg";
import five from "../../../assets/Gallery/five.jpg";
import six from "../../../assets/Gallery/six.jpg";
import seven from "../../../assets/Gallery/seven.jpg";
import eight from "../../../assets/Gallery/eight.jpg";
import nine from "../../../assets/Gallery/nine.jpg";
import ten from "../../../assets/Gallery/ten.jpg";
import eleven from "../../../assets/Gallery/eleven.jpg";
import twelve from "../../../assets/Gallery/twelve.jpg";
import thirteen from "../../../assets/Gallery/thirteen.jpg";
import fourteen from "../../../assets/Gallery/fourteen.jpg";
import sixteen from "../../../assets/Gallery/sixteen.jpg";
import seventeen from "../../../assets/Gallery/seventeen.jpg";
import eightteen from "../../../assets/Gallery/eightteen.jpg";
import nineteen from "../../../assets/Gallery/nineteen.jpg";
import twenty from "../../../assets/Gallery/twenty.jpg";
import twentyone from "../../../assets/Gallery/twentyone.jpg";

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
