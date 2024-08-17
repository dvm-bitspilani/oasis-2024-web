import styles from './overlay.module.scss'

import { Scroll } from "@react-three/drei";
import Image from "next/image";

import oasisLogo from '@/assets/Landing/oasislogo.png'
import LandingPage from '../LandingPage/LandingPage';

export default function LandingOverlay() {
    return (
        <Scroll html>
            <main className={styles.wrapper}>
                <LandingPage />
            </main>
        </Scroll>
    )
}