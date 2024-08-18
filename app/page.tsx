import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import Glow from '@/components/Landing/Glow/Glow';
import Landing from '@/components/Landing/Landing/Landing';
import Trees from '@/components/Landing/Trees/Trees';
import LandingOverlay from '@/components/Landing/LandingOverlay/LandingOverlay';

export default function Home() {
  return (
    <main className={styles.scrollWrapper}>
      <main className={styles.page}>
        <Landing />
        <LandingOverlay />
        <Glow />
        <Trees />
        <Grunge />
      </main>
    </main>
  );
}