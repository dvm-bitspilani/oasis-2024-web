'use client'

import styles from './mobileLanding.module.scss'
import Image from "next/image";

import slotMachine2D from '@/assets/Landing/slotMachine2D.png'
import MobileRegBtn from "@/components/MobileLanding/RegBtn/RegBtn";

export default function MobileLanding() {
    return (
        <main className={styles.mobileLandingWrapper}>
            <div className={styles.landing}>
                <Image src={slotMachine2D} alt='2d slot machine' className={styles.slotMachine}/>
                <MobileRegBtn/>
                <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="430"
                    height="313"
                    viewBox="0 0 390 313"
                    fill="none"
                    className={styles.gradient}
                    id="gradient"
                >
                    <g filter="url(#filter0_f_2271_3970)">
                        <path d="M0 123L198 170.977L390 123V321H0V123Z" fill="black"/>
                    </g>
                    <defs>
                        <filter
                            id="filter0_f_2271_3970"
                            x="-122.9"
                            y="0.0999985"
                            width="635.8"
                            height="443.8"
                            filterUnits="userSpaceOnUse"
                            colorInterpolationFilters="sRGB"
                        >
                            <feFlood floodOpacity="0" result="BackgroundImageFix"/>
                            <feBlend
                                mode="normal"
                                in="SourceGraphic"
                                in2="BackgroundImageFix"
                                result="shape"
                            />
                            <feGaussianBlur
                                stdDeviation="61.45"
                                result="effect1_foregroundBlur_2271_3970"
                            />
                        </filter>
                    </defs>
                </svg>
            </div>
            <div className={styles.aboutUs}></div>
            <div className={styles.profShows}></div>
            <div className={styles.contactUs}></div>
        </main>
    )
}