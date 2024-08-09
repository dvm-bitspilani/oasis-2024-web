import React from "react";
import styles from "./registration.module.scss";

import Image from "next/image";

const Registration = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <svg
          width="558"
          height="349"
          viewBox="0 0 558 349"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M1.05688 348.5L1.05688 77M90.5002 10L544 10"
            stroke="#F5E3AE"
            stroke-width="1.58383"
          />
          <circle cx="548" cy="10" r="10" fill="#F9DA7F" />
        </svg>
        <span className={styles.registration}>REGISTRATION</span>
        <svg
          width="567"
          height="915"
          viewBox="0 0 567 915"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M556.847 474.652C557.797 490.46 546.652 497.343 538.362 494.483C519.844 487.346 525.261 469.25 534.373 467.746C545.628 467.549 547.274 477.573 545.644 481.031C544.283 483.916 538.396 487.177 535.597 480.206M535.597 443.281C538.396 436.309 544.283 439.571 545.644 442.456C547.274 445.914 545.628 455.938 534.373 455.74C525.261 454.237 519.844 436.14 538.362 429.004C546.652 426.144 557.797 433.027 556.847 448.835V474.872"
            stroke="#F5E3AE"
            stroke-width="1.58383"
          />
          <path
            d="M545.724 410.287C547.354 406.829 545.708 396.806 534.453 397.003C525.341 398.507 519.924 416.603 538.442 423.74C546.732 426.599 557.877 419.716 556.928 403.908L556.928 34C548.952 34.3333 533 30 533 10L10.5 10"
            stroke="#F5E3AE"
            stroke-width="1.58383"
          />
          <circle cx="557" cy="10" r="10" fill="#F9DA7F" />
          <circle cx="10" cy="10" r="10" fill="#F9DA7F" />
          <path
            d="M545.724 513.084C547.354 516.542 545.708 526.566 534.453 526.369C525.341 524.865 519.924 506.769 538.442 499.632C546.732 496.772 557.877 503.655 556.928 519.463L556.928 889.372C548.952 889.038 533 893.372 533 913.372H385"
            stroke="#F5E3AE"
            stroke-width="1.58383"
          />
        </svg>
        <div className={styles.formContainer}></div>
      </div>
      <div className={styles.rouletteWheel}>
        <Image src="/rouletteImg.png" alt="" width={108} height={108} />
      </div>
    </div>
  );
};

export default Registration;
