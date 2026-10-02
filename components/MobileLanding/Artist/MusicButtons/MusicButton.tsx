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
  playingArtist: string | null;
  setPlayingArtist: any;
}

export default function MusicSection({
  music,
  artist,
  spotifyUrl,
  reverse,
  playingArtist,
  setPlayingArtist,
}: Props) {
  const [isMusicPlaying, setIsMusicPlaying] = useState(false);

  function playClickHandler() {
    const thisAudio: HTMLMediaElement = document.querySelector(`#${artist}`)!;
    if (!thisAudio) return;
    if (playingArtist !== artist) {
      thisAudio
        .play()
        .then(() => {
          setPlayingArtist(artist);
          setIsMusicPlaying(true);
        })
        .catch((err) => {
          console.log(err);
        });
    } else if (playingArtist === artist) {
      thisAudio.pause();
      setPlayingArtist(null);
      setIsMusicPlaying(false);
    }
  }

  useEffect(() => {
    const thisAudio: HTMLMediaElement = document.querySelector(`#${artist}`)!;
    if (thisAudio && playingArtist !== artist && !thisAudio.paused) {
      thisAudio.pause();
      setIsMusicPlaying(false);
    }
  }, [playingArtist, artist]);

  return (
    <>
      <audio className="music" id={artist} loop preload="none">
        <source src={music} type="audio/ogg; codecs=opus" />
        Audio not supported
      </audio>
      <div
        className={
          reverse ? `${styles.container} ${styles.reverse}` : styles.container
        }
      >
        <a target="_blank" rel="noopener noreferrer" href={spotifyUrl} className={styles.spotify}>
          <Image src={spotify} alt="spotify icon" />
        </a>
        <button type="button" className={styles.playPause} aria-label={isMusicPlaying ? "Pause music" : "Play music"} onClick={playClickHandler} style={{border: 0, background: "transparent"}}>
          <Image src={isMusicPlaying ? pause : play} alt="" />
        </button>
      </div>
    </>
  );
}
