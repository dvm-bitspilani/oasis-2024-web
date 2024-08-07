import styles from './landing.module.scss'

import Test from "@/components/TestComponent";

export default function Home() {
  return (
    <>
      <h1 className={styles.mainTitle}>Oasis 2024</h1>
      <Test />
    </>
  );
}
