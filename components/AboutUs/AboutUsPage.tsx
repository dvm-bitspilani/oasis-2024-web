import styles from "./page.module.scss";
import Spades from "./Spades/Spades";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutUs} id="aboutUs">
      <div className={styles.container}>
        <div className={styles.top}>
          <Spades className={`${styles.spade}`} />
          <h1 className={styles.title}>ABOUT US</h1>
          <Spades className={`${styles.spade}`} />
          
        </div>
        <div className={styles.middle}>
          <p className={styles.text}>
            Oasis, the annual cultural extravaganza of Birla Institute of
            Technology and Science, Pilani, has been a vibrant part of
            India&#39;s cultural tapestry since 1971. Managed entirely by
            students, it&#39;s a dazzling showcase of talent in Dance, Drama,
            Literature, Comedy, Fashion, and Music. It&#39;s where dreams come
            alive, laughter fills the air, and creativity knows no bounds. Step
            into the world of Oasis, where youth&#39;s boundless potential
            shines.
          </p>
        </div>
        <div className={styles.rightframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="300"
            viewBox="0 0 33 300"
            fill="none"
          >
            <path
              d="M20.7237 285.287C22.3538 281.829 20.7077 270.806 9.4533 271.003C0.34128 272.507 -5.07567 290.603 13.4423 297.74C21.7318 300.599 32.8767 293.716 31.9276 277.908L31.9276 0"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="69"
            viewBox="0 0 33 69"
            fill="none"
          >
            <path
              d="M31.848 47.2801C32.7971 63.0881 21.6522 69.9712 13.3627 67.1112C-5.15526 59.9746 0.26169 41.8783 9.37371 40.3746C20.6281 40.1775 22.2742 50.2012 20.6441 53.6591C19.2839 56.5445 13.3963 59.8057 10.5973 52.8342M10.5973 15.9092C13.3963 8.93773 19.2839 12.199 20.6441 15.0844C22.2742 18.5423 20.6281 28.566 9.37371 28.3689C0.26169 26.8652 -5.15526 8.76889 13.3627 1.63224C21.6522 -1.22771 32.7971 5.6554 31.848 21.4634L31.848 47.5006"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="323"
            viewBox="0 0 34 323"
            fill="none"
          >
            <path
              d="M21.2237 15.0842C22.8538 18.5421 21.2077 28.5659 9.9533 28.3687C0.84128 26.865 -4.57567 8.76873 13.9423 1.63208C22.2318 -1.22787 33.3767 5.65524 32.4276 21.4633L32.4276 322.372"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
        </div>
        <div className={styles.leftframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="300"
            viewBox="0 0 33 300"
            fill="none"
          >
            <path
              d="M20.7237 285.287C22.3538 281.829 20.7077 270.806 9.4533 271.003C0.34128 272.507 -5.07567 290.603 13.4423 297.74C21.7318 300.599 32.8767 293.716 31.9276 277.908L31.9276 0"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="33"
            height="69"
            viewBox="0 0 33 69"
            fill="none"
          >
            <path
              d="M31.848 47.2801C32.7971 63.0881 21.6522 69.9712 13.3627 67.1112C-5.15526 59.9746 0.26169 41.8783 9.37371 40.3746C20.6281 40.1775 22.2742 50.2012 20.6441 53.6591C19.2839 56.5445 13.3963 59.8057 10.5973 52.8342M10.5973 15.9092C13.3963 8.93773 19.2839 12.199 20.6441 15.0844C22.2742 18.5423 20.6281 28.566 9.37371 28.3689C0.26169 26.8652 -5.15526 8.76889 13.3627 1.63224C21.6522 -1.22771 32.7971 5.6554 31.848 21.4634L31.848 47.5006"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="34"
            height="323"
            viewBox="0 0 34 323"
            fill="none"
          >
            <path
              d="M21.2237 15.0842C22.8538 18.5421 21.2077 28.5659 9.9533 28.3687C0.84128 26.865 -4.57567 8.76873 13.9423 1.63208C22.2318 -1.22787 33.3767 5.65524 32.4276 21.4633L32.4276 322.372"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
        </div>
        <div className={styles.toprightframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="167"
            height="26"
            viewBox="0 0 167 26"
            fill="none"
          >
            <path
              d="M166.927 25C158.952 25.3333 143 21 143 1L71.4999 1C43.5774 1 27.9224 1 -7.62939e-05 1"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
        </div>
        <div className={styles.topleftframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="167"
            height="26"
            viewBox="0 0 167 26"
            fill="none"
          >
            <path
              d="M166.927 25C158.952 25.3333 143 21 143 1L71.4999 1C43.5774 1 27.9224 1 -7.62939e-05 1"
              stroke="#E5C66C"
              stroke-width="1.58383"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
