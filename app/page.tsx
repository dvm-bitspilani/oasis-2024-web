import styles from "./landing.module.scss";

import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import Landing from "@/components/Landing/Landing/Landing";
import Trees from "@/components/Landing/Trees/Trees";
import LandingOverlay from "@/components/Landing/LandingOverlay/LandingOverlay";
import Grid from "@/components/Landing/Grid/Grid";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import Nav from "@/components/Nav/Nav";
import HamBtn from "@/components/Landing/Navbar/HamBtn/Btn";
import CursorEffect from "@/components/CursorEffect/CursorEffect";
import OasisLogo from "@/components/Landing/Navbar/Logo/Logo";
import Countdown from "@/components/Landing/Countdown/Countdown";
import MobileLanding from "@/components/MobileLanding/MobileLanding/MobileLanding";

export default function Home() {
    return (
        <>
            <PrePreloader/>
            <CursorEffect/>
            <div className={styles.hamBtn} id="hamBtn">
                <HamBtn/>
            </div>
            <div className={styles.navTickets} id="tickets-container">
                <Nav/>
            </div>
            <main className={styles.scrollWrapper} id="scrollWrapper">
                <main className={styles.desktopPage}>
                    <Landing/>
                    <LandingOverlay/>
                    <Grid/>
                    <Glow/>
                    <Trees/>
                    <Grunge/>
                </main>
                <main className={styles.mobilePage}>
                    <OasisLogo/>
                    <Countdown dateString="October 23, 2024 19:00:00"/>
                    <MobileLanding/>
                    <div className={styles.mobileBackdrop}>
                        <Grid/>
                        <Glow/>
                        <Grunge/>
                    </div>
                </main>
            </main>
            {/*<AmbientMusic/>*/}
        </>
    );
}
