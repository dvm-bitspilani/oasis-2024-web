import styles from './landing.module.scss'

import LandingBackdrop from '@/components/Landing/Backdrop/Backdrop';
import Grunge from '@/components/Landing/Backdrop/Grunge';
import LandingPage from '@/components/Landing/LandingPage/LandingPage';
import LandingScene from '@/components/Landing/Scene/Scene';

export default function Home() {
  return (
    <main className={styles.page}>
      {/* <LandingBackdrop /> */}
      {/* <LandingScene /> */}
      <div className={styles.overlay}>
        <LandingPage />
      </div>
      <Grunge />
    </main>
  );
}