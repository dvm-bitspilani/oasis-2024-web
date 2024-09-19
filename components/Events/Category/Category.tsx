import styles from "./category.module.scss";

import { DUMMY_DATA } from "@/data/EventsCarousel";

import { EventDataType } from "@/data/EventsCarousel";

import React, { useState } from "react";

import EventCard from "../EventCard/EventCard";
import Carousel from "../Carousel/Carousel";

interface CategoryProps {
  onClose: () => void;
}

export default function Category({ onClose }: CategoryProps) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [carouselContent, setCarouselContent] = useState<EventDataType | null>(
    null
  );
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  const eventClickHandler = (index: number) => {
    setActiveEvent(index);
    setCarouselContent(DUMMY_DATA[index]);
  };

  const eventsArr = DUMMY_DATA.map((event, index) => {
    const { name, desc, img } = event;
    return (
      <EventCard
        key={index}
        name={name}
        desc={desc}
        img={img}
        onClick={() => {
          eventClickHandler(index);
        }}
      />
    );
  });

  const transitionHelper = (dataIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (activeEvent !== null) {
        setCarouselContent(DUMMY_DATA[dataIndex]);
      }
      setIsTransitioning(false);
    }, 1000);
  };

  const nextEvent = () => {
    setActiveEvent((prev) => {
      if (prev !== null) {
        console.log(prev);
        if (prev === eventsArr.length - 1) {
          transitionHelper(0);
          return 0;
        } else {
          transitionHelper(prev + 1);
          return prev + 1;
        }
      } else {
        return null;
      }
    });
  };

  const prevEvent = () => {
    setActiveEvent((prev) => {
      if (prev !== null) {
        if (prev === 0) {
          transitionHelper(eventsArr.length - 1);
          return eventsArr.length - 1;
        } else {
          transitionHelper(prev - 1);
          return prev - 1;
        }
      } else {
        return null;
      }
    });
  };

  return (
    <>
      <div className={styles.mainContainer}>
        <div className={styles.heading}>
          <h2>EVENTS</h2>
        </div>
        <button onClick={onClose}>
          <svg
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.349393 12.5238V9.8518H2.78087V7.42032H5.18564V5.25603H2.78087V2.85127H0.349393V0.179315H3.04807V2.6108H5.45283V4.98884H7.64384V2.6108H10.0486V0.179315H12.774V2.85127H10.3158V5.25603H7.91103V7.42032H10.3158V9.8518H12.774V12.5238H10.0486V10.119H7.64384V7.68752H5.45283V10.119H3.04807V12.5238H0.349393Z"
              fill="#FFD600"
            />
          </svg>
        </button>
        <div className={styles.eventContainer}>{eventsArr}</div>
      </div>

      {activeEvent !== null && (
        <Carousel
          onClose={() => {
            setActiveEvent(null);
          }}
          onNext={nextEvent}
          onPrev={prevEvent}
          activeEvent={activeEvent}
          maxIndex={eventsArr.length - 1}
          carouselContent={carouselContent}
          isTransitioning={isTransitioning}
        />
      )}
    </>
  );
}
