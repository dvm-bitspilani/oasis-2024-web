import styles from './overlay.module.scss'

import { Scroll } from "@react-three/drei";
import Image from "next/image";

import oasisLogo from '@/assets/Landing/oasislogo.png'

export default function LandingOverlay() {
    return (
        <Scroll html>
            <main className={styles.wrapper}>
                <Image
                    src={oasisLogo}
                    alt="oasis logo"
                />
            </main>
        </Scroll>
    )
}