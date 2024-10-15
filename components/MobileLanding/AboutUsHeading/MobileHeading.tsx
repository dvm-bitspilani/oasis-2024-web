import styles from './aboutUs.module.scss'
import Image from "next/image";

import arrow from '@/assets/MobileLanding/AboutUsMobile/aboutUsDecor.svg'

interface Props {
    text: string;
    showArrows: boolean;
}

export default function MobileHeading({text, showArrows}: Props) {
    return (
        <h1 className={styles.heading}>
            {showArrows ? <Image src={arrow} alt='arrow decoration'/> : null}
            <p>{text}</p>
            {showArrows ? <Image src={arrow} alt='arrow decoration'/> : null}
        </h1>
    )
}