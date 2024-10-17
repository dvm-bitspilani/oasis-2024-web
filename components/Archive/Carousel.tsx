import Image from "next/image";
import styles from "./carousel.module.scss";

import { StaticImageData } from "next/image";

import one from "../../assets/Gallery/one.jpg";
import two from "../../assets/Gallery/two.jpg";
import three from "../../assets/Gallery/three.jpg";
import four from "../../assets/Gallery/four.jpg";
import five from "../../assets/Gallery/five.jpg";
import six from "../../assets/Gallery/six.jpg";
import seven from "../../assets/Gallery/seven.jpg";
import eight from "../../assets/Gallery/eight.jpg";
import nine from "../../assets/Gallery/nine.jpg";
import ten from "../../assets/Gallery/ten.jpg";
import eleven from "../../assets/Gallery/eleven.jpg";
import twelve from "../../assets/Gallery/twelve.jpg";
import thirteen from "../../assets/Gallery/thirteen.jpg";
import fourteen from "../../assets/Gallery/fourteen.jpg";
import sixteen from "../../assets/Gallery/sixteen.jpg";
import seventeen from "../../assets/Gallery/seventeen.jpg";
import eightteen from "../../assets/Gallery/eightteen.jpg";
import nineteen from "../../assets/Gallery/nineteen.jpg";
import twenty from "../../assets/Gallery/twenty.jpg";
import twentyone from "../../assets/Gallery/twentyone.jpg";

const images = [
  one,
  four,
  three,
  five,
  two,
  seven,
  six,
  ten,
  nine,
  eight,
  eleven,
  twelve,
  thirteen,
  fourteen,
  sixteen,
  sixteen,
  seventeen,
  twenty,
  nineteen,
  eightteen,
  twentyone,
];

interface CarouselProps {
  activeEvent: number | null;
  maxIndex: number;
  isTransitioning: boolean;
  carouselContent: { image: StaticImageData };
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Carousel({
  activeEvent,
  onClose,
  onNext,
  onPrev,
}: CarouselProps) {

  const currentImage = activeEvent !== null ? images[activeEvent] : images[0];

  return (
    <div className={styles.container}>
      <button onClick={onClose}>
        <svg
          width="40"
          height="40"
          viewBox="0 0 40 40"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <g clipPath="url(#clip0_3432_1022)">
            <path
              d="M37.3337 37.3334L2.66699 2.66675M37.3337 2.66675L2.66699 37.3334"
              stroke="#FFE887"
              stroke-width="4.33333"
              stroke-linecap="round"
            />
          </g>
          <defs>
            <clipPath id="clip0_3432_1022">
              <rect width="40" height="40" fill="white" />
            </clipPath>
          </defs>
        </svg>
      </button>
      <div className={styles.carouselContainer}>
        <div onClick={onPrev} className={styles.left}>
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
        <div className={styles.cardContainer} id="card">
            <section className={styles.cardContent}>
              <Image src={currentImage} alt={`Event image ${activeEvent}`} className="styles.image"  draggable="false" />
            </section>
        </div>
        <div onClick={onNext} className={styles.right}>
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
    </div>
  );
}
