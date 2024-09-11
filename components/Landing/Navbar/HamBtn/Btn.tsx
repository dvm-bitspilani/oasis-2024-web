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
  const hamIconRef = useRef(null);
  const handleClick = () => {
    return;
    // setIsHamOpen(!isHamOpen);
    // animation();
  };

  const animation = () => {
    const tl = gsap.timeline();
    if (isHamOpen) {
      tl.to(BtnRef.current, {
        y: "0",
        duration: 0.5,
        scale: 1,
      })
        .to(
          pokerChipRef.current,
          {
            rotate: 0,
            duration: 0.5,
            ease: "none",
          },
          "<"
        )
        .to(
          hamIconRef.current,
          {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          hamIconRef.current,
          {
            opacity: 1,
            delay: 0.05,
            duration: 0.1,
            ease: "power2.in",
          },
          "<"
        );
    } else {
      tl.to(BtnRef.current, {
        y: `${window.innerHeight / 2 - 50}`,
        duration: 0.5,
        scale: 8.9,
      })
        .to(
          pokerChipRef.current,
          {
            rotate: 135,
            duration: 1,
            ease: "none",
          },
          "<"
        )
        .to(
          hamIconRef.current,
          {
            opacity: 0,
            duration: 0.1,
            ease: "power2.out",
          },
          "<"
        )
        .to(
          hamIconRef.current,
          {
            opacity: 1,
            delay: 0.05,
            duration: 0.1,
            ease: "power2.in",
          },
          "<"
        );
    }
  };

  return (
    <div className={styles.btn} onClick={handleClick} ref={BtnRef}>
      {isHamOpen && (
        <>
          <div className={styles.hamOverlay} />
        </>
      )}
      {isHamOpen && (
        <svg
          className={styles.hamMenuLines}
          width="479"
          height="1058"
          viewBox="0 0 479 1058"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M134 713.585L168.499 730.586L449 730.586"
            stroke="#F5E3AE"
            strokeWidth="3"
          />
          <path d="M174 531.086L479 531.085" stroke="#F5E3AE" strokeWidth="3" />
          <path
            d="M17 203L109.5 110.5L330.5 110.5"
            stroke="#F5E3AE"
            strokeWidth="3"
          />
          <path
            d="M135 346.084L179.5 326.584H449"
            stroke="#F5E3AE"
            strokeWidth="3"
          />
          <path
            d="M2 829.17L106.5 933.67L354.005 933.671"
            stroke="#F5E3AE"
            strokeWidth="3"
          />
          <path
            d="M112 118.268L330.5 118.268"
            stroke="#F5E3AE"
            strokeWidth="1.63416"
            strokeDasharray="4.63 4.63"
          />
          <path
            d="M183 333.271L448.5 333.271"
            stroke="#F5E3AE"
            strokeWidth="1.63416"
            strokeDasharray="4.63 4.63"
          />
          <path
            d="M182 538.268L478 538.268"
            stroke="#F5E3AE"
            strokeWidth="1.63416"
            strokeDasharray="4.63 4.63"
          />
          <path
            d="M107 944.085L352 944.086"
            stroke="#F5E3AE"
            strokeWidth="1.63416"
            strokeDasharray="4.63 4.63"
          />
          <path
            d="M169 739.083L447 739.085"
            stroke="#F5E3AE"
            strokeWidth="1.63416"
            strokeDasharray="4.63 4.63"
          />
        </svg>
      )}
      <HamPokerChip
        ref={pokerChipRef}
        svgClass={styles.pokerChip}
        isHamOpen={isHamOpen}
      />
      <div className={styles.hamIcon} ref={hamIconRef}>
        <MenuLines svgClass={styles.menuLines} isHamOpen={isHamOpen} />
      </div>
    </div>
  );
}
