import styles from './landing.module.scss'

import Test from "@/components/TestComponent";
import LandingBackdrop from '@/components/Landing/Backdrop/Backdrop';
// import FluidBackground from '@/components/Landing/Backdrop/FluidBackground';
import FluidBackground from '@/components/Landing/Backdrop/FluidBackground';

export default function Home() {
  return (
    <main className={styles.page}>
      <FluidBackground />
      {/* <LandingBackdrop /> */}
      <div style={{ pointerEvents: 'none', position: 'absolute', top: 0 }}>
        <h1 className={styles.mainTitle}>Oasis 2024</h1>
      </div>
    </main>
  );
}
