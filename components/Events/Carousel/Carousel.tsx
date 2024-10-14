import Image from "next/image";
import styles from "./carousel.module.scss";

import arrow from "@/assets/Events/Carousel/carouselArrow.png";

import { EventDataType } from "@/data/EventsCarousel";
import largeImage from "@/assets/Events/Carousel/eventLarge.png";

interface CarouselProps {
  activeEvent: number | null;
  maxIndex: number;
  isTransitioning: boolean;
  carouselContent: EventDataType | null;
  onClose: () => void;
  onNext: () => void;
  onPrev: () => void;
}

export default function Carousel({
  activeEvent,
  maxIndex,
  isTransitioning,
  carouselContent,
  onClose,
  onNext,
  onPrev,
}: CarouselProps) {
  console.log(carouselContent);
  return (
    <div className={styles.container}>
      <div className={styles.heading}>
        <h2>EVENTS</h2>
      </div>
      <button onClick={onClose}>
        <svg viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M0.349393 12.5238V9.8518H2.78087V7.42032H5.18564V5.25603H2.78087V2.85127H0.349393V0.179315H3.04807V2.6108H5.45283V4.98884H7.64384V2.6108H10.0486V0.179315H12.774V2.85127H10.3158V5.25603H7.91103V7.42032H10.3158V9.8518H12.774V12.5238H10.0486V10.119H7.64384V7.68752H5.45283V10.119H3.04807V12.5238H0.349393Z"
            fill="#ffcff3"
          />
        </svg>
      </button>
      <div className={styles.carouselContainer}>
        <Image
          src={arrow}
          alt="left arrow"
          className={`${styles.arrow} ${styles.left}`}
          onClick={onPrev}
        />
        <div className={styles.cardContainer} id="card">
          <div
            className={`${styles.carouselCard} ${
              isTransitioning ? styles.closed : ""
            }`}
          >
            <section className={styles.cardHeading}>
              <h3>{carouselContent?.name}</h3>
              {/* <p>{carouselContent?.club}</p> */}
            </section>
            <section className={styles.cardContent}>
              <div className={styles.image}>
                {carouselContent?.img_url === "Nill" ? (
                  <Image src={largeImage} alt="Event image" />
                ) : (
                  <img src={carouselContent?.img_url} alt="event image" />
                )}{" "}
                <div className={styles.overlay}></div>
              </div>

              <p>{carouselContent?.about}</p>
            </section>
            <section className={styles.cardFooter}>
              <h3>
                {activeEvent !== null ? activeEvent + 1 : 0} / {maxIndex + 1}
              </h3>
            </section>
          </div>
        </div>
        <Image
          src={arrow}
          alt="right arrow"
          className={`${styles.arrow} ${styles.right}`}
          onClick={onNext}
        />
      </div>
    </div>
  );
}
