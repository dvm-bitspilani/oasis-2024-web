"use client";

import styles from './btn.module.scss'

import Link from "next/link";
import {useRegistrationClosed} from "@/components/Experience/Experience";
import Image from "next/image"

import btnImage from '@/assets/Landing/RegBtn.png'

export default function MobileRegBtn() {
    const open = useRegistrationClosed();
    return (
        <Link prefetch={false}
            href="/Registration"
            onClick={event => { event.preventDefault(); open(); }}
            className={styles.btn}
        >
            <Image
                src={btnImage}
                alt='Registration button'
            />
        </Link>
    )
}