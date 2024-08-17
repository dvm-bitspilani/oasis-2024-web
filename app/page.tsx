import AboutUsPage from '@/components/AboutUs/AboutUsPage';
import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
import LandingPage from '@/components/Landing/LandingPage/LandingPage';
import LandingScene from '@/components/Landing/Scene/Scene';
import Landing from '@/components/Landing/Landing/Landing';

export default function Home() {
  return (
    <main className={styles.scrollWrapper}>
      <main className={styles.page}>
        <Landing />
        <Grunge />
      </main>
    </main>
  );
}