import styles from "./landing.module.scss";

import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import Landing from "@/components/Landing/Landing/Landing";
import Trees from "@/components/Landing/Trees/Trees";
import LandingOverlay from "@/components/Landing/LandingOverlay/LandingOverlay";
import Grid from "@/components/Landing/Grid/Grid";
import OasisLogo from "@/components/Landing/Navbar/Logo/Logo";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";

export default function Home() {
  return (
    <>
      <main className={styles.scrollWrapper} id="scrollWrapper">
        <main className={styles.page}>
          <PrePreloader />
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
