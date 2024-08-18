"use client";
import React, { useEffect, useRef } from "react";
import styles from "./registration.module.scss";

import Image from "next/image";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

import RegistrationForm from "@/components/Registration/RegistrationForm/RegistrationForm";

gsap.registerPlugin(ScrollTrigger);

const Registration = () => {
  const formRef = useRef(null);
  const wheelRef = useRef(null);
  useEffect(() => {
    const initialRotation = gsap.to(wheelRef.current, {
      rotate: 360,
      duration: 4,
      ease: "back.out(1)",
    });
    // const scrollRotation = gsap.to(wheelRef.current, {
    //   rotate: 360,
    //   ease: "none",
    //   scrollTrigger: {
    //     trigger: formRef.current,
    //     start: "top top",
    //     end: "bottom bottom",
    //     scrub: true,
    //   },
    // });
    // initialRotation.eventCallback("onComplete", () => {
    //   scrollRotation.play();
    // });

    return () => {
      initialRotation.kill();
      // scrollRotation.kill();
    };
  }, []);

  return (
    <div className={styles.pageContainer}>
      <div className={styles.pageContent}>
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
            REGISTRATION
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
        <div className={styles.formContainer} ref={formRef}>
          <RegistrationForm />
        </div>
      </div>
      <div className={styles.rouletteWheel} ref={wheelRef}>
        <Image
          src="/Registration/RouletteWheel.png"
          alt=""
          width={1000}
          height={1000}
        />
      </div>
    </div>
  );
};

export default Registration;
