"use client";

import styles from "./media-partners.module.scss";

import React, { useRef } from "react";
import Link from "next/link";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Trees from "@/components/ComingSoon/Trees";
import Image from "next/image";
import axios from "axios";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import CursorEffect from "@/components/CursorEffect/CursorEffect";

export default function Sponsors() {
  const [sponsors, setSponsors] = React.useState<any[]>([]);
  React.useEffect(() => {
    axios
      .get("https://www.bits-oasis.org/2024/main/wallet/media-partners/")
      .then((response) => {
        const sortedSponsors = response.data.sort(
          (a: any, b: any) => a.order - b.order
        );
        setSponsors(sortedSponsors);
        // setSponsors(response.data);
      });
  }, []);

  const containerRef = useRef<HTMLDivElement | null>(null);

  const scrollbarThumbRef = useRef<HTMLImageElement | null>(null);
  const handleMouseDown = (e: MouseEvent | TouchEvent | any) => {
    e.preventDefault();

    const initialClientY =
      (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;

    const scrollbarThumbElem = scrollbarThumbRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollbarTrack}`
    ) as HTMLElement;

    if (scrollbarThumbElem && scrollBarContainer) {
      const thumbOffsetTop =
        initialClientY - scrollbarThumbElem.getBoundingClientRect().top;

      const handleDragMove = (moveEvent: MouseEvent | TouchEvent) => {
        moveEvent.preventDefault();

        const clientY =
          (moveEvent as MouseEvent).clientY ||
          (moveEvent as TouchEvent).touches[0].clientY;
        const scrollBarContainerRect =
          scrollBarContainer.getBoundingClientRect();

        // Calculate new top position of the scrollbar thumb relative to the scrollbar track
        let newTop = clientY - scrollBarContainerRect.top - thumbOffsetTop;

        // Constrain newTop within the scrollbar track bounds
        newTop = Math.max(
          0,
          Math.min(
            newTop,
            scrollBarContainer.clientHeight - scrollbarThumbElem.offsetHeight
          )
        );

        // Calculate the percentage of scroll based on new position
        const percentage =
          newTop /
          (scrollBarContainer.clientHeight - scrollbarThumbElem.offsetHeight);

        // Update the scrollTop of the form container based on the percentage
        if (containerRef.current) {
          const maxScrollTopValue =
            containerRef.current.scrollHeight -
            containerRef.current.clientHeight;
          containerRef.current.scrollTop = percentage * maxScrollTopValue;
        }
      };

      document.addEventListener("mousemove", handleDragMove);
      document.addEventListener("touchmove", handleDragMove);

      const handleDragEnd = () => {
        document.removeEventListener("mousemove", handleDragMove);
        document.removeEventListener("mouseup", handleDragEnd);
        document.removeEventListener("touchmove", handleDragMove);
        document.removeEventListener("touchend", handleDragEnd);
      };

      document.addEventListener("mouseup", handleDragEnd);
      document.addEventListener("touchend", handleDragEnd);
    }
  };
  const handleTrackSnap = (e: MouseEvent | TouchEvent | any) => {
    const formContainerElem = containerRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollbar}`
    ) as HTMLElement;
    // console.log(formContainerElem, scrollBarContainer);
    if (!formContainerElem || !scrollBarContainer) return;

    // Determine clientY for mouse or touch event
    const clientY =
      (e as MouseEvent).clientY || (e as TouchEvent).touches[0].clientY;

    // Calculate position within the scrollbar track
    const scrollBarContainerRect = scrollBarContainer.getBoundingClientRect();

    let relativeClickPosition = clientY - scrollBarContainerRect.top;

    // Constrain the position within the scrollbar track's height
    relativeClickPosition = Math.max(
      0,
      Math.min(relativeClickPosition, scrollBarContainer.clientHeight)
    );

    // Calculate scroll percentage based on relative click position
    const percentage = relativeClickPosition / scrollBarContainer.clientHeight;

    // Calculate max scroll top value
    const maxScrollTopValue =
      formContainerElem.scrollHeight - formContainerElem.clientHeight;

    // Scroll the form container based on the calculated percentage
    formContainerElem.scrollTo({
      top: percentage * maxScrollTopValue,
      behavior: "smooth",
    });
  };
  const handleScroll = () => {
    // console.log("scrolling");
    if (containerRef.current && scrollbarThumbRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

      if (scrollHeight > clientHeight) {
        const maxScrollTopValue = scrollHeight - clientHeight;
        const percentage = (scrollTop / maxScrollTopValue) * 100;
        scrollbarThumbRef.current.style.top = `${Math.min(percentage, 100)}%`;

        // gsap.to(scrollbarThumbRef.current, {
        //   top: `${Math.min(percentage, 100)}%`,
        //   // delay: 0.2,
        //   ease: "none",
        // });

        // if (!wheelRotating) {
        //   gsap.to(wheelRef.current, {
        //     rotate: 360 + 360 * (percentage / 200),
        //     duration: 2,
        //     ease: "power1.out",
        //   });
        // }
      }
    }
  };
  return (
    <>
      <PrePreloader />
      <CursorEffect />
      <div className={styles.wrapper}>
        <div className={styles.backgroundImage} />
        {/* <Link href="/" className={styles.backButton}>
        <BackButton />
      </Link> */}
        <div className={styles.mainContainer}>
          <Link href="/" className={styles.backButton}>
            <BackButton />
          </Link>
          <div className={styles.title}>Sponsors</div>
          <div
            className={styles.sponsorsContainer}
            onScroll={() => handleScroll()}
            ref={containerRef}
          >
            {sponsors.map((sponsor, index) => (
              <Link
                key={sponsor.id}
                href={sponsor.web_url}
                className={styles.sponsorItemContainer}
                draggable="false"
              >
                <div key={index} className={styles.sponsorItem}>
                  <img
                    src={sponsor.url}
                    className={styles.sponsorImg}
                    draggable="false"
                    alt=""
                  />
                  <div className={styles.sponsorName}>{sponsor.name}</div>
                  <div className={styles.sponsorDescription}>
                    {sponsor.description}
                  </div>
                </div>
              </Link>

              // <div
              //   key={index}
              //   className={styles.sponsor}
              //   style={{ backgroundImage: `url(${sponsor.url})` }}
              // />
            ))}
          </div>
          <div className={styles.scrollbar} onClick={handleTrackSnap}>
            <div className={styles.scrollbarTrack} />
            <Image
              draggable={false}
              src="/Registration/ScrollBarThumb.png"
              alt="scrollBarThumb"
              width={85}
              height={85}
              className={styles.scrollbarThumb}
              ref={scrollbarThumbRef}
              onMouseDown={handleMouseDown}
              onTouchStart={handleMouseDown}
            />
            {/* <svg
              xmlns="http://www.w3.org/2000/svg"
              width="85"
              height="85"
              viewBox="0 0 85 85"
              fill="none"
            >
              <g filter="url(#filter0_d_1596_3027)">
                <rect
                  x="28.8689"
                  y="25.802"
                  width="29.137"
                  height="36.8046"
                  fill="#1F152E"
                />
                <path
                  d="M42.6704 12C25.7315 12 12 25.7315 12 42.6704C12 59.6093 25.7315 73.3408 42.6704 73.3408C59.6089 73.3408 73.3404 59.6093 73.3404 42.6704C73.3404 25.7315 59.6089 12 42.6704 12ZM57.9477 19.9647L55.9933 22.8535C53.3927 21.1016 50.4282 19.8495 47.2374 19.2315L47.923 15.8124C51.5169 16.5074 54.9149 17.9149 57.9477 19.9647ZM44.2565 56.2823V59.8433H41.3599V56.3003C39.2909 56.0729 37.3493 55.2803 35.8894 53.922C34.4291 52.5639 33.7612 50.5671 33.8092 47.934L33.8833 47.8432H38.9991C38.9991 49.4984 39.3672 50.5973 40.1032 51.291C40.8393 51.9852 41.7754 52.3328 42.9125 52.3328C44.0014 52.3328 44.8361 52.0431 45.4164 51.4623C45.9968 50.882 46.2871 50.1015 46.2871 49.1202C46.2871 48.1506 46.0088 47.3611 45.4524 46.7509C44.8961 46.1406 43.9414 45.5724 42.5893 45.0457C39.9325 44.0761 37.9607 42.9965 36.6744 41.8056C35.3879 40.6148 34.7448 38.9364 34.7448 36.7704C34.7448 34.7597 35.3392 33.1115 36.6253 31.825C37.9117 30.5387 39.7043 29.7816 41.7733 29.554V25.7044H44.6699V29.5896C46.7389 29.901 48.4583 30.7806 49.661 32.2285C50.8638 33.6766 51.4669 35.5339 51.4431 37.8434L51.4032 37.9117H46.2871C46.2871 36.4633 45.9968 35.4321 45.4164 34.6662C44.8359 33.9004 44.0432 33.528 43.0381 33.528C42.0085 33.528 41.243 33.8295 40.7404 34.4218C40.2377 35.0142 39.9867 35.8041 39.9867 36.7853C39.9867 37.7186 40.2528 38.4769 40.7853 39.0573C41.3177 39.6378 42.2961 40.2099 43.7204 40.7723C46.3651 41.8134 48.3249 42.9266 49.5992 44.1115C50.8737 45.2962 51.5109 46.9539 51.5109 49.084C51.5109 51.1662 50.8155 52.83 49.5352 54.0745C48.2547 55.3194 46.5325 56.0551 44.2565 56.2823ZM37.4178 15.8124L38.0782 19.2364C34.8884 19.858 31.9251 21.1128 29.3262 22.8676L27.3931 19.9647C30.4259 17.9149 33.8237 16.5074 37.4178 15.8124ZM19.9647 27.3929L22.8535 29.3473C21.1016 31.9479 19.8497 34.9122 19.2317 38.103L15.8124 37.4174C16.5076 33.8237 17.9151 30.4257 19.9647 27.3929ZM19.9645 57.9475C17.9147 54.9147 16.5074 51.5167 15.8124 47.9228L19.2364 47.2624C19.858 50.4522 21.1128 53.4157 22.8676 56.0146L19.9645 57.9475ZM27.3927 65.3759L29.3471 62.4871C31.9477 64.2392 34.9122 65.4914 38.1032 66.1094L37.4176 69.5286C33.8235 68.8332 30.4253 67.4259 27.3927 65.3759ZM47.9228 69.5286L47.2624 66.1046C50.4524 65.4831 53.4157 64.2282 56.0148 62.4733L57.9479 65.3761C54.9149 67.4261 51.5167 68.8337 47.9228 69.5286ZM65.3761 57.9477L62.4873 55.9933C64.2392 53.3927 65.4911 50.428 66.1092 47.2374L69.5282 47.923C68.833 51.5169 67.4257 54.9149 65.3761 57.9477ZM66.1042 38.0782C65.4827 34.8884 64.2278 31.9249 62.4729 29.3258L65.3757 27.3927C67.4255 30.4255 68.833 33.8237 69.528 37.4176L66.1042 38.0782Z"
                  fill="#E6C381"
                />
              </g>
            </svg> */}
          </div>
        </div>
        <svg
          style={{ position: "absolute", width: "100%", height: "100%" }}
          width="1687"
          height="1080"
          viewBox="0 0 1687 1080"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            opacity="0.15"
            d="M0 1394L0 -293L1687 -293L1687 1394L0 1394Z"
            fill="url(#paint0_radial_1444_3421)"
          />
          <defs>
            <radialGradient
              id="paint0_radial_1444_3421"
              cx="0"
              cy="0"
              r="1"
              gradientUnits="userSpaceOnUse"
              gradientTransform="translate(843.5 550.5) scale(843.5)"
            >
              <stop stopColor="#FADC69" />
              <stop offset="1" stopColor="#FADC69" stopOpacity="0" />
            </radialGradient>
          </defs>
        </svg>

        {/* <Trees /> */}
      </div>
    </>
  );
}
