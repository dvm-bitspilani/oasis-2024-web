import styles from './landing.module.scss'

import Grunge from '@/components/Landing/Backdrop/Grunge';
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