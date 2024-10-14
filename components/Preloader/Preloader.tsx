import styles from "./preloader.module.scss";

export default function Preloader({...props}) {
    return (
        <div className={styles.preloader} {...props} id="preloader">
            <video
                autoPlay
                disablePictureInPicture
                loop
                muted
                preload="auto"
                src="/Videos/preloaderCoinVideo.mp4"
            />
            {/*<img src="/Videos/preloaderCoinVideo.gif" alt="preloader gif"/>*/}
        </div>
    );
}
