import styles from "./landing.module.scss";

import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import Landing from "@/components/Landing/Landing/Landing";
import Trees from "@/components/Landing/Trees/Trees";
import LandingOverlay from "@/components/Landing/LandingOverlay/LandingOverlay";
import Grid from "@/components/Landing/Grid/Grid";
import OasisLogo from "@/components/Landing/Navbar/Logo/Logo";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import Nav from "@/components/Nav/Nav";

export default function Home() {
  return (
    <>
      <div className={styles.navTickets} id="tickets-container">
        <Nav />
      </div>
      <PrePreloader />
      <main className={styles.scrollWrapper} id="scrollWrapper">
        <main className={styles.page}>
          <OasisLogo />
          <Landing />
          <LandingOverlay />
          <Grid />
          <Glow />
          <Trees />
          <Grunge />
        </main>
      </main>
    </>
  );
}
