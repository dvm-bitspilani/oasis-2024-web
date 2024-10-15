"use client";

import styles from "./machine.module.scss";
import prev from "../../../assets/About/prev.png";
import next from "../../../assets/About/next.png";
import pause from "../../../assets/About/pause.png";
import play from "../../../assets/About/play.png"; 
import slotMachine from "@/assets/Landing/slotMachine2D.png";

import Image from "next/image";
import { forwardRef, useState, useEffect, useRef } from "react";

const MobileSlotMachine = forwardRef(function MobileSlotMachine(
  props,
  ref: any
) {
  const [iframeIndex, setIframeIndex] = useState(0);
  const playerRef = useRef<any>(null);
  const [isPlaying, setIsPlaying] = useState(true); 

  const videoUrlArrayIframe = ["ZCrClSBM1ns", "0BYgHIMnz50", "krsrGOqnAN0"];

  // Function to initialize the YouTube player
  useEffect(() => {
    const loadYouTubeAPI = () => {
      const tag = document.createElement("script");
      tag.src = "https://www.youtube.com/iframe_api";
      const firstScriptTag = document.getElementsByTagName("script")[0];
      firstScriptTag?.parentNode?.insertBefore(tag, firstScriptTag);
    };

    window.onYouTubeIframeAPIReady = () => {
      playerRef.current = new window.YT.Player("yt-player", {
        events: {
          onReady: (event: any) => {
            event.target.playVideo();
            setIsPlaying(true); // Video is playing initially
          },
          onStateChange: (event: any) => {
            // Update isPlaying state based on video state (1 = playing, 2 = paused)
            if (event.data === window.YT.PlayerState.PLAYING) {
              setIsPlaying(true);
            } else if (event.data === window.YT.PlayerState.PAUSED) {
              setIsPlaying(false);
            }
          },
        },
      });
    };

    loadYouTubeAPI();
  }, []);

  // Function to handle switching videos
  const switchVideoIframe = (index: number) => {
    setIframeIndex(index);
    if (playerRef.current) {
      playerRef.current.loadVideoById(videoUrlArrayIframe[index]);
      setIsPlaying(true);
    }
  };

  const nextVideoIframe = () => {
    setIframeIndex((prev) => {
      const newIndex = prev === 2 ? 0 : prev + 1;
      switchVideoIframe(newIndex);
      return newIndex;
    });
  };

  const prevVideoIframe = () => {
    setIframeIndex((prev) => {
      const newIndex = prev === 0 ? 2 : prev - 1;
      switchVideoIframe(newIndex);
      return newIndex;
    });
  };

  const togglePlayPause = () => {
    if (playerRef.current) {
      if (isPlaying) {
        playerRef.current.pauseVideo();
      } else {
        playerRef.current.playVideo();
      }
    }
  };

  return (
    <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
      <iframe
        id="yt-player"
        src={`https://www.youtube.com/embed/${videoUrlArrayIframe[iframeIndex]}?enablejsapi=1`} // Enable JS API for control
        className={styles.ytEmbed}
        allow="autoplay; encrypted-media"
        allowFullScreen
      />
      <Image
        src={slotMachine}
        alt="slot-machine-2d"
        className={styles.machine}
      />
      <div className={styles.buttonContainer}>
        <Image
          src={prev}
          alt="left arrow"
          className={styles.arrow}
          onClick={prevVideoIframe}
        />
        <Image
          src={isPlaying ? pause : play}
          alt={isPlaying ? "pause" : "play"}
          className={styles.pause}
          onClick={togglePlayPause}
        />
        <Image
          src={next}
          alt="right arrow"
          className={styles.arrow}
          onClick={nextVideoIframe}
        />
      </div>
    </div>
  );
});

export default MobileSlotMachine;
