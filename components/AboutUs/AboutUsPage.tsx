import styles from "./page.module.scss";
import Spades from "./Spades/Spades";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutUs} id="aboutUs">
      <div className={styles.top}>
        <Spades className={`${styles.spade}`} />
        <h1 className={styles.title}>ABOUT US</h1>
        <Spades className={`${styles.spade}`} />
      </div>
      <div className={styles.middle}>
        <p className={styles.text}>
          Oasis, the annual cultural extravaganza of Birla Institute of
          Technology and Science, Pilani, has been a vibrant part of India&#39;s
          cultural tapestry since 1971. Managed entirely by students, it&#39;s a
          dazzling showcase of talent in Dance, Drama, Literature, Comedy,
          Fashion, and Music. It&#39;s where dreams come alive, laughter fills
          the air, and creativity knows no bounds. Step into the world of Oasis,
          where youth&#39;s boundless potential shines.
        </p>
      </div>
      <div className={styles.bottom}></div>
    </main>
  );
}
