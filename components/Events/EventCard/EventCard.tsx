import React from "react";
import styles from "./eventcard.module.scss";

import { StaticImageData } from "next/image";
import Image from "next/image";
import image from '@/assets/Events/Carousel/event.png';
import largeImage from '@/assets/Events/Carousel/eventLarge.png'

interface EventCardProps {
  name: string;
  about?: string;
  img?: StaticImageData;
  onClick: () => void;
}

export default function EventCard({
  name,
  about,
  img=largeImage,
  onClick,
}: EventCardProps) {
  return (
    <>
      <div className={styles.card} onClick={onClick}>
        <div className={styles.eventName}>
          <h2>{name}</h2>
        </div>
        <div className={styles.eventInfo}>
          <Image
            src={img}
            alt={name}
            className={styles.eventImg}
            draggable={false}
          />
          <p>{about}</p>
        </div>
      </div>
    </>
  );
}
