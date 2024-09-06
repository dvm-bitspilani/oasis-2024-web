"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./btn.module.scss";
import HamPokerChip from "./PokerChip";
import MenuLines from "./MenuLines";

export default function HamBtn() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  const BtnRef = useRef(null);
  const pokerChipRef = useRef(null);
  const handleClick = () => {
    setIsHamOpen(!isHamOpen);
    animation();
  };

  const animation = () => {
    const tl = gsap.timeline();
    if (isHamOpen) {
      tl.to(BtnRef.current, {
        y: "0",
        duration: 0.5,
        scale: 1,
      }).to(
        pokerChipRef.current,
        {
          rotate: 0,
          duration: 0.5,
          ease: "none",
        },
        "<"
      );
    } else {
      tl.to(BtnRef.current, {
        y: `${window.innerHeight / 2 - 50}`,
        duration: 0.5,
        scale: 8.9,
      }).to(
        pokerChipRef.current,
        {
          rotate: 180,
          duration: 1,
          ease: "none",
        },
        "<"
      );
    }
  };

  return (
    <div className={styles.btn} onClick={handleClick} ref={BtnRef}>
      {isHamOpen && <div className={styles.hamOverlay} />}
      <HamPokerChip
        ref={pokerChipRef}
        svgClass={styles.pokerChip}
        isHamOpen={isHamOpen}
      />
      <div className={styles.hamIcon}>
        <MenuLines svgClass={styles.menuLines} />
      </div>
    </div>
  );
}
