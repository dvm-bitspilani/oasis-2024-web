"use client";

import React, { useRef, useState } from "react";
import styles from "./dev.module.scss";

import Grid from "@/components/Landing/Grid/Grid";
import Grunge from "@/components/Landing/Backdrop/Grunge";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import RegBtn from "@/components/Landing/Navbar/RegBtn/RegBtn";
import CursorEffect from "@/components/CursorEffect/CursorEffect";
import SuitBackground from "@/components/Landing/Backdrop/Backdrop";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Link from "next/link";
import card from "../../assets/Devs/devcard.png";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";
import front from "../../assets/Devs/front.png";
import back from "../../assets/Devs/back.png";
import design from "../../assets/Devs/design.png";
import video from "../../assets/Devs/video.png";

export default function DevPage() {
  const handleBackButtonClick = () => {
    localStorage.removeItem("hasReloaded");
  };

  const verticalRef: any = useRef(null);
  const backBtn: any = useRef(null);
  const groupRef: any = useRef(null);
  const [currIndex, setIndex] = useState<number>(0);

  // const leftValue = (window.innerWidth * 0.9 - window.innerWidth * 0.675 - 300) / 2;

  useGSAP(
    () => {
      const leftValue =
        (window.innerWidth * 0.9 - window.innerWidth * 0.675 - 300) / 2;
      const tl = gsap.timeline();

      tl.from(
        verticalRef.current.children[0],
        {
          // scale: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.5,
          left: leftValue,
      })
        .from(
          verticalRef.current.children[1],
          {
            // scale: 0,
            duration: 0.5,
            ease: "power2.out",
            left: leftValue,
          },
          "-=0.25"
        )
        .from(
          verticalRef.current.children[2],
          {
            // scale: 0,
            duration: 0.5,
            ease: "power2.out",
            left: leftValue,
          },
          "-=0.25"
        )
        .from(
          verticalRef.current.children[3],
          {
            // scale: 0,
            duration: 0.5,
            ease: "power2.out",
            left: leftValue,
          },
          "-=0.25"
        );
    },
    { dependencies: [] }
  );

  const showCards = (index: number) => {
    setIndex(index);
    animate(index);
  };

  const animate = (index: number) => {
    const leftValue =
      (window.innerWidth * 0.9 - window.innerWidth * 0.675 - 300) / 2;
    const tl = gsap.timeline();

    for (let i = 0; i < verticalRef.current.children.length; i++) {
      if (i !== index) {
        tl.set(verticalRef.current.children[i], { display: "none" });
      }
    }

    tl.set(backBtn.current, { display: "block" });

    tl.set(verticalRef.current.children[index], { display: "block" }).to(
      verticalRef.current.children[index],
      {
        scale: 1.3,
        duration: 0.5,
        ease: "power2.out",
        left: leftValue,
      }
    );

    const groupContainer = groupRef.current.children[index];
    // console.log(groupContainer);
    tl.set(groupContainer, { display: "flex" });
    tl.to(groupContainer.children, {
      opacity: 1,
      // display: "block",
      duration: 0.5,
      stagger: 0.2,
      ease: "power2.out",
    });
  };

  const handleCardAnimation = () => {
    const leftValue =
      (window.innerWidth * 0.9 - window.innerWidth * 0.675 - 300) / 2 +
      currIndex * ((window.innerWidth * 0.9) / 4);
    const tl = gsap.timeline();

    const groupContainer = groupRef.current.children[currIndex];

    tl.to(groupContainer.children, {
      opacity: 0,
      duration: 0.2,
      stagger: 0.2,
      ease: "power2.out",
    });

    tl.set(groupContainer, { display: "none" });

    tl.to(verticalRef.current.children[currIndex], {
      scale: 1,
      duration: 0.5,
      ease: "power2.out",
      left: leftValue,
    });

    for (let i = 0; i < verticalRef.current.children.length; i++) {
      if (i !== currIndex) {
        // tl.set(verticalRef.current.children[i], { display: "block" });
        tl.to(
          verticalRef.current.children[i],
          {
            display: "block",
            duration: 0.5,
            ease: "power2.inOut",
          },
          "-=0.5"
        );
      }
    }

    tl.set(backBtn.current, { display: "none" });
  };

  return (
    <>
      <PrePreloader />
      <CursorEffect />
      <div className={styles.devBack}>
        {/* <Glow /> */}
        <Grunge />
        <Grid />
        <SuitBackground />
      </div>

      <div className={styles.ham}>
        <Link href="/" onClick={handleBackButtonClick}>
          <BackButton />
        </Link>
      </div>

      <div className={styles.back} ref={backBtn} onClick={handleCardAnimation}>
        <BackButton />
      </div>

      <div className={styles.reg}>
        <RegBtn />
      </div>

      <div className={styles.devwrapper}>
        <div className={styles.heading}>
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M15.5643 5.99879C18.2741 9.63916 22.9412 10.5676 25.0488 10.4963C20.5324 7.9262 19.0246 5.93755 19.6291 3.64304C20.0806 1.92922 23.6186 2.21528 25.5005 2.57222C23.9197 1.28723 20.0808 -0.940088 17.3709 0.430568C14.661 1.80122 14.6074 4.71336 15.5643 5.99879Z"
              fill="#E5C66C"
            />
            <path
              d="M25.5 13.5849V13.5867V15.9536C22.1773 15.6377 14.79 16.522 11.8228 22.5858L8.80912 19.7434L10.6637 17.6116C10.9728 16.6642 11.0346 15.0535 8.80912 16.1904L7.41821 17.6116C6.18234 16.5856 2.96989 14.3447 0.00361342 13.5858C2.96989 12.8269 6.18234 10.586 7.41821 9.56001L8.80912 10.9812C11.0346 12.1182 10.9728 10.5075 10.6637 9.56001L8.80912 7.42821L11.8228 4.58582C14.79 10.6496 22.1773 11.5339 25.5 11.2181V13.5849Z"
              fill="#E5C66C"
            />
            <path
              d="M15.5638 21.7301C18.2736 17.5696 22.9407 16.5085 25.0484 16.5901C20.5319 19.5273 19.0241 21.8 19.6286 24.4223C20.0801 26.381 23.6181 26.0541 25.5 25.6461C23.9192 27.1147 20.0803 29.6602 17.3704 28.0937C14.6605 26.5273 14.6069 23.1991 15.5638 21.7301Z"
              fill="#E5C66C"
            />
            <path
              d="M27 13.5849V13.5867L27 22.5858H30L30 13.5867V13.5849V4.58582H27V13.5849Z"
              fill="#E5C66C"
            />
            <path
              d="M33 13.5848V13.5868V15.933C34.1538 16.107 37.0154 17.081 39.2308 19.5858C39.1538 18.89 38.9077 17.342 38.5385 16.7158L41.9989 13.5858L38.5385 10.4559C38.9077 9.82967 39.1538 8.28159 39.2308 7.58582C37.0154 10.0906 34.1538 11.0647 33 11.2386V13.5848Z"
              fill="#E5C66C"
            />
          </svg>
          <h2>DEVELOPERS</h2>
          <svg
            width="42"
            height="29"
            viewBox="0 0 42 29"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M26.4357 5.99879C23.7259 9.63916 19.0588 10.5676 16.9512 10.4963C21.4676 7.9262 22.9754 5.93755 22.3709 3.64304C21.9194 1.92922 18.3814 2.21528 16.4995 2.57222C18.0803 1.28723 21.9192 -0.940088 24.6291 0.430568C27.339 1.80122 27.3926 4.71336 26.4357 5.99879Z"
              fill="#E5C66C"
            />
            <path
              d="M16.5 13.5849V13.5867V15.9536C19.8227 15.6377 27.21 16.522 30.1772 22.5858L33.1909 19.7434L31.3363 17.6116C31.0272 16.6642 30.9654 15.0535 33.1909 16.1904L34.5818 17.6116C35.8177 16.5856 39.0301 14.3447 41.9964 13.5858C39.0301 12.8269 35.8177 10.586 34.5818 9.56001L33.1909 10.9812C30.9654 12.1182 31.0272 10.5075 31.3363 9.56001L33.1909 7.42821L30.1772 4.58582C27.21 10.6496 19.8227 11.5339 16.5 11.2181V13.5849Z"
              fill="#E5C66C"
            />
            <path
              d="M26.4362 21.7301C23.7264 17.5696 19.0593 16.5085 16.9516 16.5901C21.4681 19.5273 22.9759 21.8 22.3714 24.4223C21.9199 26.381 18.3819 26.0541 16.5 25.6461C18.0808 27.1147 21.9197 29.6602 24.6296 28.0937C27.3395 26.5273 27.3931 23.1991 26.4362 21.7301Z"
              fill="#E5C66C"
            />
            <path
              d="M15 13.5849V13.5867L15 22.5858H12L12 13.5867V13.5849L12 4.58582H15L15 13.5849Z"
              fill="#E5C66C"
            />
            <path
              d="M9 13.5848V13.5868V15.933C7.84615 16.107 4.98462 17.081 2.76923 19.5858C2.84615 18.89 3.09231 17.342 3.46154 16.7158L0.00112629 13.5858L3.46154 10.4559C3.09231 9.82967 2.84615 8.28159 2.76923 7.58582C4.98462 10.0906 7.84615 11.0647 9 11.2386V13.5848Z"
              fill="#E5C66C"
            />
          </svg>
        </div>

        <div className={styles.verticalContainer} ref={verticalRef}>
          <div className={styles.verticalCard} onClick={() => showCards(0)}>
            <Image
              src={front}
              alt="dev"
              className={styles.cardImg}
              draggable={false}
            />
          </div>
          <div className={styles.verticalCard} onClick={() => showCards(1)}>
            <Image
              src={design}
              alt="dev"
              className={styles.cardImg}
              draggable={false}
            />
          </div>
          <div className={styles.verticalCard} onClick={() => showCards(2)}>
            <Image
              src={back}
              alt="dev"
              className={styles.cardImg}
              draggable={false}
            />
          </div>
          <div className={styles.verticalCard} onClick={() => showCards(3)}>
            <Image
              src={video}
              alt="dev"
              className={styles.cardImg}
              draggable={false}
            />
          </div>
        </div>
        <div className={styles.cardsContainer} ref={groupRef}>
          <div className={styles.groupContainer}>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
          </div>
          <div className={styles.groupContainer}>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
            <div className={styles.individualCard}>
              <Image
                src={card}
                alt="dev"
                className={styles.cardImg}
                draggable={false}
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
