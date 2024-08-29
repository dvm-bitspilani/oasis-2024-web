import styles from "./page.module.scss";
import Spades from "./Spades/Spades";

export default function AboutUsPage() {
  return (
    <main className={styles.aboutUs} id="aboutUs">
      <div className={styles.container}>
        <div className={styles.top}>
          <div className={styles.borderTop}></div>
          <div className={styles.borderLeft}></div>
          <div className={styles.borderRight}></div>
          <div className={styles.borderBottom}></div>
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
                  d="M418.912 32.1358C403.104 33.085 396.221 21.94 399.081 13.6505C406.218 -4.86741 424.314 0.549534 425.818 9.66155C426.015 20.9159 415.991 22.562 412.533 20.9319C409.648 19.5717 406.387 13.6842 413.358 10.8852M418.912 32.1358H444.729C460.537 33.085 467.42 21.94 464.56 13.6505C457.424 -4.86741 439.327 0.549534 437.824 9.66155C437.626 20.9159 447.65 22.562 451.108 20.9319C453.993 19.5717 457.255 13.6842 450.283 10.8852M418.912 32.1358H418.692M483.26 20.6442C486.717 22.2743 496.741 20.6282 496.544 9.37387C495.04 0.261849 476.944 -5.1551 469.807 13.3628C466.947 21.6524 473.831 32.7973 489.639 31.8481H847.792M380.787 20.9321C377.33 22.5622 367.306 20.9161 367.503 9.66171C369.007 0.549691 387.103 -4.86726 394.24 13.6507C397.1 21.9402 390.216 33.0851 374.408 32.136H0.181754"
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
