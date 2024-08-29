import styles from "./page.module.scss";
import Spades from "./Spades/Spades";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutUs} id="aboutUs">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.topFrame}>
            <div className={styles.topRightCurve}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9431 24C16.9673 24.3333 1.01555 20 1.01555 0"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.bottomRightCurve}>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9434 1.37158C16.9675 1.03825 1.01579 5.37158 1.01579 25.3716"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.bottomLeftCurve}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.37158C8.97586 1.03825 24.9276 5.37158 24.9276 25.3716"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.topLeftCurve}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0568848 24C8.03274 24.3333 23.9845 20 23.9845 0"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
          </div>
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
          <div className={styles.middleFrame}>
            <div className={styles.borderTop}>
              <svg
                width="847"
                height="2"
                viewBox="0 0 847 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M846.75 1L775.224 1C747.292 1 27.9325 1 -4.87833e-05 1"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.borderRight}>
              <svg
                width="34"
                height="538"
                viewBox="0 0 34 538"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.4432 283.28C33.3924 299.088 22.2474 305.971 13.9579 303.111C-4.56004 295.975 0.856905 277.878 9.96892 276.375C21.2233 276.177 22.8694 286.201 21.2393 289.659C19.8791 292.545 13.9915 295.806 11.1925 288.834M11.1925 251.909C13.9915 244.938 19.8791 248.199 21.2393 251.084C22.8694 254.542 21.2233 264.566 9.96892 264.369C0.856905 262.865 -4.56004 244.769 13.9579 237.632C22.2474 234.772 33.3924 241.655 32.4432 257.463V283.501"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
                <path
                  d="M21.2393 222.287C22.8694 218.829 21.2233 207.805 9.96892 208.003C0.856905 209.506 -4.56004 227.603 13.9579 234.739C22.2474 237.599 33.3924 229.716 32.4432 213.908L32.4432 -0.000244141"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
                <path
                  d="M21.2393 320.084C22.8694 323.542 21.2233 333.566 9.96893 333.369C0.856907 331.865 -4.56004 313.769 13.9579 306.632C22.2474 303.772 33.3924 310.655 32.4432 326.464L32.4432 537.151"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.borderLeft}>
              <svg
                width="33"
                height="538"
                viewBox="0 0 33 538"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.05689 283.28C0.107734 299.088 11.2527 305.971 19.5422 303.111C38.0601 295.975 32.6432 277.878 23.5312 276.375C12.2768 276.177 10.6307 286.201 12.2608 289.659C13.621 292.545 19.5086 295.806 22.3076 288.834M1.05689 283.28V257.463C0.107734 241.655 11.2527 234.772 19.5422 237.632C38.0601 244.769 32.6432 262.865 23.5312 264.369C12.2768 264.566 10.6307 254.542 12.2608 251.084C13.621 248.199 19.5086 244.938 22.3076 251.909M1.05689 283.28V283.501M12.2608 222.287C10.6307 218.829 12.2768 207.806 23.5312 208.003C32.6432 209.507 38.0601 227.603 19.5422 234.74C11.2527 237.599 0.107734 229.716 1.05689 213.908V0M12.2608 320.084C10.6307 323.542 12.2768 333.566 23.5312 333.369C32.6432 331.865 38.0601 313.769 19.5422 306.632C11.2527 303.772 0.107734 310.655 1.05689 326.464V537.151"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.borderBottom}>
              <svg
                width="848"
                height="33"
                viewBox="0 0 848 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M418.731 32.1356C402.923 33.0847 396.04 21.9398 398.9 13.6503C406.036 -4.86766 424.132 0.54929 425.636 9.66131C425.833 20.9157 415.81 22.5618 412.352 20.9317C409.466 19.5715 406.205 13.6839 413.177 10.8849M418.731 32.1356H444.547C460.355 33.0847 467.239 21.9398 464.379 13.6503C457.242 -4.86766 439.146 0.54929 437.642 9.66131C437.445 20.9157 447.469 22.5618 450.926 20.9317C453.812 19.5715 457.073 13.6839 450.102 10.8849M418.731 32.1356H418.51M483.078 20.644C486.536 22.2741 496.56 20.628 496.362 9.37362C494.859 0.261605 476.762 -5.15534 469.626 13.3626C466.766 21.6521 473.649 32.7971 489.457 31.8479H847.611M380.606 20.9318C377.148 22.5619 367.124 20.9158 367.321 9.66147C368.825 0.549447 386.921 -4.8675 394.058 13.6504C396.918 21.94 390.035 33.0849 374.227 32.1357H0.000113139"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.topRightCurve}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9431 24C16.9673 24.3333 1.01555 20 1.01555 0"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.bottomRightCurve}>
              <svg
                width="25"
                height="26"
                viewBox="0 0 25 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M24.9434 1.37158C16.9675 1.03825 1.01579 5.37158 1.01579 25.3716"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.bottomLeftCurve}>
              <svg
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1 1.37158C8.97586 1.03825 24.9276 5.37158 24.9276 25.3716"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
            <div className={styles.topLeftCurve}>
              <svg
                width="25"
                height="25"
                viewBox="0 0 25 25"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.0568848 24C8.03274 24.3333 23.9845 20 23.9845 0"
                  stroke="#E5C66C"
                  stroke-width="1.58383"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
