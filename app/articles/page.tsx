"use client";

import React, { useState } from "react";
import styles from "./articles.module.scss";

import Grid from "@/components/Landing/Grid/Grid";
import Grunge from "@/components/Landing/Backdrop/Grunge";
import Glow from "@/components/Landing/Glow/Glow";
import SuitBackground from "@/components/Landing/Backdrop/Backdrop";
import BackButton from "@/components/Registration/BackButton/BackButton";
import Link from "next/link";
import PrePreloader from "@/components/PreloaderProMax/PreloaderProMax";
import CursorEffect from "@/components/CursorEffect/CursorEffect";

import PDFDocument from "@/components/Articles/PDFDocument/PDFDocument";

const pdfs = [
  "https://drive.google.com/file/d/1fvW_6-t1eB3YPA2P4_ziUHVObUl746LN/preview",
  "https://drive.google.com/file/d/1v_O3luxfxz2qymd8F1iCbWN9HgUiVLG-/preview",
  "https://drive.google.com/file/d/1LlmyDNsLjId_NFDq6_5owTwxvTF5vjaK/preview",
  "https://drive.google.com/file/d/1hQg2_-QmQcUsmvn-LCLhdyDwZbCcCHCO/preview",
  "https://drive.google.com/file/d/1MncInnskmIJfEEpGzx8bRdMM5AgA7hbl/preview",
  "https://drive.google.com/file/d/1V_uH5Q4egYprZH6NXZnkat_LbpYQ9-4G/preview",
];

const titles = [
  "Smriti: Day-1 by HPC",
  "Smriti: Day-2 by HPC",
  "Smriti: Day-3 by HPC",
  "The Seafarer's Scrolls: Issue-1 by EPC",
  "The Seafarer's Scrolls: Issue-2 by EPC",
  "The Seafarer's Scrolls: Issue-3 by EPC",
];

