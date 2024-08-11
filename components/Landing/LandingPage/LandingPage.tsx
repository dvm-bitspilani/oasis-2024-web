import React from "react";
import styles from "./landingpage.module.scss";
import CardsGroup from "../CardsGroup/CardsGroup";
import Navbar from "../Navbar/Navbar";
import Image from "next/image";

export default function LandingPage() {
  return (
    <>
      <div className={styles.mainwrapper}>
        <div className={styles.headerContainer}><Navbar /></div>
        <div className={styles.machinecontainer}>
          <div className={styles.cards}><CardsGroup /></div>
          <Image src="/slotmachine.png" alt="" width={449.65} height={669.1} />
          <div className={styles.cards}><CardsGroup /></div>
        </div>
        <div className={styles.treescontainer}>
          <Image
            src="/tree.png"
            alt=""
            width={430}
            height={530}
            style={{ transform: "scaleX(-1)" }}
          />
          <Image
            src="/tree.png"
            alt=""
            width={430}
            height={530}
            className={styles.righttree}
          />
        </div>
      </div>
    </>
  );
}
