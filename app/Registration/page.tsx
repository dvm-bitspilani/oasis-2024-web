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
          <div className={styles.leftSVG}>
            <svg
              viewBox="0 0 522 340"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M1.05688 339.5L1.05688 68M80.5001 1L522 1"
                stroke="#F5E3AE"
                strokeWidth="1.58383"
              />
            </svg>
            <Link href="/">
              <Image
                className={styles.backButton}
                src="/Registration/backButton.png"
                alt=""
                width={88}
                height={88}
              />
            </Link>
          </div>
          <span className={styles.registration}>
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
          </span>
          <div className={styles.rightSVG}>
            <svg
              className={styles.rightLine}
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
            >
              <path d="M497 1L0 1" stroke="#F5E3AE" strokeWidth="1.58383" />
            </svg>
          </div>
          <svg
            className={styles.rightVerticalLine}
            width="45"
            height="415"
            viewBox="0 0 45 415"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.0651 18.0311L26.0664 18.0325L27.74 19.706C29.8662 17.1332 35.7151 12.5349 42.101 14.7245L42.2221 10.5836L39.4033 10.3876C38.5148 9.93621 37.3322 8.84099 39.7098 8.0713L41.6982 8.09271C41.8466 6.49333 42.5336 2.63721 44.0945 0.00313195C41.4604 1.56401 37.6043 2.25097 36.0049 2.39937L36.0263 4.38783C35.2566 6.76542 34.1614 5.58278 33.71 4.69426L33.5139 1.87548L29.3731 1.99657C31.5626 8.3825 26.9644 14.2314 24.3915 16.3576L26.0651 18.0311ZM24.2002 15.5281C25.741 14.0883 28.3846 10.1316 27.7266 5.64138C27.4943 4.05583 25.3972 2.03453 22.5118 2.9815C19.6265 3.92846 18.4868 8.21798 18.2777 10.2444C19.356 8.6613 21.6555 5.95726 23.1866 6.84986C25.2365 8.0449 25.5765 10.5172 24.2002 15.5281ZM25.5114 44.394V43.5683L24.6864 43.6028C20.8309 43.764 15.0335 42.791 10.2234 39.3735C5.45675 35.9869 1.58383 30.1491 1.58383 20.394H1.90735e-06C1.90735e-06 30.639 4.10293 36.9679 9.30609 40.6646C14.1318 44.0932 19.8381 45.2135 23.9276 45.2032V414.302H25.5114V44.394ZM28.5095 19.8368C29.9422 18.2887 33.9926 15.7389 38.8506 16.7647C40.566 17.1269 42.8814 19.5181 42.0729 22.542C41.2644 25.5658 36.7499 26.4804 34.5937 26.5597C36.2128 25.5175 38.9458 23.2469 37.8801 21.5427C36.4532 19.261 33.78 18.7201 28.5095 19.8368ZM25.0045 19.0918L25.0058 19.0931L31.3691 25.4564L29.2478 27.5777L22.8844 21.2144L22.8832 21.2132L16.5198 14.8498L18.6412 12.7285L25.0045 19.0918ZM20.7632 23.3358L20.7618 23.3344L19.1028 21.6754C18.1639 22.3683 15.4517 23.7029 12.114 23.4983C12.6604 23.9359 13.9291 24.8565 14.633 25.0382L14.3993 29.6983L19.0594 29.4646C19.2411 30.1685 20.1617 31.4372 20.5993 31.9836C20.3947 28.6459 21.7293 25.9337 22.4222 24.9948L20.7632 23.3358Z"
              fill="#F7DB94"
            />
          </svg>
          <svg
            className={styles.rightSquigly}
            width="33"
            height="132"
            viewBox="0 0 33 132"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M26.4722 25.2044C22.5718 28.7209 17.4152 29.8113 12.9765 28.2799L12.9631 28.2753L12.95 28.2702C3.42233 24.5984 -0.103195 18.0124 0.0874958 12.0254C0.274347 6.15897 4.08438 0.843801 9.11681 0.0133255L9.17397 0.00389373L9.23188 0.00287914C15.1398 -0.100612 18.643 2.50229 20.4053 5.68243C21.2739 7.24985 21.7071 8.93463 21.8154 10.4609C21.9227 11.974 21.7145 13.3943 21.2324 14.4169L19.7998 13.7415C20.1328 13.0351 20.3301 11.9057 20.2355 10.573C20.1419 9.25343 19.7659 7.79624 19.0199 6.45012C17.5585 3.81294 14.6278 1.50982 9.31857 1.58552C5.26347 2.29043 1.83988 6.75858 1.67052 12.0758C1.5043 17.2945 4.5262 23.3216 13.5062 26.7872C17.3542 28.1091 21.9084 27.1865 25.4116 24.028C28.9068 20.8768 31.3923 15.4541 30.9295 7.74759L32.5105 7.65266C32.997 15.7542 30.3845 21.6771 26.4722 25.2044ZM13.4261 33.5397C4.44612 37.0053 1.42422 43.0324 1.59044 48.2511C1.7598 53.5683 5.18339 58.0365 9.23849 58.7414C14.5477 58.8171 17.4784 56.514 18.9399 53.8768C19.6858 52.5307 20.0619 51.0735 20.1555 49.7539C20.25 48.4212 20.0527 47.2918 19.7197 46.5854C19.1456 45.3675 17.5492 44.0091 15.8325 43.7467C15.0059 43.6203 14.166 43.7492 13.3808 44.2605C12.5865 44.7777 11.7816 45.7302 11.1242 47.3677L9.65439 46.7776C10.3964 44.9293 11.3772 43.6751 12.5165 42.9332C13.6649 42.1855 14.9067 42.0029 16.0719 42.181C18.3388 42.5276 20.3663 44.2426 21.1523 45.9101C21.6344 46.9327 21.8427 48.3529 21.7353 49.866C21.627 51.3923 21.1938 53.0771 20.3252 54.6445C18.5629 57.8246 15.0597 60.4275 9.15181 60.324L9.09389 60.323L9.03674 60.3136C4.0043 59.4831 0.194269 54.168 0.00741768 48.3015C-0.183273 42.3145 3.34225 35.7285 12.8699 32.0567L12.883 32.0516L12.8964 32.047C17.3351 30.5156 22.4917 31.606 26.3921 35.1226C30.3006 38.6464 32.9117 44.5611 32.4319 52.6504V78.4198C32.9117 86.5091 30.3006 92.4238 26.3921 95.9477C22.4917 99.4642 17.3351 100.555 12.8964 99.0232L12.883 99.0186L12.8699 99.0136C3.34225 95.3417 -0.183273 88.7557 0.00741768 82.7687C0.194269 76.9023 4.0043 71.5871 9.03674 70.7566L9.09389 70.7472L9.15181 70.7462C15.0597 70.6427 18.5629 73.2456 20.3252 76.4258C21.1938 77.9932 21.627 79.6779 21.7353 81.2042C21.8427 82.7173 21.6344 84.1376 21.1523 85.1602C20.3663 86.8277 18.3388 88.5426 16.0719 88.8892C14.9067 89.0674 13.6649 88.8848 12.5165 88.137C11.3772 87.3951 10.3964 86.1409 9.65439 84.2927L11.1242 83.7026C11.7816 85.3401 12.5865 86.2926 13.3808 86.8097C14.166 87.321 15.0059 87.45 15.8325 87.3236C17.5492 87.0611 19.1456 85.7027 19.7197 84.4848C20.0527 83.7785 20.25 82.649 20.1555 81.3163C20.0619 79.9967 19.6858 78.5396 18.9399 77.1934C17.4784 74.5563 14.5477 72.2531 9.23851 72.3288C5.18342 73.0338 1.7598 77.5019 1.59044 82.8192C1.42422 88.0378 4.44615 94.0649 13.4261 97.5306C17.2741 98.8524 21.8284 97.9298 25.3315 94.7714C28.8005 91.6437 31.2748 86.2787 30.8594 78.664H30.848V52.6268V52.603L30.8495 52.5793C31.3122 44.8728 28.8268 39.4501 25.3315 36.2989C21.8283 33.1405 17.2741 32.2178 13.4261 33.5397ZM12.9765 102.791C17.4152 101.259 22.5718 102.35 26.4722 105.866C30.3845 109.393 32.997 115.316 32.5105 123.418L30.9295 123.323C31.3923 115.616 28.9068 110.194 25.4116 107.042C21.9084 103.884 17.3542 102.961 13.5062 104.283C4.5262 107.749 1.5043 113.776 1.67052 118.995C1.83988 124.312 5.26347 128.78 9.31857 129.485C14.6278 129.561 17.5585 127.257 19.0199 124.62C19.7659 123.274 20.1419 121.817 20.2355 120.497C20.3301 119.165 20.1328 118.035 19.7998 117.329L21.2324 116.654C21.7145 117.676 21.9227 119.096 21.8154 120.61C21.7071 122.136 21.2739 123.821 20.4053 125.388C18.643 128.568 15.1398 131.171 9.23188 131.068L9.17397 131.067L9.11681 131.057C4.08438 130.227 0.274347 124.911 0.0874958 119.045C-0.103195 113.058 3.42233 106.472 12.95 102.8L12.9631 102.795L12.9765 102.791Z"
              fill="#F5E3AE"
            />
          </svg>
          <svg
            className={styles.rightVerticalLine2}
            width="46"
            height="413"
            viewBox="0 0 46 413"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              clipRule="evenodd"
              d="M25.5114 369.908V370.734L24.6864 370.7C20.8309 370.539 15.0335 371.512 10.2234 374.929C5.45675 378.316 1.58383 384.153 1.58383 393.908H1.90735e-06C1.90735e-06 383.663 4.10293 377.335 9.30609 373.638C14.1318 370.209 19.8381 369.089 23.9276 369.099V0.00012207H25.5114V369.908ZM29.5693 392.946C31.0091 394.486 34.9658 397.13 39.456 396.472C41.0416 396.24 43.0629 394.143 42.1159 391.257C41.1689 388.372 36.8794 387.232 34.853 387.023C36.4361 388.101 39.1401 390.401 38.2475 391.932C37.0525 393.982 34.5802 394.322 29.5693 392.946ZM27.0663 394.81L27.065 394.812L25.3914 396.485C27.9642 398.612 32.5625 404.46 30.3729 410.846L34.5138 410.967L34.7098 408.149C35.1612 407.26 36.2564 406.078 37.0261 408.455L37.0047 410.444C38.6041 410.592 42.4602 411.279 45.0943 412.84C43.5334 410.206 42.8464 406.35 42.698 404.75L40.7096 404.772C38.332 404.002 39.5146 402.907 40.4032 402.455L43.2219 402.259L43.1008 398.118C36.7149 400.308 30.866 395.71 28.7399 393.137L27.0663 394.81ZM25.2606 397.255C26.8087 398.688 29.3585 402.738 28.3327 407.596C27.9705 409.311 25.5793 411.627 22.5555 410.818C19.5316 410.01 18.617 405.495 18.5377 403.339C19.5799 404.958 21.8505 407.691 23.5547 406.625C25.8364 405.199 26.3773 402.525 25.2606 397.255ZM26.0056 393.75L26.0043 393.751L19.641 400.114L17.5197 397.993L23.883 391.63L23.8843 391.629L30.2476 385.265L32.3689 387.387L26.0056 393.75ZM21.7616 389.509L21.763 389.507L23.422 387.848C22.7291 386.909 21.3945 384.197 21.5991 380.859C21.1615 381.406 20.2409 382.674 20.0592 383.378L15.3991 383.145L15.6328 387.805C14.929 387.986 13.6602 388.907 13.1139 389.345C16.4515 389.14 19.1637 390.475 20.1026 391.168L21.7616 389.509Z"
              fill="#F7DB94"
            />
          </svg>
        </div>
        <div className={styles.formContainer} ref={formRef}>
          {/* <RegistrationForm /> */}
        </div>
      </div>
      <div className={styles.rouletteWheel} ref={wheelRef}>
        <Image
          src="/Registration/rouletteImg.png"
          alt=""
          width={1032}
          height={1022}
        />
      </div>
    </div>
  );
};

export default Registration;
