import type {HTMLAttributes} from "react";
import styles from "./preloader.module.scss";

export default function Preloader(props: HTMLAttributes<HTMLDivElement>) {
  return <div className={styles.preloader} {...props} id="preloader" role="status" aria-label="Loading page">
    <video autoPlay disablePictureInPicture loop muted playsInline preload="none" poster="/Videos/preloaderCoinPoster.webp" src="/Videos/preloaderCoinVideo.mp4" />
  </div>;
}
