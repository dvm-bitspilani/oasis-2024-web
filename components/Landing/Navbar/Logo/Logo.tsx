import styles from "./logo.module.scss";

import Image from "next/image";

export default function OasisLogo() {
    const logoHeight = 150
    const logoAspectRatio = 671/199

  return (
    <div className={styles.logo}>
      <Image
      id="oasisLogo"
        src="/oasislogo.png"
        alt="oasis logo landing"
        width={logoAspectRatio * logoHeight}
        height={logoHeight}
      />
    </div>
  );
}
