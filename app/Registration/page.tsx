"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./registration.module.scss";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

import RegistrationForm from "@/components/Registration/RegistrationForm/RegistrationForm";
import GoogleAuthPage from "@/components/Registration/GoogleAuth/GAuth";

gsap.registerPlugin(ScrollTrigger);

const Registration = () => {
  const [wheelRotating, setWheelRotating] = useState(false);
  const [userState, setUserState] = useState(null);

  const formRef = useRef<HTMLDivElement | null>(null);
  const wheelRef = useRef(null);
  const scrollbarThumbRef = useRef<HTMLImageElement | null>(null);
  const handleScroll = () => {
    // console.log("scrolling");
    if (formRef.current && scrollbarThumbRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = formRef.current;

      if (scrollHeight > clientHeight) {
        const maxScrollTopValue = scrollHeight - clientHeight;
        const percentage = (scrollTop / maxScrollTopValue) * 100;
        scrollbarThumbRef.current.style.top = `${Math.min(percentage, 100)}%`;

        // gsap.to(scrollbarThumbRef.current, {
        //   top: `${Math.min(percentage, 100)}%`,
        //   // delay: 0.2,
        //   ease: "none",
        // });

        if (!wheelRotating) {
          gsap.to(wheelRef.current, {
            rotate: 360 + 360 * (percentage / 200),
            duration: 2,
            ease: "power1.out",
          });
        }
      }
    }
  };

  const googleSignIn = useGoogleLogin({
    onSuccess: (response) => {
      // Register URL: https://bits-oasis.org/2024/main/registrations/register/
      axios
        .post("https://bits-oasis.org/2024/main/registrations/google-reg/", {
          access_token: response.access_token,
        })
        .then((res) => {
          setUserState(res.data);
        })
        .catch((err) => {
          console.log(err);
        });
    },
  });

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
        if (formRef.current) {
          const maxScrollTopValue =
            formRef.current.scrollHeight - formRef.current.clientHeight;
          formRef.current.scrollTop = percentage * maxScrollTopValue;
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
    const formContainerElem = formRef.current;
    const scrollBarContainer = document.querySelector(
      `.${styles.scrollbar}`
    ) as HTMLElement;
    console.log(formContainerElem, scrollBarContainer);
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

  useEffect(() => {
    setWheelRotating(true);
    const initialRotation = gsap.to(wheelRef.current, {
      rotate: 360,
      duration: 4,
      ease: "back.out(1)",
      onComplete: () => setWheelRotating(false),
    });

    return () => {
      initialRotation.kill();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
        <div className={styles.phoneBorder}>REGISTRATION</div>
        <div className={styles.border}>
          <Link href="/">
            <Image
              className={styles.backButton}
              src="/Registration/backButton.png"
              alt=""
              width={88}
              height={88}
            />
          </Link>
          <div className={styles.frameLeft}></div>
          <div className={styles.frameTopLeft}></div>
          <div className={styles.registration}>
            <svg
              width="42"
              height="29"
              viewBox="0 0 42 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M26.4357 5.99891C23.7259 9.63928 19.0588 10.5678 16.9512 10.4964C21.4676 7.92632 22.9754 5.93767 22.3709 3.64316C21.9194 1.92934 18.3814 2.2154 16.4995 2.57234C18.0803 1.28735 21.9192 -0.939966 24.6291 0.43069C27.339 1.80135 27.3926 4.71348 26.4357 5.99891Z"
                fill="#F7DB94"
              />
              <path
                d="M16.5 13.585V13.5869V15.9537C19.8227 15.6379 27.21 16.5222 30.1772 22.5859L33.1909 19.7435L31.3363 17.6117C31.0272 16.6643 30.9654 15.0536 33.1909 16.1905L34.5818 17.6117C35.8177 16.5857 39.0301 14.3448 41.9964 13.5859C39.0301 12.8271 35.8177 10.5861 34.5818 9.56013L33.1909 10.9813C30.9654 12.1183 31.0272 10.5076 31.3363 9.56013L33.1909 7.42833L30.1772 4.58594C27.21 10.6497 19.8227 11.534 16.5 11.2182V13.585Z"
                fill="#FAE29F"
              />
              <path
                d="M26.4362 21.7302C23.7264 17.5698 19.0593 16.5086 16.9516 16.5902C21.4681 19.5274 22.9759 21.8002 22.3714 24.4225C21.9199 26.3811 18.3819 26.0542 16.5 25.6463C18.0808 27.1148 21.9197 29.6603 24.6296 28.0939C27.3395 26.5274 27.3931 23.1992 26.4362 21.7302Z"
                fill="#F7DB94"
              />
              <path
                d="M15 13.5851V13.5868L15 22.5859H12L12 13.5868V13.5851L12 4.58594H15L15 13.5851Z"
                fill="#F8DC96"
              />
              <path
                d="M9 13.5849V13.587V15.9331C7.84615 16.1071 4.98462 17.0812 2.76923 19.5859C2.84615 18.8902 3.09231 17.3421 3.46154 16.7159L0.00112629 13.5859L3.46154 10.456C3.09231 9.8298 2.84615 8.28171 2.76923 7.58594C4.98462 10.0907 7.84615 11.0648 9 11.2387V13.5849Z"
                fill="#F7DB94"
              />
            </svg>
            <span>REGISTRATION</span>
            <svg
              width="42"
              height="29"
              viewBox="0 0 42 29"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M15.5643 5.99891C18.2741 9.63928 22.9412 10.5678 25.0488 10.4964C20.5324 7.92632 19.0246 5.93767 19.6291 3.64316C20.0806 1.92934 23.6186 2.2154 25.5005 2.57234C23.9197 1.28735 20.0808 -0.939966 17.3709 0.43069C14.661 1.80135 14.6074 4.71348 15.5643 5.99891Z"
                fill="#F7DB94"
              />
              <path
                d="M25.5 13.585V13.5869V15.9537C22.1773 15.6379 14.79 16.5222 11.8228 22.5859L8.80912 19.7435L10.6637 17.6117C10.9728 16.6643 11.0346 15.0536 8.80912 16.1905L7.41821 17.6117C6.18234 16.5857 2.96989 14.3448 0.00361342 13.5859C2.96989 12.8271 6.18234 10.5861 7.41821 9.56013L8.80912 10.9813C11.0346 12.1183 10.9728 10.5076 10.6637 9.56013L8.80912 7.42833L11.8228 4.58594C14.79 10.6497 22.1773 11.534 25.5 11.2182V13.585Z"
                fill="#FAE29F"
              />
              <path
                d="M15.5638 21.7302C18.2736 17.5698 22.9407 16.5086 25.0484 16.5902C20.5319 19.5274 19.0241 21.8002 19.6286 24.4225C20.0801 26.3811 23.6181 26.0542 25.5 25.6463C23.9192 27.1148 20.0803 29.6603 17.3704 28.0939C14.6605 26.5274 14.6069 23.1992 15.5638 21.7302Z"
                fill="#F7DB94"
              />
              <path
                d="M27 13.5851V13.5868L27 22.5859H30L30 13.5868V13.5851V4.58594H27V13.5851Z"
                fill="#F8DC96"
              />
              <path
                d="M33 13.5849V13.587V15.9331C34.1538 16.1071 37.0154 17.0812 39.2308 19.5859C39.1538 18.8902 38.9077 17.3421 38.5385 16.7159L41.9989 13.5859L38.5385 10.456C38.9077 9.8298 39.1538 8.28171 39.2308 7.58594C37.0154 10.0907 34.1538 11.0648 33 11.2387V13.5849Z"
                fill="#F7DB94"
              />
            </svg>
          </div>
          <div className={styles.frameTopRight}>
            <svg
              width="915"
              height="26"
              viewBox="0 0 915 26"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M914.928 25C906.952 25.3333 891 21 891 1L-3.05176e-05 1"
                stroke="#F5E3AE"
                stroke-width="1.58383"
              />
            </svg>
          </div>
          <div className={styles.frameRight}>
            <svg
              width="34"
              height="856"
              viewBox="0 0 34 856"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M31.8475 440.652C32.7966 456.46 21.6517 463.343 13.3622 460.483C-5.15575 453.346 0.261202 435.25 9.37322 433.746C20.6276 433.549 22.2737 443.573 20.6436 447.031C19.2834 449.916 13.3958 453.177 10.5968 446.206M10.5968 409.281C13.3958 402.309 19.2834 405.571 20.6436 408.456C22.2737 411.914 20.6276 421.938 9.37322 421.74C0.261202 420.237 -5.15575 402.14 13.3622 395.004C21.6517 392.144 32.7966 399.027 31.8475 414.835L31.8475 440.872"
                stroke="#F5E3AE"
                stroke-width="1.58383"
              />
              <path
                d="M20.7237 479.084C22.3538 482.542 20.7077 492.566 9.4533 492.369C0.34128 490.865 -5.07567 472.769 13.4423 465.632C21.7318 462.772 32.8767 469.655 31.9276 485.463L31.9276 855.372"
                stroke="#F5E3AE"
                stroke-width="1.58383"
              />
              <path
                d="M21.644 376.287C23.2741 372.829 21.628 362.806 10.3736 363.003C1.26163 364.507 -4.15532 382.603 14.3626 389.74C22.6521 392.599 33.7971 385.716 32.8479 369.908L32.8479 0"
                stroke="#F5E3AE"
                stroke-width="1.58383"
              />
            </svg>
          </div>
          <div className={styles.frameBottomRight}>
            <svg
              width="1318"
              height="27"
              viewBox="0 0 1318 27"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1317.93 1.37173C1309.95 1.0384 1294 5.37173 1294 25.3717L6.10352e-05 25.3717"
                stroke="#F5E3AE"
                stroke-width="1.58383"
              />
            </svg>
          </div>
          <div className={styles.frameBottomLeft}></div>
        </div>
        <div className={styles.formContainer}>
          {userState ? (
            <>
              <div
                className={styles.formContent}
                onScroll={() => handleScroll()}
                ref={formRef}
              >
                <RegistrationForm />
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
            </>
          ) : (
            <GoogleAuthPage gSignIn={googleSignIn} />
          )}
        </div>
      </div>
      <div className={styles.rouletteWheel} ref={wheelRef}>
        <img src="/Registration/RouletteWheel.png" alt="" />
      </div>
    </div>
  );
};

export default Registration;
