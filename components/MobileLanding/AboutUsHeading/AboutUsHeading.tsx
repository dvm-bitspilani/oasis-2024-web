import styles from './aboutUs.module.scss'
import Image from "next/image";

import arrow from '@/assets/MobileLanding/AboutUsMobile/aboutUsDecor.svg'

export default function AboutUsHeading() {
    return (
        <h1 className={styles.heading}>
            <Image src={arrow} alt='arrow decoration'/>
            <p>About Us</p>
            <Image src={arrow} alt='arrow decoration'/>
        </h1>
    )
}