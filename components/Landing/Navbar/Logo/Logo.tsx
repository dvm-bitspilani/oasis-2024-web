import styles from "./logo.module.scss";

import Image from "next/image";

export default function OasisLogo() {
  return (
    <div className={styles.logo}>
      <Image
      id="oasisLogo"
        src="/oasislogo.png"
        alt="oasis logo landing"
        width={560}
        height={205}
      />
    </div>
  );
}
