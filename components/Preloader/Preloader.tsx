import styles from "./preloader.module.scss";

export default function Preloader({ ...props }) {
  return (
    <div className={styles.preloader} {...props}>
      <h1>Loading...</h1>
    </div>
  );
}
