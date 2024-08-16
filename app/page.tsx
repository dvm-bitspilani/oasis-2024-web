import AboutUsPage from '@/components/AboutUs/AboutUsPage';
import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import LandingPage from '@/components/Landing/LandingPage/LandingPage';

export default function Home() {
  return (
    <main className={styles.page}>
      <div className={styles.overlay}>
        <LandingPage />
        <AboutUsPage />
      </div>
      <Grunge />
    </main>
  );
}