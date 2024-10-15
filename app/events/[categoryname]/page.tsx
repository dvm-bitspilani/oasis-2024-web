"use client";

import { useEffect, useState } from "react";
import styles from "./categories.module.scss";
import Image from "next/image";
import Link from "next/link";
import grunge from "@/assets/Landing/Grunge.png";
import axios from "axios";
import eventcard from "../../../assets/Events/Carousel/eventcard.png";

const categories = [
  "music",
  "quiz",
  "drama",
  "dance",
  "fashion",
  "photography",
];

export default function Page({ params }: { params: { categoryname: string } }) {
  const [eventsList, setEventsList] = useState<any>([]);
  const [eventID, setEventID] = useState(0);

  useEffect(() => {
    axios
      .get("https://bits-oasis.org/2024/main/registrations/events_details/")
      .then((res) => {
        const events = res.data;
        const filteredEvents = events.filter((event: any) => {
          return event.categories.some(
            (cat: any) =>
              cat.toLowerCase() === params.categoryname.toLowerCase()
          );
        });
        console.log(filteredEvents);
        setEventsList(filteredEvents);
      });
  }, []);

  useEffect(() => {
    if (!categories.includes(params.categoryname)) {
      window.location.href = "/404";
    }
  }, []);

  const handleCarousel = (direction: string) => {
    setEventID((prevID) => {
      const newID =
        direction === "left"
          ? (prevID - 1 + eventsList.length) % eventsList.length
          : (prevID + 1) % eventsList.length;
      return newID;
    });
  };
  return (
    <div className={styles.pageBody}>
      <div className={styles.pageContainer}>
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

        <div className={styles.textBackground}>
          <h1 className={styles.categoryTitle1}>
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
          </h1>
          <h1 className={styles.categoryTitle2}>
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
            {params.categoryname.toUpperCase()}
          </h1>
        </div>

        <div className={styles.eventDisplay}>
          <div className={styles.leftContent}>
            <div className={styles.eventTitle}>
              {eventsList[eventID]?.name || "name"}
            </div>
            <div className={styles.eventSubTitle}>
              <div className={styles.clubName}>
                Organizer: {eventsList[eventID]?.organizer || ""}
              </div>
              <div className={styles.location}>
                <svg
                  width="18"
                  height="26"
                  viewBox="0 0 18 26"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9 24.1111C13.4444 17.8889 17 12.5556 17 9C17 6.87827 16.1571 4.84344 14.6569 3.34315C13.1566 1.84285 11.1217 1 9 1C6.87827 1 4.84344 1.84285 3.34315 3.34315C1.84285 4.84344 1 6.87827 1 9C1 12.5556 4.55556 17.8889 9 24.1111Z"
                    stroke="#FECE93"
                    strokeWidth="1.77778"
                  />
                  <path
                    d="M12.5555 8.99989C12.5555 9.94288 12.1809 10.8473 11.5141 11.514C10.8473 12.1808 9.94296 12.5554 8.99997 12.5554C8.05698 12.5554 7.15261 12.1808 6.48581 11.514C5.81901 10.8473 5.44441 9.94288 5.44441 8.99989C5.44441 8.0569 5.81901 7.15253 6.48581 6.48573C7.15261 5.81894 8.05698 5.44434 8.99997 5.44434C9.94296 5.44434 10.8473 5.81894 11.5141 6.48573C12.1809 7.15253 12.5555 8.0569 12.5555 8.99989Z"
                    stroke="#FECE93"
                    strokeWidth="1.77778"
                  />
                </svg>

                {eventsList[eventID]?.venue_name || "TBA"}
              </div>
            </div>
            <div className={styles.eventContact}>
              Contact: {eventsList[eventID]?.contact || "N/A"}
            </div>
            <div className={styles.carouselControl}>
              <div
                className={styles.leftButton}
                onClick={() => handleCarousel("left")}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.1665 22H40.8332M10.1665 22L21.1665 11M10.1665 22L21.1665 33"
                    stroke="#FFE887"
                    strokeWidth="3.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <div
                className={styles.rightButton}
                onClick={() => handleCarousel("right")}
              >
                <svg
                  width="44"
                  height="44"
                  viewBox="0 0 44 44"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M33.8335 22H3.16683M33.8335 22L22.8335 11M33.8335 22L22.8335 33"
                    stroke="#FFE887"
                    strokeWidth="3.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
            </div>
          </div>
          <div className={styles.rightContent}>
            <div className={styles.eventImageContainer} style={{}}>
              <div
                className={styles.eventImage}
                style={{
                  backgroundImage: `url(${eventsList[eventID]?.img_url})`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  backgroundRepeat: "no-repeat",
                }}
              ></div>
            </div>
            <div className={styles.eventDescription}>
              {eventsList[eventID]?.about}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
