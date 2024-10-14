import styles from './mobileLanding.module.scss'
import Image from "next/image";

import slotMachine2D from '@/assets/Landing/slotMachine2D.png'

export default function MobileLanding() {
    return (
        <main className={styles.mobileLandingWrapper}>
            <Image src={slotMachine2D} alt='2d slot machine' className={styles.slotMachine}/>
            <div className={styles.aboutUs}></div>
            <div className={styles.profShows}></div>
            <div className={styles.contactUs}></div>
        </main>
    )
}