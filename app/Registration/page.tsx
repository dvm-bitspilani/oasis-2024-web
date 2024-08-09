import React from "react";
import styles from "./registration.module.scss";

import Image from "next/image";

const Registration = () => {
  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        hello
      </div>
      <div className={styles.rouletteWheel}>
        <Image src="/rouletteImg.png" alt="" width={108} height={108} />
      </div>
    </div>
  );
};

export default Registration;
