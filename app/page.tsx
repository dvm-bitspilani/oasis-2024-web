import styles from "./landing.module.scss";

import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import Landing from "@/components/Landing/Landing/Landing";
import Trees from "@/components/Landing/Trees/Trees";
import LandingOverlay from "@/components/Landing/LandingOverlay/LandingOverlay";
import Countdown from "@/components/Landing/Countdown/Countdown";
import Grid from "@/components/Landing/Grid/Grid";

export default function Home() {
  return (
    <main className={styles.scrollWrapper} id="scrollWrapper">
      <main className={styles.page}>
        <Landing />
        <LandingOverlay />
        <Countdown dateString="October 23, 2024 19:00:00" />
        <Grid />
        <Glow />
        <Trees />
        <Grunge />
      </main>
    </main>
  );
}
