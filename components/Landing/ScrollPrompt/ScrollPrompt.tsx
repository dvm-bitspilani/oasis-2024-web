import styles from './scrollPrompt.module.scss'
import Image from "next/image";

import mouseIcon from '@/assets/Landing/scroll-icon.svg'
import downArrow from '@/assets/Landing/down-arrows.svg'

export default function ScrollPrompt() {
    return (
        <div className={`${styles.scrollPrompt} desktopBottomScroll`}>
            <span>
                <Image src={mouseIcon} alt='scroll prompt mouse icon'/>
                <p>Scroll to See More</p>
            </span>
            <Image src={downArrow} alt='scroll prompt arrows icon'/>
        </div>
    )
}