const Articles: React.FC = () => {
  const [pdfIndex, setPdfIndex] = useState(0);

  const handleClick = (direction: string) => {
    if (direction === "forward") {
      if (pdfIndex < pdfs.length - 1) {
        setPdfIndex(pdfIndex + 1);
      } else {
        setPdfIndex(0);
      }
    } else {
      if (pdfIndex > 0) {
        setPdfIndex(pdfIndex - 1);
      } else {
        setPdfIndex(pdfs.length - 1);
      }
    }
  };
  return (
    <>
      <PrePreloader />
      <CursorEffect />
      <div className={styles.epcBack}>
        {/* <Glow /> */}
        <Grunge />
        <Grid />
        <SuitBackground />
      </div>
      <div className={styles.pageWrapper}>
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

          <h2>ARTICLES</h2>

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
        <div className={styles.backBtn}>
          <Link href="/">
            <BackButton />
          </Link>
        </div>
        <div className={styles.carouselButtons}>
          <div
            className={styles.carouselLeft}
            onClick={() => handleClick("backward")}
          >
            <svg
              width="64"
              height="66"
              viewBox="0 0 64 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4256_392)">
                <mask
                  id="mask0_4256_392"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="1"
                  width="64"
                  height="65"
                >
                  <path d="M0 1.42871H64V65.4287H0V1.42871Z" fill="white" />
                </mask>
                <g mask="url(#mask0_4256_392)">
                  <path
                    d="M32 1.42871C49.6448 1.42871 64 15.784 64 33.4287C64 51.0735 49.6448 65.4287 32 65.4287C14.3552 65.4287 0 51.0735 0 33.4287C0 15.784 14.3552 1.42871 32 1.42871ZM32 62.2287C47.9061 62.2287 60.8 49.3348 60.8 33.4287C60.8 17.5226 47.9061 4.62871 32 4.62871C16.0939 4.62871 3.2 17.5226 3.2 33.4287C3.2 49.3348 16.0939 62.2287 32 62.2287Z"
                    fill="url(#paint0_linear_4256_392)"
                  />
                  <path
                    d="M30.2283 25.6013C29.9282 25.3013 29.5213 25.1328 29.0971 25.1328C28.6728 25.1328 28.2659 25.3013 27.9659 25.6013L20.7659 32.8013C20.4659 33.1013 20.2974 33.5082 20.2974 33.9325C20.2974 34.3567 20.4659 34.7636 20.7659 35.0637L27.9659 42.2637C28.2676 42.5551 28.6718 42.7164 29.0913 42.7127C29.5108 42.7091 29.9121 42.5408 30.2088 42.2442C30.5054 41.9475 30.6737 41.5462 30.6773 41.1267C30.681 40.7072 30.5197 40.303 30.2283 40.0013L25.8971 35.5325H41.0971C41.5214 35.5325 41.9284 35.3639 42.2284 35.0638C42.5285 34.7638 42.6971 34.3568 42.6971 33.9325C42.6971 33.5081 42.5285 33.1012 42.2284 32.8011C41.9284 32.501 41.5214 32.3325 41.0971 32.3325H25.8971L30.2283 27.8637C30.5282 27.5636 30.6967 27.1567 30.6967 26.7325C30.6967 26.3082 30.5282 25.9013 30.2283 25.6013Z"
                    fill="url(#paint1_linear_4256_392)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_4256_392"
                  x1="12"
                  y1="10.5"
                  x2="53.4999"
                  y2="60.5001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00120607" stopColor="#876D24" />
                  <stop offset="0.28" stopColor="#F3D57B" />
                  <stop offset="0.66" stopColor="#B69637" />
                  <stop offset="1" stopColor="#DCBF69" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4256_392"
                  x1="24.4973"
                  y1="27.6246"
                  x2="35.1058"
                  y2="43.9101"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop offset="0.00120607" stopColor="#876D24" />
                  <stop offset="0.28" stopColor="#F3D57B" />
                  <stop offset="0.66" stopColor="#B69637" />
                  <stop offset="1" stopColor="#DCBF69" />
                </linearGradient>
                <clipPath id="clip0_4256_392">
                  <rect
                    width="64"
                    height="65"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
          <div
            className={styles.carouselRight}
            onClick={() => handleClick("forward")}
          >
            <svg
              width="64"
              height="66"
              viewBox="0 0 64 66"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clipPath="url(#clip0_4256_385)">
                <mask
                  id="mask0_4256_385"
                  maskUnits="userSpaceOnUse"
                  x="0"
                  y="1"
                  width="64"
                  height="65"
                >
                  <path d="M64 1.42871H0V65.4287H64V1.42871Z" fill="white" />
                </mask>
                <g mask="url(#mask0_4256_385)">
                  <path
                    d="M32 1.42871C14.3552 1.42871 0 15.784 0 33.4287C0 51.0735 14.3552 65.4287 32 65.4287C49.6448 65.4287 64 51.0735 64 33.4287C64 15.784 49.6448 1.42871 32 1.42871ZM32 62.2287C16.0939 62.2287 3.2 49.3348 3.2 33.4287C3.2 17.5226 16.0939 4.62871 32 4.62871C47.9061 4.62871 60.8 17.5226 60.8 33.4287C60.8 49.3348 47.9061 62.2287 32 62.2287Z"
                    fill="url(#paint0_linear_4256_385)"
                  />
                  <path
                    d="M33.7715 25.6013C34.0716 25.3013 34.4785 25.1328 34.9027 25.1328C35.327 25.1328 35.7339 25.3013 36.0339 25.6013L43.2339 32.8013C43.5339 33.1013 43.7024 33.5082 43.7024 33.9325C43.7024 34.3567 43.5339 34.7636 43.2339 35.0637L36.0339 42.2637C35.7322 42.5551 35.328 42.7164 34.9085 42.7127C34.489 42.7091 34.0877 42.5408 33.791 42.2442C33.4944 41.9475 33.3261 41.5462 33.3225 41.1267C33.3188 40.7072 33.4801 40.303 33.7715 40.0013L38.1027 35.5325H22.9027C22.4784 35.5325 22.0714 35.3639 21.7714 35.0638C21.4713 34.7638 21.3027 34.3568 21.3027 33.9325C21.3027 33.5081 21.4713 33.1012 21.7714 32.8011C22.0714 32.501 22.4784 32.3325 22.9027 32.3325H38.1027L33.7715 27.8637C33.4716 27.5636 33.3031 27.1567 33.3031 26.7325C33.3031 26.3082 33.4716 25.9013 33.7715 25.6013Z"
                    fill="url(#paint1_linear_4256_385)"
                  />
                </g>
              </g>
              <defs>
                <linearGradient
                  id="paint0_linear_4256_385"
                  x1="14.5"
                  y1="9.5"
                  x2="50.4999"
                  y2="61.0001"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#876D24" />
                  <stop offset="0.28" stopColor="#F3D57B" />
                  <stop offset="0.66" stopColor="#B69637" />
                  <stop offset="1" stopColor="#DCBF69" />
                </linearGradient>
                <linearGradient
                  id="paint1_linear_4256_385"
                  x1="26.3777"
                  y1="27.3499"
                  x2="35.2581"
                  y2="43.5368"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stopColor="#876D24" />
                  <stop offset="0.28" stopColor="#F3D57B" />
                  <stop offset="0.66" stopColor="#B69637" />
                  <stop offset="1" stopColor="#DCBF69" />
                </linearGradient>
                <clipPath id="clip0_4256_385">
                  <rect
                    width="64"
                    height="65"
                    fill="white"
                    transform="translate(0 0.5)"
                  />
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        <div className={styles.pdfContainer}>
          <PDFDocument pdfFile={pdfs[pdfIndex]} title={titles[pdfIndex]}/>
        </div>
      </div>
    </>
  );
};

export default Articles;
