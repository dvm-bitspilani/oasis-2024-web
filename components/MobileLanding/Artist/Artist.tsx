import styles from "./artist.module.scss";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import Image from "next/image";
import MusicSection from "./MusicButtons/MusicButton";
import { useGSAP } from "@gsap/react";
import { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

interface Props {
  reverse: boolean;
  image: string | StaticImport;
  name: string;
  date: number;
  music: string;
  artist: string;
  spotifyUrl: string;
  playingArtist: string | null;
  setPlayingArtist: any;
}

gsap.registerPlugin(ScrollTrigger);

export default function Artist({
  reverse,
  image,
  name,
  date,
  music,
  artist,
  spotifyUrl,
  playingArtist,
  setPlayingArtist,
}: Props) {
  const artistRef: any = useRef(null);
  useGSAP(
    () => {
      const tl = gsap.timeline({
        scrollTrigger: {
          trigger: artistRef.current,
          markers: false,
          toggleActions: "play none none none",
          start: "top 70%",
        },
      });

      console.log(artistRef.current);
      console.dir(artistRef.current);

      tl.from(artistRef.current.children[0], {
        xPercent: reverse ? 250 : -250,
        duration: 0.5,
      }).from(
        // artistRef.current.children[1].children,
        artistRef.current.children[1],
        {
          xPercent: reverse ? -250 : 250,
          duration: 0.5,
          //   stagger: 0.2,
        },
        "-=0.25"
      );
    },
    { dependencies: [] }
  );
  return (
    <div
      className={reverse ? `${styles.artist} ${styles.reverse}` : styles.artist}
      ref={artistRef}
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
        <MusicSection
          artist={artist}
          music={music}
          spotifyUrl={spotifyUrl}
          reverse={!reverse}
          playingArtist={playingArtist}
          setPlayingArtist={setPlayingArtist}
        />
      </div>
    </div>
  );
}
