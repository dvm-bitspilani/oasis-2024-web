"use client";
import { useRef, useState, useEffect } from "react";
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
  const overlayRef = useRef(null);
  const mapsRef = useRef(null);

  const [windowWidth, setWindowWidth] = useState<number | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };
    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const animation = () => {
    const tl = gsap.timeline();
    if (isHamOpen) {
      if (window.innerWidth > 585) {
        tl.to(BtnRef.current, {
          y: "0",
          x: "0",
          duration: 0.5,
          scale:
            window.innerWidth > 1920
              ? 1.5
              : window.innerWidth > 1050
              ? 1
              : window.innerWidth > 900
              ? 0.8
              : 0.65,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 90,
              duration: 0.5,
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
          )
          .to(
            overlayRef.current,
            {
              x: "-100%",
              y: "0%",
              duration: 0.25,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            mapsRef.current,
            {
              opacity: 0,
              duration: 0.5,
            },
            "<"
          );
      } else {
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
              // opacity: 0,
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
          )
          .to(
            overlayRef.current,
            {
              x: "100%",
              y: "0%",
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          );
      }
    } else {
      if (window.innerWidth > 585) {
        tl.to(BtnRef.current, {
          y: `${window.innerHeight / 2 - 50}`,
          x: "-50%",
          duration: 0.5,
          scale: window.innerWidth > 1200 ? 8.9 : 6,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 0,
              duration: 0.75,
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
          )
          .to(
            overlayRef.current,
            {
              x: "0%",
              y: "0%",
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          )
          .to(
            mapsRef.current,
            {
              delay: 0.5,
              opacity: 1,
              duration: 0.5,
            },
            "<"
          );
      } else {
        tl.to(BtnRef.current, {
          y: `${window.innerHeight / 3.5}`,
          x: `${-window.innerWidth / 3.25}`,
          duration: 0.5,
          scale: 2.8,
        })
          .to(
            pokerChipRef.current,
            {
              rotate: 0,
              duration: 1,
              opacity: 1,
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
          )
          .to(
            overlayRef.current,
            {
              x: "0%",
              y: "0%",
              duration: 0.5,
              ease: "power2.out",
            },
            "<"
          );
      }
    }
  };

  const handleClick = () => {
    if (!isHamOpen) {
      setIsHamOpen(true);
      animation();
      document
        .querySelector("body")
        ?.setAttribute("style", "overflow-y: hidden;");
      setIsHoverDisabled(true);
      setTimeout(() => {
        setIsHoverDisabled(false);
      }, 1000);
    }
    console.log(mapsRef.current);
  };

  const handleClose = () => {
    setIsHamOpen(false);
    animation();
    document
      .querySelector("body")
      ?.setAttribute("style", "overflow-y: scroll;");
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
      <div className={styles.hamOverlay} ref={overlayRef} />
      <div
        className={styles.btn}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        id="atharvHamBtn"
        ref={BtnRef}
      >
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

      <>
        <div
          className={styles.googleMaps}
          ref={mapsRef}
          style={{ display: isHamOpen ? "" : "none" }}
        >
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11944.469102073399!2d75.59370839386403!3d28.35653200720568!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39131964f43e4575%3A0x1fbad30854cf884d!2sBirla%20Institute%20of%20Technology%20And%20Science%20-%20Pilani!5e0!3m2!1sen!2sin!4v1726307515319!5m2!1sen!2sin"
            width={
              windowWidth && windowWidth > 1640
                ? "600"
                : windowWidth && windowWidth > 1000
                ? "300"
                : "200"
            }
            height={
              windowWidth && windowWidth > 1640
                ? "450"
                : windowWidth && windowWidth > 1000
                ? "225"
                : "150"
            }
            loading="lazy"
          ></iframe>
          <h1 className={styles.journeyText}>
            <Link href="https://maps.app.goo.gl/b7LvciNHgtCRcWes6">
              <span>HOW TO REACH PILANI?</span>
              <svg
                width="14px"
                height="14px"
                viewBox="0 0 24 24"
                fill="#edcf89"
                xmlns="http://www.w3.org/2000/svg"
                className={styles.arrow}
              >
                <path
                  d="M18 20.75H6C5.27065 20.75 4.57118 20.4603 4.05546 19.9445C3.53973 19.4288 3.25 18.7293 3.25 18V6C3.25 5.27065 3.53973 4.57118 4.05546 4.05546C4.57118 3.53973 5.27065 3.25 6 3.25H12C12.1989 3.25 12.3897 3.32902 12.5303 3.46967C12.671 3.61032 12.75 3.80109 12.75 4C12.75 4.19891 12.671 4.38968 12.5303 4.53033C12.3897 4.67098 12.1989 4.75 12 4.75H6C5.66848 4.75 5.35054 4.8817 5.11612 5.11612C4.8817 5.35054 4.75 5.66848 4.75 6V18C4.75 18.3315 4.8817 18.6495 5.11612 18.8839C5.35054 19.1183 5.66848 19.25 6 19.25H18C18.3315 19.25 18.6495 19.1183 18.8839 18.8839C19.1183 18.6495 19.25 18.3315 19.25 18V12C19.25 11.8011 19.329 11.6103 19.4697 11.4697C19.6103 11.329 19.8011 11.25 20 11.25C20.1989 11.25 20.3897 11.329 20.5303 11.4697C20.671 11.6103 20.75 11.8011 20.75 12V18C20.75 18.7293 20.4603 19.4288 19.9445 19.9445C19.4288 20.4603 18.7293 20.75 18 20.75Z"
                  fill="#edcf89"
                />
                <path
                  d="M20 8.75C19.8019 8.74741 19.6126 8.66756 19.4725 8.52747C19.3324 8.38737 19.2526 8.19811 19.25 8V4.75H16C15.8011 4.75 15.6103 4.67098 15.4697 4.53033C15.329 4.38968 15.25 4.19891 15.25 4C15.25 3.80109 15.329 3.61032 15.4697 3.46967C15.6103 3.32902 15.8011 3.25 16 3.25H20C20.1981 3.25259 20.3874 3.33244 20.5275 3.47253C20.6676 3.61263 20.7474 3.80189 20.75 4V8C20.7474 8.19811 20.6676 8.38737 20.5275 8.52747C20.3874 8.66756 20.1981 8.74741 20 8.75Z"
                  fill="#edcf89"
                />
                <path
                  d="M13.5 11.25C13.3071 11.2352 13.1276 11.1455 13 11C12.877 10.8625 12.809 10.6845 12.809 10.5C12.809 10.3155 12.877 10.1375 13 10L19.5 3.5C19.5687 3.42631 19.6515 3.36721 19.7435 3.32622C19.8355 3.28523 19.9348 3.26319 20.0355 3.26141C20.1362 3.25963 20.2362 3.27816 20.3296 3.31588C20.423 3.3536 20.5078 3.40974 20.579 3.48096C20.6503 3.55218 20.7064 3.63701 20.7441 3.7304C20.7818 3.82379 20.8004 3.92382 20.7986 4.02452C20.7968 4.12523 20.7748 4.22454 20.7338 4.31654C20.6928 4.40854 20.6337 4.49134 20.56 4.56L14 11C13.8724 11.1455 13.6929 11.2352 13.5 11.25Z"
                  fill="#edcf89"
                />
              </svg>
            </Link>
          </h1>
        </div>
        {isHamOpen && (
          <div className={styles.closeBtn} onClick={handleClose}>
            <svg
              viewBox="0 0 40 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_3432_1022)">
                <path
                  d="M37.3337 37.3334L2.66699 2.66675M37.3337 2.66675L2.66699 37.3334"
                  stroke="#FFE887"
                  strokeWidth="4.33333"
                  strokeLinecap="round"
                />
              </g>
              <defs>
                <clipPath id="clip0_3432_1022">
                  <rect width="40" height="40" fill="white" />
                </clipPath>
              </defs>
            </svg>
          </div>
        )}
      </>
    </>
  );
}
