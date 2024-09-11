import styles from "./preloader.module.scss";

function isSafari() {
  const userAgent = navigator.userAgent.toLowerCase();
  return userAgent.includes("safari") && !userAgent.includes("chrome");
}

export default function Preloader({ ...props }) {
  return (
    <div className={styles.preloader} {...props} id="preloader">
      {/* <video
        autoPlay
        disablePictureInPicture
        loop
        muted
        preload="auto"
        src="/Videos/preloaderCoinVideo.mp4"
      /> */}
      <img src="/Videos/preloaderCoinVideo.gif" alt="preloader gif" />
    </div>
  );
}
