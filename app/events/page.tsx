"use client";

import React, { useState, useRef, useEffect } from "react";
import styles from "./events.module.scss";
import { useRouter } from "next/navigation";
import Folder from "@/components/Events/Folder/Folder";
import Category from "@/components/Events/Category/Category";

// import music from "../../assets/Events/Folders/Comic photo effect 3.png";
// import dance from "../../assets/Events/Folders/Comic photo effect 4.png";
// import quiz from "../../assets/Events/Folders/Comic photo effect 6.png";
// import camera from "../../assets/Events/Folders/Comic photo effect 8.png";
// import drama from "../../assets/Events/Folders/Comic photo effect 7.png";
// import fashion from "../../assets/Events/Folders/Comic photo effect 5.png";
import line from "../../assets/Events/Folders/lines.png";
import musicmobile from "../../assets/Events/Folders/1.png";
import dancemobile from "../../assets/Events/Folders/2.png";
import quizmobile from "../../assets/Events/Folders/3.png";
import dramamobile from "../../assets/Events/Folders/5.png";
import fashionmobile from "../../assets/Events/Folders/4.png";
import cameramobile from "../../assets/Events/Folders/6.png";
import musicbg from "../../assets/Events/Folders/musicbg.png";
import quizbg from "../../assets/Events/Folders/quizbg.png";
import dramabg from "../../assets/Events/Folders/dramabg.png";
import dancebg from "../../assets/Events/Folders/dancebg.png";
import miscbg from "../../assets/Events/Folders/miscbg.png";
import camerabg from "../../assets/Events/Folders/camerabg.png";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import CursorEffect from "@/components/CursorEffect/CursorEffect";
import SuitBackground from "@/components/Landing/Backdrop/Backdrop";
import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import Grid from "@/components/Landing/Grid/Grid";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Link from "next/link";
import RegBtn from "@/components/Landing/Navbar/RegBtn/RegBtn";
import Image from "next/image";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function EventsPage() {
  const [category, setCategory] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleSelect(selectedCategory: string) {
    setCategory(selectedCategory);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setCategory("");
  }

  const eventrowRef: any = useRef(null);

  useGSAP(
    () => {
      const tl = gsap.timeline();

      // if(eventrowRef)

      tl.from(eventrowRef.current.children[0], {
        scale: 0,
        duration: 0.5,
        ease: "power2.out",
        delay: 0.5,
      })
        .from(
          eventrowRef.current.children[1],
          {
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          eventrowRef.current.children[2],
          {
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          eventrowRef.current.children[3],
          {
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          eventrowRef.current.children[4],
          {
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        )
        .from(
          eventrowRef.current.children[5],
          {
            scale: 0,
            duration: 0.5,
            ease: "power2.out",
          },
          "-=0.25"
        );
    },
    { dependencies: [] }
  );

  const router = useRouter();
  useEffect(() => {
    if (typeof window !== "undefined") {
      const isMobile =
        /Mobi|Android/i.test(navigator.userAgent) || window.innerWidth <= 800;

      if (isMobile) {
        router.push("/");
      }
    }
    document.body.style.overflowY = "scroll";
    document.body.style.overflowX = "hidden";
  }, []);

  return (
    <>
      <PrePreloader />
      <CursorEffect />
      <div className={styles.eventsBack}>
        {/* <Glow /> */}
        <Grunge />
        <Grid />
        <SuitBackground />
        <svg
          width="1920"
          height="1067"
          viewBox="0 0 1920 1067"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className={styles.line}
        >
          <path
            d="M1924.5 98.5004C1924.5 98.5004 1563.69 727.885 1063.69 838.594C1010.5 850.37 925.061 863.945 833 853.5C438.161 808.702 571.566 243.084 112.156 306.851C73.8775 312.164 36.2551 321.241 -0.499156 333.498"
            stroke="#F8D848"
            stroke-width="1.5"
          />
          <path
            d="M1938.5 4.73586C1938.5 4.73586 1569.61 665.28 1069.5 776C979.358 795.956 941 808 861.5 787.5C504.475 695.436 641.513 170.288 131.5 251C85.8957 258.217 40.8328 267.997 -2.98607 282.199"
            stroke="#F8D848"
            stroke-width="1.5"
          />
          <path
            d="M1921 253.5C1921 253.5 1598.27 759.911 1120.5 944.5C1054.5 970 856 989.795 761.5 970.5C355 887.5 406 279.5 -2.99938 438.5"
            stroke="#F8D848"
            stroke-width="1.5"
          />
          <path
            d="M1921.5 179.499C1921.5 179.499 1556.16 768.919 1060.5 897.999C964.5 922.999 880.579 932.741 789.001 922.999C413 882.999 470.501 196.999 0.00129466 375.999"
            stroke="#F8D848"
            stroke-width="1.5"
          />
        </svg>
      </div>

      <div className={styles.ham}>
        <Link href="/">
          <BackButton />
        </Link>
      </div>

      <div className={styles.reg}>
        <RegBtn />
      </div>

      <div className={styles.eventsPage} id="contactUs">
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
          <h2>EVENTS</h2>
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

        <div className={styles.gridcontainer}>
          <div className={styles.row} ref={eventrowRef}>
            <Link href="/events/music">
              <div className={styles.box}>
                <Image src={musicbg} alt="music" width={484} height={300} />
              </div>
            </Link>
            <Link href="/events/quizzes">
              <div className={styles.box}>
                <Image src={quizbg} alt="music" width={484} height={300} />
              </div>
            </Link>
            <Link href="/events/drama">
              <div className={styles.box}>
                <Image src={dramabg} alt="music" width={484} height={300} />
              </div>
            </Link>
            <Link href="/events/dance">
              <div className={styles.box}>
                <Image src={dancebg} alt="music" width={484} height={300} />
              </div>
            </Link>
            <Link href="/events/photography">
              <div className={styles.box}>
                <Image src={camerabg} alt="music" width={484} height={300} />
              </div>
            </Link>
            <Link href="/events/misc">
              <div className={styles.box}>
                <Image src={miscbg} alt="music" width={484} height={300} />
              </div>
            </Link>
          </div>
        </div>

        <div className={styles.mobilecontainer}>
          <Link href="/events/music">
            <Image
              src={musicmobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
          <Link href="/events/dance">
            <Image
              src={dancemobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
          <Link href="/events/quizzes">
            <Image
              src={quizmobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
          <Link href="/events/photography">
            <Image
              src={cameramobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
          <Link href="/events/drama">
            <Image
              src={dramamobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
          <Link href="/events/misc">
            <Image
              src={fashionmobile}
              alt="music"
              width={312}
              height={132}
              className={styles.mobileimg}
            />
          </Link>
        </div>
      </div>
    </>
  );
}
