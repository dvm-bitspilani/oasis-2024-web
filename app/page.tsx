import AboutUsPage from '@/components/AboutUs/AboutUsPage';
import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import LandingPage from '@/components/Landing/LandingPage/LandingPage';
import LandingScene from '@/components/Landing/Scene/Scene';

export default function Home() {
  return (
    <main className={styles.page}>
      <LandingScene />
      <div className={styles.overlay}>
        {/* <LandingPage /> */}
        {/* <AboutUsPage /> */}
      </div>
      <Grunge />
    </main>
  );
}