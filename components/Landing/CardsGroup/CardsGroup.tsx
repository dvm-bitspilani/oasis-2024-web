"use client";
import React, { useEffect } from "react";
import styles from "./cardsgroup.module.scss";
import Card from "../Card/Card";
import gsap from "gsap";

interface CardsGroupProps {
  group: number;
}

export default function CardsGroup({ group }: CardsGroupProps) {
  useEffect(() => {
    for (let i = 1; i <= 2; i += 1) {
      for (let j = 1; j <= 3; j += 1) {
        let card = document.getElementById(`card${i}${j}`);
        let check = Math.random() < 0.5 ? -1 : 1;
        console.log(card, check)
        const tl = gsap.timeline({ repeat: -1 });
        tl.to(card, { duration: 1, y: check * 10 + "px" });
        tl.to(card, { duration: 1, y: "0px" });
      }
    }
  });

  return (
    <>
      <div className={styles.cardscontainer}>
        <div className={styles.card}>
          <Card cardID={`card${group}1`} />
        </div>
        <div className={styles.card}>
          <Card cardID={`card${group}2`} />
        </div>
        <div className={styles.card}>
          <Card cardID={`card${group}3`} />
        </div>
      </div>
    </>
  );
}
