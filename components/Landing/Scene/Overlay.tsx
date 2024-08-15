import styles from './overlay.module.scss'

import { Scroll } from "@react-three/drei";
import Image from "next/image";

import oasisLogo from '@/assets/Landing/oasislogo.png'

export default function LandingOverlay() {
    return (
        <Scroll html>
            <main className={styles.wrapper}>
                <div className={styles.imageWrapper}>
                    <Image
                        src={oasisLogo}
                        alt="oasis logo"
                    />
                </div>
            </main>
        </Scroll>
    )
}