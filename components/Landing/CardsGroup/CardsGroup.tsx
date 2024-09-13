"use client";
import React, { useEffect } from "react";
import styles from "./cardsgroup.module.scss";
import Card from "../Card/Card";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface CardsGroupProps {
  group: number;
}

export default function CardsGroup({ group }: CardsGroupProps) {
  useGSAP(
    () => {
      let check = Math.random() < 0.5 ? -1 : 1;

      const commonAnimations = {
        y: check * 10,
        duration: 1,
        repeat: -1,
        yoyoEase: "power2.inOut",
      };

      gsap.to(`.cardGrp1`, {
        ...commonAnimations,
      });
      gsap.to(`.cardGrp2`, {
        ...commonAnimations,
      });
      gsap.to(`.cardGrp3`, {
        ...commonAnimations,
      });
    },
    { dependencies: [] }
  );

  return (
    <>
      <div className={styles.cardscontainer}>
        <div className={styles.card}>
          <Card cardID={`card${group}1`} cardClass="cardGrp1" />
        </div>
        <div className={styles.card}>
          <Card cardID={`card${group}2`} cardClass="cardGrp2" />
        </div>
        <div className={styles.card}>
          <Card cardID={`card${group}3`} cardClass="cardGrp3" />
        </div>
      </div>
    </>
  );
}
