"use client";
import { useRef, useState } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import styles from "./btn.module.scss";
import HamPokerChip from "./PokerChip";
import MenuLines from "./MenuLines";
import Link from "next/link";
import HamMenu from "./HamMenu/HamMenu";

export default function HamBtn() {
  const [isHamOpen, setIsHamOpen] = useState(false);
  const [isHoverDisabled, setIsHoverDisabled] = useState(false);
  const BtnRef = useRef(null);
  const pokerChipRef = useRef(null);
  const hamIconRef = useRef(null);

  const animation = () => {
    const tl = gsap.timeline();
    if (isHamOpen) {
      tl.to(BtnRef.current, {
        y: "0",
        x: "0",
        duration: 0.5,
        scale: 1,
      })
        .to(
          pokerChipRef.current,
          {
            rotate: 90,
            duration: 0.75,
            scale: 1,
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
        x: "-50%",
        duration: 0.5,
        scale: 8.9,
      })
        .to(
          pokerChipRef.current,
          {
            rotate: 0,
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

  const handleClick = () => {
    setIsHamOpen(!isHamOpen);
    animation();

    setIsHoverDisabled(true);
    setTimeout(() => {
      setIsHoverDisabled(false);
    }, 1000);
  };

  const handleMouseEnter = () => {
    if (!isHamOpen && !isHoverDisabled)
      gsap.to(pokerChipRef.current, {
        rotate: 120,
        duration: 0.5,
      });
  };

  const handleMouseLeave = () => {
    if (!isHamOpen && !isHoverDisabled)
      gsap.to(pokerChipRef.current, {
        rotate: 90,
        duration: 0.5,
      });
  };

  return (
    <>
      <div
        className={styles.btn}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        ref={BtnRef}
      >
        {isHamOpen && (
          <>
            <div className={styles.hamOverlay} />
          </>
        )}
        {isHamOpen && <HamMenu isHamOpen={isHamOpen} />}
        <HamPokerChip
          ref={pokerChipRef}
          svgClass={styles.pokerChip}
          isHamOpen={isHamOpen}
        />
        <div
          className={styles.hamIcon}
          style={{ width: isHamOpen ? "40%" : "" }}
          ref={hamIconRef}
        >
          <MenuLines svgClass={styles.menuLines} isHamOpen={isHamOpen} />
        </div>
      </div>
      {isHamOpen && (
        <div className={styles.googleMaps}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11944.469102073399!2d75.59370839386403!3d28.35653200720568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20And%20Science%20-%20Pilani!5e0!3m2!1sen!2sin!4v1726307515319!5m2!1sen!2sin"
            width={
              window.innerWidth > 1400
                ? "600"
                : window.innerWidth > 1000
                ? "300"
                : "150"
            }
            height={
              window.innerWidth > 1400
                ? "450"
                : window.innerWidth > 1000
                ? "225"
                : "113"
            }
            loading="lazy"
          ></iframe>
          <h1 className={styles.journeyText}>
            <Link href="https://maps.app.goo.gl/b7LvciNHgtCRcWes6">
              HOW TO REACH PILANI?
            </Link>
          </h1>
        </div>
      )}
    </>
  );
}
