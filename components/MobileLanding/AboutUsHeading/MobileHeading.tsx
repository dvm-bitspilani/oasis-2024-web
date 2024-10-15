import styles from "./aboutUs.module.scss";
import Image from "next/image";

import arrow from "@/assets/MobileLanding/AboutUsMobile/aboutUsDecor.svg";

interface Props {
  text: string;
  showArrows: boolean;
  style: any;
  textStyles: any;
}

export default function MobileHeading({
  text,
  showArrows,
  style,
  textStyles,
}: Props) {
  return (
    <h1 className={styles.heading} style={style}>
      {showArrows ? <Image src={arrow} alt="arrow decoration" /> : null}
      <p style={textStyles}>{text}</p>
      {showArrows ? <Image src={arrow} alt="arrow decoration" /> : null}
    </h1>
  );
}
