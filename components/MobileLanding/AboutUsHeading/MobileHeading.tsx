import styles from './aboutUs.module.scss'
import Image from "next/image";

import arrow from '@/assets/MobileLanding/AboutUsMobile/aboutUsDecor.svg'

interface Props {
    text: string;
    showArrows: boolean;
    style: any
}

export default function MobileHeading({text, showArrows, style}: Props) {
    return (
        <h1 className={styles.heading} style={style}>
            {showArrows ? <Image src={arrow} alt='arrow decoration'/> : null}
            <p>{text}</p>
            {showArrows ? <Image src={arrow} alt='arrow decoration'/> : null}
        </h1>
    )
}