<<<<<<< HEAD
"use client";
import React, { useEffect, useRef } from "react";
import styles from "./artist.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import ScrollTrigger from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
=======
import styles from "./artist.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import MusicSection from "./MusicButtons/MusicButton";
>>>>>>> fb08c9c0a591e4f2329c3b5d4f7819009da5124a

interface Props {
  reverse: boolean;
  image: string | StaticImport;
  name: string;
  date: number;
<<<<<<< HEAD
}

export default function Artist({ reverse, image, name, date }: Props) {

=======
  music: string;
  artist: string;
  spotifyUrl: string;
}

export default function Artist({
  reverse,
  image,
  name,
  date,
  music,
  artist,
  spotifyUrl,
}: Props) {
>>>>>>> fb08c9c0a591e4f2329c3b5d4f7819009da5124a
  return (
    <div
      className={reverse ? `${styles.artist} ${styles.reverse}` : styles.artist}
    >
      <div className={styles.imgContainer}>
        <Image
          src={image}
          alt={name}
          className={`${styles.image} ${
            date === 26
              ? styles.vishal
              : date === 25
              ? styles.seedhe
              : styles.diary
          }`}
        />
      </div>
      <div className={styles.description}>
        <p
          className={styles.name}
          style={
            name === "Vishal Mishra"
              ? {
                  marginTop: 40,
                }
              : {}
          }
        >
          {name}
        </p>
        <p className={styles.date}>{`October ${date}`}</p>
<<<<<<< HEAD
=======
        <MusicSection
          artist={artist}
          music={music}
          spotifyUrl={spotifyUrl}
          reverse={!reverse}
        />
>>>>>>> fb08c9c0a591e4f2329c3b5d4f7819009da5124a
      </div>
    </div>
  );
}
