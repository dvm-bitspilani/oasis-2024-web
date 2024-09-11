"use client";
import React, { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import styles from "./gauth.module.scss";
import Signin from "../SignIn/SignIn";
import Image from "next/image";
import Modal from "../Modal/Modal";
import { Tooltip } from "antd";
import Instruction from "../Instructions/Instructions";

interface Props {
  gSignIn: () => void;
}

export default function GoogleAuthPage({ gSignIn }: Props) {
  const wheelRef = useRef(null);
  useEffect(() => {
    const initialRotation = gsap.to(wheelRef.current, {
      rotate: 360,
      duration: 4,
      ease: "back.out(1)",
    });

    return () => {
      initialRotation.kill();
    };
  }, []);

  const [isOpen, setisOpen] = useState(false);

  const toggleModal = () => {
    setisOpen(!isOpen);
  };

  return (
    <>
      <div className={styles.instructionsContainer}>
        <Signin />
        <div
          onClick={() => {
            gSignIn();
          }}
          className={styles.btnwrapper}
        >
          <div className={styles.glow}></div>
          <div className={styles.btnborder}>
            <div className={`${styles.circlewrapper} ${styles.top}`}>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
            </div>
            <div className={`${styles.circlewrapper} ${styles.bottom}`}>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
            </div>
            <div className={`${styles.circlewrapper} ${styles.curve}`}>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
            </div>
            <div
              className={`${styles.circlewrapper} ${styles.curve} ${styles.left}`}
            >
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
              <div className={`${styles.circle} bulb`}></div>
            </div>
            <div className={styles.register}>
              sign in
              {/* <svg
                xmlns="http://www.w3.org/2000/svg"
                width="29"
                height="30"
                viewBox="0 0 29 30"
                fill="none"
              >
                <path
                  d="M27.3065 15.2941C27.3065 14.3767 27.2242 13.4947 27.0713 12.6479H14.8875V17.652H21.8497C21.5498 19.2691 20.6383 20.6392 19.2682 21.5565V24.8024H23.4491C25.8953 22.5503 27.3065 19.2338 27.3065 15.2941Z"
                  fill="#4285F4"
                />
                <path
                  d="M14.8874 27.9365C18.3802 27.9365 21.3086 26.7781 23.449 24.8023L19.2681 21.5564C18.1097 22.3326 16.6279 22.7913 14.8874 22.7913C11.518 22.7913 8.66605 20.5156 7.64877 17.4579H3.32678V20.8096C5.45543 25.0375 9.83034 27.9365 14.8874 27.9365Z"
                  fill="#34A853"
                />
                <path
                  d="M7.64889 17.4579C7.39016 16.6817 7.24315 15.8526 7.24315 15C7.24315 14.1474 7.39016 13.3182 7.64889 12.542V9.19031H3.32691C2.42135 10.993 1.95013 12.9826 1.95093 15C1.95093 17.0875 2.45075 19.0632 3.32691 20.8097L7.64889 17.4579Z"
                  fill="#FBBC05"
                />
                <path
                  d="M14.8874 7.20869C16.7867 7.20869 18.4919 7.8614 19.8326 9.1433L23.5431 5.43286C21.3027 3.34537 18.3743 2.06348 14.8874 2.06348C9.83034 2.06348 5.45543 4.96244 3.32678 9.19034L7.64877 12.5421C8.66605 9.48435 11.518 7.20869 14.8874 7.20869Z"
                  fill="#EA4335"
                />
              </svg> */}
            </div>
          </div>
        </div>
        {/* <Tooltip title="Click to view detailed instructions">
          <div className={styles.modalbtn} onClick={toggleModal}>
            <div className={styles.symbols}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="36"
                height="36"
                viewBox="0 0 36 36"
                fill="none"
              >
                <circle
                  cx="18"
                  cy="18"
                  r="17.1281"
                  fill="#170F22"
                  stroke="#F5E3AE"
                  strokeWidth="1.74375"
                />
              </svg>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="26"
                height="26"
                viewBox="0 0 26 26"
                fill="none"
              >
                <path
                  d="M12.4833 17.4126C13.234 17.4126 13.5822 16.8902 13.5822 16.1938V15.8238C13.604 14.3873 14.1264 13.7888 15.8674 12.5924C17.7283 11.3295 18.9141 9.87164 18.9141 7.77121C18.9141 4.50682 16.2593 2.63528 12.9619 2.63528C10.5026 2.63528 8.33719 3.79971 7.41233 5.89968C7.1839 6.41132 7.08594 6.91182 7.08594 7.32503C7.08594 7.94532 7.44483 8.38082 8.10876 8.38082C8.66358 8.38082 9.03362 8.05443 9.19704 7.52096C9.76254 5.4535 11.1229 4.67025 12.8858 4.67025C15.0076 4.67025 16.6618 5.86718 16.6618 7.76053C16.6618 9.31636 15.6933 10.1869 14.3005 11.1665C12.5919 12.3528 11.3407 13.6259 11.3407 15.541V16.2263C11.3407 16.9227 11.7218 17.4126 12.4833 17.4126ZM12.4828 23.3647C13.3422 23.3647 14.0279 22.6683 14.0279 21.8196C14.029 21.6163 13.9898 21.4149 13.9126 21.227C13.8353 21.039 13.7215 20.8682 13.5778 20.7245C13.4341 20.5808 13.2634 20.467 13.0754 20.3898C12.8874 20.3125 12.686 20.2733 12.4828 20.2744C11.6341 20.2744 10.9265 20.9602 10.9265 21.8196C10.9265 22.6683 11.6341 23.3647 12.4828 23.3647Z"
                  fill="#F5E3AE"
                />
              </svg>
            </div>
          </div>
        </Tooltip> */}
        {/* <div className={styles.modalbtn} onClick={toggleModal}>click here</div> */}
        {/* {isOpen && <Modal closeModal={toggleModal} />} */}
        <Image
          className={styles.rouletteWheel}
          src="/Registration/RouletteWheel.png"
          alt=""
          width={460}
          height={440}
          ref={wheelRef}
        />
      </div>
    </>
  );
}
