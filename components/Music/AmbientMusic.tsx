'use client'

import {useState} from "react";

export default function AmbientMusic() {
    const [isMusicPlaying, setIsMusicPlaying] = useState(false)

    function audioClickHandler() {
        const audioElement: HTMLMediaElement | null = document.querySelector('#music')
        if (audioElement?.paused) {
            audioElement?.play()
                .then(() => {
                    setIsMusicPlaying(true)
                })
                .catch(err => {
                    console.log(err)
                })
        } else {
            audioElement?.pause()
            setIsMusicPlaying(false)
        }
        console.dir(audioElement)
    }

    return (
        <>
            <audio id='music' loop>
                <source src='/Audio/house_of_the_rising_sun.mp3' type='audio/mpeg'/>
                Audio not supported
            </audio>
            <button
                style={{
                    position: "absolute",
                    left: '50%',
                    top: 0
                }}
                onClick={(e) => {
                    e.preventDefault()
                    audioClickHandler()
                }}
            >
                {isMusicPlaying ? 'Pause' : 'Play'}
            </button>
        </>
    )
}