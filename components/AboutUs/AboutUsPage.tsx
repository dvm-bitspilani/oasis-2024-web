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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
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
              strokeWidth="1.58383"
            />
          </svg>
        </div>
      </div>
      <div className={styles.bottom}>
        <div className={styles.bottomleftframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M1 1.01733C8.97586 0.684001 24.9276 5.01733 24.9276 25.0173"
              stroke="#E5C66C"
              strokeWidth="1.58383"
            />
          </svg>
        </div>
        <div className={styles.bottomframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="396"
            height="33"
            viewBox="0 0 396 33"
            fill="none"
          >
            <path
              d="M380.606 20.9318C377.148 22.5619 367.124 20.9158 367.321 9.66147C368.825 0.549447 386.921 -4.8675 394.058 13.6504C396.918 21.94 390.035 33.0849 374.227 32.1357H0"
              stroke="#E5C66C"
              strokeWidth="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="69"
            height="33"
            viewBox="0 0 69 33"
            fill="none"
          >
            <path
              d="M21.7307 32.1355C5.92273 33.0846 -0.960377 21.9397 1.89957 13.6502C9.03622 -4.86775 27.1325 0.549203 28.6362 9.66122C28.8334 20.9156 18.8096 22.5617 15.3517 20.9316C12.4663 19.5714 9.20506 13.6838 16.1766 10.8848M21.7307 32.1355H47.5474C63.3554 33.0846 70.2385 21.9397 67.3786 13.6502C60.2419 -4.86775 42.1456 0.549203 40.6419 9.66122C40.4448 20.9156 50.4685 22.5617 53.9265 20.9316C56.8119 19.5714 60.0731 13.6838 53.1016 10.8848M21.7307 32.1355H21.5102"
              stroke="#E5C66C"
              strokeWidth="1.58383"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="380"
            height="33"
            viewBox="0 0 380 33"
            fill="none"
          >
            <path
              d="M15.078 20.644C18.5359 22.2741 28.5597 20.628 28.3625 9.37362C26.8588 0.261605 8.76255 -5.15534 1.62589 13.3626C-1.23406 21.6521 5.64905 32.7971 21.4571 31.8479H379.611"
              stroke="#E5C66C"
              strokeWidth="1.58383"
            />
          </svg>
        </div>
        <div className={styles.bottomrightframe}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
            viewBox="0 0 26 26"
            fill="none"
          >
            <path
              d="M1 1.01733C8.97586 0.684001 24.9276 5.01733 24.9276 25.0173"
              stroke="#E5C66C"
              strokeWidth="1.58383"
            />
          </svg>
        </div>
      </div>
    </main>
  );
}
