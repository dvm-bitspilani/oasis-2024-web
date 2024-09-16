import React from "react";
import styles from "./category.module.scss";
import EventCard from "../EventCard/EventCard";

import event from "../../../public/event.png";

interface CategoryProps {
  onClose: () => void;
}

export default function Category({ onClose }: CategoryProps) {
  return (
    <div className={styles.mainContainer}>
      <div className={styles.heading}>
        <h2>EVENTS</h2>
      </div>
      <button onClick={onClose}>
        <svg width="23" height="23" viewBox="0 0 13 13" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M0.349393 12.5238V9.8518H2.78087V7.42032H5.18564V5.25603H2.78087V2.85127H0.349393V0.179315H3.04807V2.6108H5.45283V4.98884H7.64384V2.6108H10.0486V0.179315H12.774V2.85127H10.3158V5.25603H7.91103V7.42032H10.3158V9.8518H12.774V12.5238H10.0486V10.119H7.64384V7.68752H5.45283V10.119H3.04807V12.5238H0.349393Z" fill="#FFD600" />
        </svg>
      </button>
      <div className={styles.eventContainer}>
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
        <EventCard
          name="BIG EVENT NAME"
          desc="Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod. Lorem ipsum dolor sit amet, consect adipiscing elit, sed do eiusmod... READ MORE lrem lorem lorem lorem lorem lorem"
          img={event}
        />
      </div>
    </div>
  );
}