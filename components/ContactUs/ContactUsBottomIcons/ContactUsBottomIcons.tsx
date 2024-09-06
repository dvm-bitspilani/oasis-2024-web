import styles from "./bottomIcons.module.scss";

import Image from "next/image";

import left from "@/assets/Landing/contactUs/left.png";
import right from "@/assets/Landing/contactUs/right.png";

export default function ContactUsBottomIcons() {
  return (
    <>
      <Image
        src={left}
        alt="animation"
        className={styles.bottomAnimation}
        draggable={false}
      />
      <Image
        src={right}
        alt="animation"
        className={styles.bottomAnimation}
        draggable={false}
      />
    </>
  );
}
