"use client";
import React, { useEffect, useRef } from "react";
import styles from "./hamMenu.module.scss";
import gsap from "gsap";
import Link from "next/link";

interface HamMenuProps {
  isHamOpen: boolean;
}

const HamMenu: React.FC<HamMenuProps> = ({ isHamOpen }) => {
  const wallMagRef = useRef<HTMLDivElement | null>(null);
  const developersRef = useRef<HTMLDivElement | null>(null);
  const mediaPartnersRef = useRef<HTMLDivElement | null>(null);
  const sponsorsRef = useRef<HTMLDivElement | null>(null);
  const galleryRef = useRef<HTMLDivElement | null>(null);

  const animate = () => {
    if (isHamOpen) {
      const tl = gsap.timeline();
      if (window.innerWidth > 585) {
        tl.to(
          [
            wallMagRef.current,
            developersRef.current,
            mediaPartnersRef.current,
            sponsorsRef.current,
            galleryRef.current,
          ],
          {
            opacity: 1,
            duration: 0.5,
            delay: 1,
            stagger: 0.2,
          }
        );
      } else {
        tl.to(
          [
            wallMagRef.current,
            sponsorsRef.current,
            mediaPartnersRef.current,
            galleryRef.current,
            developersRef.current,
          ],
          {
            opacity: 1,
            duration: 0.5,
            delay: 1,
            stagger: 0.2,
          }
        );
      }
    }
  };
  useEffect(() => {
    if (isHamOpen) {
      animate();
    }
  }, [isHamOpen]);
  return (
    <>
      {window.innerWidth > 585 ? (
        <div className={styles.hamMenuLines}>
          <div className={styles.wallMag} ref={wallMagRef}>
            <svg
              width="316"
              height="96"
              viewBox="0 0 316 96"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 94.0001L94.5 1.50012L315.5 1.50014"
                stroke="#F5E3AE"
                stroke-width="3"
              />
              <path
                d="M97 9.26823L315.5 9.2681"
                stroke="#F5E3AE"
                stroke-width="1.63416"
                stroke-dasharray="4.63 4.63"
              />
            </svg>
            <Link href="/rocktaves" className={styles.magText}>
              ROCKTAVES
            </Link>
          </div>
          <div className={styles.developers} ref={developersRef}>
            <svg
              width="315"
              height="23"
              viewBox="0 0 315 23"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 21.0845L45.5 1.58447L315 1.58447"
                stroke="#F5E3AE"
                stroke-width="3"
              />
              <path
                d="M49 8.27126L314.5 8.27114"
                stroke="#F5E3AE"
                stroke-width="1.63416"
                stroke-dasharray="4.63 4.63"
              />
            </svg>
            <Link href="/preregistrations" className={styles.devText}>
              PRELIMS
            </Link>
          </div>
          <div className={styles.mediaPartners} ref={mediaPartnersRef}>
            <svg
              width="305"
              height="11"
              viewBox="0 0 305 11"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 2.08586L305 2.08511"
                stroke="#F5E3AE"
                stroke-width="3"
              />
              <path
                d="M8 9.26819L304 9.26824"
                stroke="#F5E3AE"
                stroke-width="1.63416"
                stroke-dasharray="4.63 4.63"
              />
            </svg>
            <Link href="/gallery" className={styles.medText}>
              GALLERY
            </Link>
          </div>
          <div className={styles.sponsors} ref={sponsorsRef}>
            <svg
              width="316"
              height="28"
              viewBox="0 0 316 28"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1 1.58508L35.499 18.5856L316 18.5856"
                stroke="#F5E3AE"
                stroke-width="3"
              />
              <path
                d="M36 27.0833L314 27.0851"
                stroke="#F5E3AE"
                stroke-width="1.63416"
                stroke-dasharray="4.63 4.63"
              />
            </svg>
            <Link href="/comingsoon" className={styles.sponsorsText}>
              SPONSORS
            </Link>
          </div>
          <div className={styles.gallery} ref={galleryRef}>
            <svg
              width="354"
              height="117"
              viewBox="0 0 354 117"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M2 1.17004L106.5 105.67L354.005 105.671"
                stroke="#F5E3AE"
                stroke-width="3"
              />
              <path
                d="M107 116.085L352 116.086"
                stroke="#F5E3AE"
                stroke-width="1.63416"
                stroke-dasharray="4.63 4.63"
              />
            </svg>
            <Link href="/comingsoon" className={styles.galleryText}>
              MEDIA PARTNERS
            </Link>
          </div>
        </div>
      ) : (
        <div className={styles.mobileHamMenuLines}>
          <div className={styles.wallMag} ref={wallMagRef}>
            <svg
              width="30"
              height="110"
              viewBox="0 0 30 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.56543 108L28.4355 81.1295L28.4355 -0.000486945"
                stroke="#EDCF89"
                strokeWidth="3"
              />
            </svg>
            <Link href="/rocktaves" className={styles.magText}>
              ROCKATVES
            </Link>
          </div>
          <div className={styles.developers} ref={developersRef}>
            <svg
              width="30"
              height="110"
              viewBox="0 0 30 110"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.4346 108L1.56451 81.1295L1.56452 -0.000486945"
                stroke="#EDCF89"
                strokeWidth="3"
              />
            </svg>
            <Link href="/preregistrations" className={styles.devText}>
              PRELIMS
            </Link>
          </div>
          <div className={styles.mediaPartners} ref={mediaPartnersRef}>
            <svg
              width="4"
              height="153"
              viewBox="0 0 4 153"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M2 0V153" stroke="#EDCF89" stroke-width="3" />
            </svg>
            <Link href="/gallery" className={styles.medText}>
              GALLERY
            </Link>
          </div>
          <div className={styles.sponsors} ref={sponsorsRef}>
            <svg
              width="30"
              height="147"
              viewBox="0 0 30 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.06543 2L27.9355 28.8701V147"
                stroke="#EDCF89"
                strokeWidth="3"
              />
            </svg>
            <Link href="/comingsoon" className={styles.sponsorsText}>
              SPONSORS
            </Link>
          </div>
          <div className={styles.gallery} ref={galleryRef}>
            <svg
              width="30"
              height="147"
              viewBox="0 0 30 147"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M28.9346 2L2.06451 28.8701V147"
                stroke="#EDCF89"
                strokeWidth="3"
              />
            </svg>
            <Link href="/comingsoon" className={styles.galleryText}>
              MEDIA PARTNERS
            </Link>
          </div>
        </div>
      )}
    </>
  );
};

export default HamMenu;
