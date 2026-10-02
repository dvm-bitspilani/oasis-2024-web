import styles from './videoCarousel.module.scss'
import Image from "next/image";
import React, {useState} from "react";

import carouselArrow from '@/assets/MobileLanding/AboutUsMobile/carouselArrow.svg'

interface Props {
    videoArray: string[]
}

export default function VideoCarousel({videoArray}: Props) {
    const [videoIndex, setVideoIndex] = useState(0)
    const [playing, setPlaying] = useState(false)

    function nextClickHandler() {
        setVideoIndex(prev => {
            if (prev === videoArray.length - 1) {
                return 0;
            }
            return prev + 1;
        })
    }

    function prevClickHandler() {
        setVideoIndex(prev => {
            if (prev === 0) {
                return videoArray.length - 1;
            }
            return prev - 1;
        })
    }

    return (
        <div className={styles.container}>
            <Image onClick={prevClickHandler} src={carouselArrow} alt='carousel left arrow'/>
            <div className={styles.videoContainer}>
                {playing ? <iframe
                    loading="lazy"
                    title="Oasis video"
                    src={`https://www.youtube.com/embed/${videoArray[videoIndex]}?autoplay=1`}
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                    className={styles.player}
                /> : <button type="button" className={styles.player} onClick={() => setPlaying(true)} aria-label="Play Oasis video" style={{background: "#0e0a12", border: 0, color: "#efd48d", font: "inherit", cursor: "pointer"}}>▶ Play video</button>}
            </div>
            <Image onClick={nextClickHandler} src={carouselArrow} alt='carousel right arrow'/>
        </div>
    )
}