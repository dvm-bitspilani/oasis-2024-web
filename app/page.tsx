import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import Glow from '@/components/Landing/Glow/Glow';
import Landing from '@/components/Landing/Landing/Landing';
import Trees from '@/components/Landing/Trees/Trees';
import LandingOverlay from '@/components/Landing/LandingOverlay/LandingOverlay';
import Countdown from '@/components/Landing/Countdown/Countdown';

export default function Home() {
  return (
    <main className={styles.scrollWrapper}>
      <main className={styles.page}>
        <Landing />
        <LandingOverlay />
        <Countdown dateString='December 1, 2024 03:24:00' />
        <Glow />
        <Trees />
        <Grunge />
      </main>
    </main>
  );
}