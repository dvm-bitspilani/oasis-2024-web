import styles from "./preloader.module.scss";

export default function Preloader() {
  return (
    <div className={styles.preloader}>
      <h1>Loading...</h1>
    </div>
  );
}
