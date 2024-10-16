import styles from "./music.module.scss";

import play from "@/assets/MobileLanding/ProfShowsMobile/play.svg";
import pause from "@/assets/MobileLanding/ProfShowsMobile/pause.svg";
import spotify from "@/assets/MobileLanding/ProfShowsMobile/spotify.svg";
import { useEffect, useState } from "react";
import Image from "next/image";

interface Props {
  music: string;
  artist: string;
  spotifyUrl: string;
  reverse: boolean;
}

export default function MusicSection({
  music,
  artist,
  spotifyUrl,
  reverse,
}: Props) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  function playClickHandler() {
    const allAudios = document.querySelectorAll(".music");
    const thisAudio: HTMLMediaElement = document.querySelector(`#${artist}`)!;
    allAudios.forEach((elem: any) => {
      if (!elem.paused) {
        elem.pause();
      }
    });
    if (!isMusicPlaying) {
      thisAudio
        .play()
        .then(() => {
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else {
      setIsMusicPlaying(false);
    }
  }

  return (
    <>
      <audio className="music" id={artist} loop>
        <source src={music} type="audio/mpeg" />
        Audio not supported
      </audio>
      <div
        className={
          reverse ? `${styles.container} ${styles.reverse}` : styles.container
        }
      >
        <a target="_blank" href={spotifyUrl} className={styles.spotify}>
          <Image src={spotify} alt="spotify icon" />
        </a>
        <div className={styles.playPause} onClick={playClickHandler}>
          <Image src={isMusicPlaying ? pause : play} alt="spotify icon" />
        </div>
      </div>
    </>
  );
}
