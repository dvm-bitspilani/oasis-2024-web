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
                strokeWidth="1.58383"
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
                strokeWidth="1.58383"
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
                strokeWidth="1.58383"
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
                strokeWidth="1.58383"
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
              {/* <svg
                width="847"
                height="2"
                viewBox="0 0 847 2"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M846.75 1L775.224 1C747.292 1 27.9325 1 -4.87833e-05 1"
                  stroke="#E5C66C"
                  strokeWidth="1.58383"
                />
              </svg> */}
            </div>
            <div className={styles.borderRight}>
              <svg
                width="33"
                height="1298"
                viewBox="0 0 33 1298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M32.1356 662.269C33.0847 678.077 21.9398 684.96 13.6503 682.1C-4.86766 674.964 0.54929 656.867 9.66131 655.364C20.9157 655.167 22.5618 665.19 20.9317 668.648C19.5715 671.534 13.6839 674.795 10.8849 667.823M32.1356 662.269L32.1356 636.453C33.0847 620.645 21.9398 613.762 13.6503 616.621C-4.86766 623.758 0.54929 641.854 9.66131 643.358C20.9157 643.555 22.5618 633.531 20.9317 630.074C19.5715 627.188 13.6839 623.927 10.8849 630.898M32.1356 662.269V662.49M20.644 597.922C22.2741 594.464 20.628 584.44 9.37362 584.638C0.261605 586.141 -5.15534 604.238 13.3626 611.374C21.6521 614.234 32.7971 607.351 31.8479 591.543L31.8479 -0.00012207M20.644 700.084C22.2741 703.542 20.628 713.566 9.37362 713.369C0.261605 711.865 -5.15534 693.769 13.3626 686.632C21.6521 683.772 32.7971 690.655 31.8479 706.463L31.8479 1298.01"
                  stroke="#E5C66C"
                  strokeWidth="1.58383"
                />
              </svg>
            </div>
            <div className={styles.borderLeft}>
              <svg
                width="33"
                height="1298"
                viewBox="0 0 33 1298"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M1.05681 662.269C0.107652 678.077 11.2526 684.96 19.5421 682.1C38.06 674.964 32.6431 656.867 23.5311 655.364C12.2767 655.167 10.6306 665.19 12.2607 668.648C13.6209 671.534 19.5085 674.795 22.3075 667.823M1.05681 662.269L1.05681 636.453C0.107652 620.645 11.2526 613.762 19.5421 616.621C38.06 623.758 32.6431 641.854 23.5311 643.358C12.2767 643.555 10.6306 633.531 12.2607 630.074C13.6209 627.188 19.5085 623.927 22.3075 630.898M1.05681 662.269V662.49M12.5484 597.922C10.9183 594.464 12.5644 584.44 23.8188 584.638C32.9308 586.141 38.3477 604.238 19.8298 611.374C11.5403 614.234 0.395331 607.351 1.34449 591.543L1.34449 -0.00012207M12.5484 700.084C10.9183 703.542 12.5644 713.566 23.8188 713.369C32.9308 711.865 38.3477 693.769 19.8298 686.632C11.5403 683.772 0.395332 690.655 1.34449 706.463L1.34449 1298.01"
                  stroke="#E5C66C"
                  strokeWidth="1.58383"
                />
              </svg>
            </div>
            <div className={styles.borderMiddleBottom}>
              <svg
                width="1298"
                height="33"
                viewBox="0 0 1298 33"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M635.737 32.1356C619.929 33.0847 613.046 21.9398 615.906 13.6503C623.043 -4.86766 641.139 0.54929 642.643 9.66131C642.84 20.9157 632.816 22.5618 629.358 20.9317C626.473 19.5715 623.211 13.6839 630.183 10.8849M635.737 32.1356H661.554C677.362 33.0847 684.245 21.9398 681.385 13.6503C674.248 -4.86766 656.152 0.54929 654.648 9.66131C654.451 20.9157 664.475 22.5618 667.933 20.9317C670.818 19.5715 674.079 13.6839 667.108 10.8849M635.737 32.1356H635.517M700.084 20.644C703.542 22.2741 713.566 20.628 713.369 9.37362C711.865 0.261605 693.769 -5.15534 686.632 13.3626C683.772 21.6521 690.655 32.7971 706.463 31.8479H1298.01M597.922 20.644C594.464 22.2741 584.441 20.628 584.638 9.37362C586.141 0.261605 604.238 -5.15534 611.374 13.3626C614.234 21.6521 607.351 32.7971 591.543 31.8479H0"
                  stroke="#E5C66C"
                  strokeWidth="1.58383"
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
                  strokeWidth="1.58383"
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
                  strokeWidth="1.58383"
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
                  strokeWidth="1.58383"
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
                  strokeWidth="1.58383"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
