'use client'

import styles from './mobileLanding.module.scss'
import Image from "next/image";

import slotMachine2D from '@/assets/Landing/slotMachine2D.png'
import MobileRegBtn from "@/components/MobileLanding/RegBtn/RegBtn";
import MobileHeading from "@/components/MobileLanding/AboutUsHeading/MobileHeading";
import VideoCarousel from "@/components/MobileLanding/VideoCarousel/VideoCarousel";
import AllEventsBtn from "@/components/MobileLanding/AllEventsBtn/AllEventsBtn";
import Artist from "@/components/MobileLanding/Artist/Artist";

import profShowsBackground from '@/assets/MobileLanding/ProfShowsMobile/profShowsBackgroundMobile.png'
import grungeBackground from '@/assets/MobileLanding/ProfShowsMobile/GrungeMobile.png'
import vishal from '@/assets/MobileLanding/ProfShowsMobile/VishalMishra.png'
import seedheMaut from '@/assets/MobileLanding/ProfShowsMobile/SeedheMaut.png'
import yellowDiary from '@/assets/MobileLanding/ProfShowsMobile/YellowDiary.png'
import ContactUsMobile from "@/components/MobileLanding/ContactUs/ContactUs";

export default function MobileLanding() {
    return (
        <main className={styles.mobileLandingWrapper}>
            <div className={styles.landing}>
                <Image src={slotMachine2D} alt='2d slot machine' className={styles.slotMachine}/>
                <MobileRegBtn/>
                {/*<svg*/}
                {/*    xmlns="http://www.w3.org/2000/svg"*/}
                {/*    width="430"*/}
                {/*    height="313"*/}
                {/*    viewBox="0 0 390 313"*/}
                {/*    fill="none"*/}
                {/*    className={styles.gradient}*/}
                {/*    id="gradient"*/}
                {/*>*/}
                {/*    <g filter="url(#filter0_f_2271_3970)">*/}
                {/*        <path d="M0 123L198 170.977L390 123V321H0V123Z" fill="black"/>*/}
                {/*    </g>*/}
                {/*    <defs>*/}
                {/*        <filter*/}
                {/*            id="filter0_f_2271_3970"*/}
                {/*            x="-122.9"*/}
                {/*            y="0.0999985"*/}
                {/*            width="635.8"*/}
                {/*            height="443.8"*/}
                {/*            filterUnits="userSpaceOnUse"*/}
                {/*            colorInterpolationFilters="sRGB"*/}
                {/*        >*/}
                {/*            <feFlood floodOpacity="0" result="BackgroundImageFix"/>*/}
                {/*            <feBlend*/}
                {/*                mode="normal"*/}
                {/*                in="SourceGraphic"*/}
                {/*                in2="BackgroundImageFix"*/}
                {/*                result="shape"*/}
                {/*            />*/}
                {/*            <feGaussianBlur*/}
                {/*                stdDeviation="61.45"*/}
                {/*                result="effect1_foregroundBlur_2271_3970"*/}
                {/*            />*/}
                {/*        </filter>*/}
                {/*    </defs>*/}
                {/*</svg>*/}
                <div className={styles.fade}></div>
            </div>
            <div className={styles.aboutUs}>
                <MobileHeading text='About Us' showArrows={true}/>
                <p className={styles.aboutUsText}>
                    Oasis, the annual cultural extravaganza of Birla Institute of Technology and Science, Pilani, has
                    been a vibrant part of India&apos;s cultural tapestry since 1971. Managed entirely by students,
                    it&apos;s a
                    dazzling showcase of talent in Dance, Drama, Literature, Comedy, Fashion, and Music. It&apos;s where
                    dreams come alive, laughter fills the air, and creativity knows no bounds. Step into the world of
                    Oasis, where youth&apos;s boundless potential shines.
                </p>
                <VideoCarousel videoArray={["ZCrClSBM1ns", "0BYgHIMnz50", "krsrGOqnAN0"]}/>
                <AllEventsBtn/>
            </div>
            <div className={styles.profShows}>
                <div className={styles.artistContainer}>
                    <Artist image={vishal} reverse={false} name='Vishal Mishra' date={26}/>
                    <Artist image={seedheMaut} reverse={true} name='Seedhe Maut' date={25}/>
                    <Artist image={yellowDiary} reverse={false} name='The Yellow Diary' date={24}/>
                </div>
                <Image
                    src={profShowsBackground}
                    alt='Background image for prof shows page'
                    className={styles.profShowsBackground}
                />
                <Image
                    src={grungeBackground}
                    alt='grunge texture'
                    className={styles.profShowsBackground}
                />
            </div>
            <div className={styles.contactUs}>
                <ContactUsMobile/>
            </div>
        </main>
    )
}