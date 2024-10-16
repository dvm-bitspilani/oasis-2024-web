"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import styles from "./profshow.module.scss";
import Link from "next/link";
import Image from "next/image";
import grunge from "@/assets/Landing/Grunge.png";
import sm from "@/public/ProfShow/goat.png";
import vm from "@/public/ProfShow/vishalmishra.png";
import tyd from "@/public/ProfShow/theyellowdiaries.png";
import gif1 from "@/public/ProfShow/gif1.gif";
import { useRouter } from "next/navigation";

const eventDetails = [
  {
    title: "INDIE NITE",
    name: "THE YELLOW DIARY",
    date: "October 24",
    image: tyd,
  },
  {
    title: "BOLLYWOOD NITE",
    name: "VISHAL MISHRA",
    date: "October 26",
    image: vm,
  },
  {
    title: "HIP HOP NITE",
    name: "SEEDHE MAUT",
    date: "October 25",
    image: sm,
  },
];

const Shows = () => {
  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile =
        /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 960;

      if (isMobile) {
        router.push("/");
      }
    }
    document.body.style.overflow = "hidden";
  }, []);

  const [eventID, setEventID] = useState(0);
  const [progressKey, setProgressKey] = useState(0);

  const eventNameRef = useRef(null);
  const eventDateRef = useRef(null);
  const eventImageRef = useRef(null);
  const eventTitleRef = useRef(null);

  const animate = async () => {
    const nextID = (eventID + 1) % eventDetails.length;
    const tl = gsap.timeline();
    tl.to(
      [
        eventNameRef.current,
        eventDateRef.current,
        eventImageRef.current,
        eventTitleRef.current,
      ],
      {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setEventID(nextID);
          setProgressKey((prevKey) => prevKey + 1);

          gsap.to(
            [
              eventNameRef.current,
              eventDateRef.current,
              eventImageRef.current,
              eventTitleRef.current,
            ],
            {
              opacity: 1,
              duration: 0.5,
            }
          );
        },
      }
    );
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, 10000);

    return () => clearTimeout(timer);
  }, [eventID, progressKey]);

  const handleArrowClick = (direction: string) => {
    gsap.to(
      [
        eventNameRef.current,
        eventDateRef.current,
        eventImageRef.current,
        eventTitleRef.current,
      ],
      {
        opacity: 0,
        duration: 0.5,
        onComplete: () => {
          setEventID((prevID) => {
            const newID =
              direction === "left"
                ? (prevID - 1 + eventDetails.length) % eventDetails.length
                : (prevID + 1) % eventDetails.length;
            return newID;
          });
          setProgressKey((prevKey) => prevKey + 1);
          gsap.to(
            [
              eventNameRef.current,
              eventDateRef.current,
              eventImageRef.current,
              eventTitleRef.current,
            ],
            {
              opacity: 1,
              duration: 0.5,
            }
          );
        },
      }
    );
  };

  return (
    <>
      {/* <Preloader /> */}
      <div className={styles.profshow}>
        <Image
          src={grunge}
          alt="grunge effect"
          draggable={false}
          style={{
            height: "100lvh",
            width: "100vw",
            position: "absolute",
            pointerEvents: "none",
            top: 0,
            zIndex: 1,
          }}
        />
        <div className={styles.backBtn}>
          <Link href="/">
            <svg
              width="76"
              height="60"
              viewBox="0 0 76 60"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M33.7706 2.2295C32.7704 1.22965 31.4141 0.667969 29.9999 0.667969C28.5857 0.667969 27.2294 1.22965 26.2293 2.2295L2.22925 26.2295C1.22941 27.2296 0.667725 28.586 0.667725 30.0002C0.667725 31.4144 1.22941 32.7707 2.22925 33.7708L26.2293 57.7708C27.2351 58.7423 28.5823 59.2799 29.9807 59.2678C31.3791 59.2556 32.7168 58.6947 33.7056 57.7059C34.6945 56.717 35.2554 55.3794 35.2675 53.981C35.2797 52.5826 34.7421 51.2354 33.7706 50.2295L19.3333 35.3335H69.9999C71.4144 35.3335 72.771 34.7716 73.7712 33.7714C74.7713 32.7712 75.3333 31.4147 75.3333 30.0002C75.3333 28.5857 74.7713 27.2291 73.7712 26.2289C72.771 25.2287 71.4144 24.6668 69.9999 24.6668H19.3333L33.7706 9.77083C34.7704 8.77068 35.3321 7.41437 35.3321 6.00016C35.3321 4.58595 34.7704 3.22964 33.7706 2.2295Z"
                fill="white"
              />
            </svg>
          </Link>
        </div>
        <Image src={gif1} alt="gif" className={styles.backgroundGif} />
        <div className={styles.darkScreen} />
        <div className={styles.pageContent}>
          <div className={styles.eventName} ref={eventNameRef}>
            {eventDetails[eventID].name.split(" ").slice(0, -1).join(" ")}
            <br />
            {eventDetails[eventID].name.split(" ").slice(-1)}
            <div
              className={`${styles.eventDate} ${styles[`eventDate${eventID}`]}`}
              ref={eventDateRef}
            >
              {eventDetails[eventID].date}
            </div>
          </div>
          {eventDetails.map((event, index) => (
            <div
              key={index}
              className={styles.eventImageWrapper}
              style={{ display: index === eventID ? "block" : "none" }}
            >
              <Image
                src={event.image}
                alt={event.name}
                className={`${styles.eventImage} ${
                  styles[`eventImage${eventID}`]
                }`}
                ref={index === eventID ? eventImageRef : null}
              />
            </div>
          ))}
          <div className={styles.eventSelector}>
            <svg
              width="42"
              height="68"
              viewBox="0 0 42 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.leftArrow}
              onClick={() => handleArrowClick("left")}
            >
              <g>
                <path
                  d="M38.6667 60.6668L5.33337 34.0002L38.6667 7.3335V60.6668Z"
                  fill="white"
                />
                <path
                  d="M38.6667 60.6668L5.33337 34.0002L38.6667 7.3335V60.6668Z"
                  stroke="white"
                  strokeWidth="6.66667"
                  strokeLinecap="square"
                />
              </g>
            </svg>
            <div className={styles.eventTitle} ref={eventTitleRef}>
              {eventDetails[eventID].title}
            </div>
            <svg
              width="42"
              height="68"
              viewBox="0 0 42 68"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className={styles.rightArrow}
              onClick={() => handleArrowClick("right")}
            >
              <g>
                <path
                  d="M3.33329 60.6668L36.6666 34.0002L3.33329 7.3335V60.6668Z"
                  fill="white"
                />
                <path
                  d="M3.33329 60.6668L36.6666 34.0002L3.33329 7.3335V60.6668Z"
                  stroke="white"
                  strokeWidth="6.66667"
                  strokeLinecap="square"
                />
              </g>
            </svg>
            <div className={styles.progressBarContainer}>
              <div className={styles.progressBar} key={progressKey}></div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Shows;
