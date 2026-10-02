"use client";

import styles from "./machine.module.scss";
import prev from "../../../assets/About/prev.png";
import next from "../../../assets/About/next.png";
import pause from "../../../assets/About/pause.png";
import play from "../../../assets/About/play.png";
import slotMachine from "@/assets/Landing/slotMachine2D.webp";
import Image from "next/image";
import {forwardRef, useState, useEffect, useRef} from "react";

declare global {
  interface Window {
    YT: any;
    onYouTubeIframeAPIReady: () => void;
  }
}

const videos = ["Ogio7ZJSb9g", "ZCrClSBM1ns", "krsrGOqnAN0"];
const MobileSlotMachine = forwardRef(function MobileSlotMachine(props, ref: any) {
  const [iframeIndex, setIframeIndex] = useState(0);
  const [activated, setActivated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const playerRef = useRef<any>(null);
  const videoRef = useRef(0);

  useEffect(() => {
    if (!activated) return;
    let disposed = false;
    const initialize = () => {
      if (disposed || playerRef.current) return;
      playerRef.current = new window.YT.Player("yt-player", {
        width: "100%", height: "100%", videoId: videos[videoRef.current],
        playerVars: {autoplay: 1},
        events: {
          onReady: (event: any) => event.target.playVideo(),
          onStateChange: (event: any) => {
            if (!disposed) setIsPlaying(event.data === window.YT.PlayerState.PLAYING);
          },
        },
      });
    };
    const previous = window.onYouTubeIframeAPIReady;
    const onReady = () => { previous?.(); initialize(); };
    if (window.YT?.Player) initialize();
    else {
      window.onYouTubeIframeAPIReady = onReady;
      if (!document.querySelector('script[src="https://www.youtube.com/iframe_api"]')) {
        const script = document.createElement("script");
        script.src = "https://www.youtube.com/iframe_api";
        document.head.appendChild(script);
      }
    }
    return () => {
      disposed = true;
      playerRef.current?.destroy?.();
      playerRef.current = null;
      if (window.onYouTubeIframeAPIReady === onReady) window.onYouTubeIframeAPIReady = previous;
    };
  }, [activated]);

  const switchVideo = (direction: number) => {
    const index = (iframeIndex + direction + videos.length) % videos.length;
    videoRef.current = index;
    setIframeIndex(index);
    playerRef.current?.loadVideoById(videos[index]);
    playerRef.current?.pauseVideo();
    setIsPlaying(false);
  };
  const togglePlayPause = () => {
    if (!activated) { setActivated(true); setIsPlaying(true); return; }
    if (isPlaying) playerRef.current?.pauseVideo();
    else playerRef.current?.playVideo();
  };
  const buttonStyle = {border: 0, background: "transparent", padding: 0};
  const imageStyle = {width: "100%", height: "auto"};

  return <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
    {activated ? <div className={styles.ytEmbed}><div id="yt-player" /></div> : <button type="button" className={styles.ytEmbed} onClick={togglePlayPause} aria-label="Play Oasis video" style={{color: "#efd48d", font: "inherit"}}>▶ Play video</button>}
    <Image src={slotMachine} alt="slot-machine-2d" className={styles.machine} />
    <div className={styles.buttonContainer}>
      <button type="button" className={styles.arrow} onClick={() => switchVideo(-1)} aria-label="Previous video" style={buttonStyle}><Image src={prev} alt="" style={imageStyle} /></button>
      <button type="button" className={styles.pause} onClick={togglePlayPause} aria-label={isPlaying ? "Pause video" : "Play video"} style={buttonStyle}><Image src={isPlaying ? pause : play} alt="" style={imageStyle} /></button>
      <button type="button" className={styles.arrow} onClick={() => switchVideo(1)} aria-label="Next video" style={buttonStyle}><Image src={next} alt="" style={imageStyle} /></button>
    </div>
  </div>;
});
export default MobileSlotMachine;
