import styles from "./category.module.scss";

// import { DUMMY_DATA } from "@/data/EventsCarousel";

import { EventDataType } from "@/data/EventsCarousel";

import React, { useState, useEffect, useRef } from "react";

import EventCard from "../EventCard/EventCard";
import Carousel from "../Carousel/Carousel";
import axios from "axios";
import largeImage from "@/assets/Events/Carousel/eventLarge.png";

interface CategoryProps {
  onClose: () => void;
}

export default function Category({ onClose }: CategoryProps) {
  const [activeEvent, setActiveEvent] = useState<number | null>(null);
  const [carouselContent, setCarouselContent] = useState<EventDataType | null>(
    null
  );
  const [eventsList, seteventsList] = useState([]);
  const [isTransitioning, setIsTransitioning] = useState<boolean>(false);

  useEffect(() => {
    axios
      .get("https://bits-oasis.org/2024/main/registrations/events_details/")
      .then((res) => {
        const events = res.data;
        // console.log(events);
        seteventsList(events);
      });
  }, []);

  const eventClickHandler = (index: number) => {
    setActiveEvent(index);
    setCarouselContent(eventsList[index]);
    console.log(carouselContent);
  };

  const eventsArr = eventsList.map((event, index) => {
    const { name, about, img } = event;
    return (
      <EventCard
        key={index}
        name={name}
        // about={about}
        img={largeImage}
        onClick={() => {
          eventClickHandler(index);
        }}
      />
    );
  });

  // console.log(eventsList[0]);

  const transitionHelper = (dataIndex: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      if (activeEvent !== null) {
        setCarouselContent(eventsList[dataIndex]);
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

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    if (containerRef.current && scrollbarRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

      if (scrollHeight > clientHeight) {
        const maxScrollTopValue = scrollHeight - clientHeight;
        const percentage = (scrollTop / maxScrollTopValue) * 100;

        const mappedPercentage = 2 + (percentage * (70 - 2)) / 100;

        const clampedPercentage = Math.max(2, Math.min(mappedPercentage, 70));
        
        scrollbarRef.current.style.top = `${clampedPercentage}%`;
        console.log(scrollbarRef.current.style.top);
      }
    }
  };

  return (
    <>
      <div
        className={styles.mainContainer}
        onScroll={handleScroll}
        ref={containerRef}
      >
        <div className={styles.heading}>
          <h2>EVENTS</h2>
        </div>
        <div className={styles.scrollbar}>
          <div className={styles.rect}></div>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            className={styles.topicon}
          >
            <rect
              x="13.1367"
              y="4.56055"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 13.1367 4.56055)"
              fill="white"
            />
            <rect
              x="8.85938"
              y="0.279297"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 8.85938 0.279297)"
              fill="white"
            />
            <rect
              x="4.57422"
              y="4.56055"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 4.57422 4.56055)"
              fill="white"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            className={styles.bottomicon}
          >
            <rect
              x="13.1367"
              y="4.56055"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 13.1367 4.56055)"
              fill="white"
            />
            <rect
              x="8.85938"
              y="0.279297"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 8.85938 0.279297)"
              fill="white"
            />
            <rect
              x="4.57422"
              y="4.56055"
              width="4.28076"
              height="4.28076"
              transform="rotate(90 4.57422 4.56055)"
              fill="white"
            />
          </svg>
          <div
            className={styles.mainicon}
            ref={scrollbarRef}
            onScroll={handleScroll}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="9"
              height="103"
              viewBox="0 0 9 103"
              fill="none"
            >
              <rect
                x="8.84766"
                y="0.408203"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 0.408203)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="11.0117"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 11.0117)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="21.6172"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 21.6172)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="32.2227"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 32.2227)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="42.8262"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 42.8262)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="53.4297"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 53.4297)"
                fill="white"
              />
              <rect
                x="8.84766"
                y="64.0352"
                width="7.06956"
                height="8.58447"
                transform="rotate(90 8.84766 64.0352)"
                fill="white"
              />
              {/* <rect
            x="8.84766"
            y="74.6387"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 74.6387)"
            fill="white"
          />
          <rect
            x="8.84766"
            y="85.2422"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 85.2422)"
            fill="white"
          />
          <rect
            x="8.84766"
            y="95.8457"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 95.8457)"
            fill="white"
          /> */}
            </svg>
          </div>
          <div className={styles.rightrect}></div>
        </div>
        {/* <button onClick={onClose}>
          <svg
            viewBox="0 0 13 13"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M0.349393 12.5238V9.8518H2.78087V7.42032H5.18564V5.25603H2.78087V2.85127H0.349393V0.179315H3.04807V2.6108H5.45283V4.98884H7.64384V2.6108H10.0486V0.179315H12.774V2.85127H10.3158V5.25603H7.91103V7.42032H10.3158V9.8518H12.774V12.5238H10.0486V10.119H7.64384V7.68752H5.45283V10.119H3.04807V12.5238H0.349393Z"
              fill="#ffcff3"
            />
          </svg>
        </button> */}
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
