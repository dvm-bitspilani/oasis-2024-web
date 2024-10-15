import styles from './btn.module.scss'

import Link from "next/link";
import Image from "next/image"
import {sendGAEvent} from "@next/third-parties/google";

import btnImage from '@/assets/Landing/RegBtn.png'

export default function MobileRegBtn() {
    return (
        <Link
            href="/Registration"
            onClick={() => sendGAEvent("event", "Home-regbutton", {value: 1})}
            className={styles.btn}
        >
            <Image
                src={btnImage}
                alt='Registration button'
            />
        </Link>
    )
}