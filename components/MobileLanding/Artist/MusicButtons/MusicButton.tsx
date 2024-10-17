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
    if (playingArtist !== artist && !thisAudio.paused) {
      thisAudio.pause();
      setIsMusicPlaying(false);
    }
  }, [playingArtist]);

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
