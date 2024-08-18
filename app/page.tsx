import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import Landing from '@/components/Landing/Landing/Landing';
import LandingOverlay from '@/components/Landing/LandingOverlay/LandingOverlay';

export default function Home() {
  return (
    <main className={styles.scrollWrapper}>
      <main className={styles.page}>
        <Landing />
        <LandingOverlay />
        <Grunge />
      </main>
    </main>
  );
}