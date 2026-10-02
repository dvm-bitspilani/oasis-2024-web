"use client";

import styles from "./regbtn.module.scss";
import { memo } from "react";

import Link from "next/link";
import {useRegistrationClosed} from "@/components/Experience/Experience";

const RegBtn = memo(function RegBtn() {
  const open = useRegistrationClosed();
  return (
    <Link prefetch={false}
      href="/Registration"
      onClick={event => { event.preventDefault(); open(); }}
      className={styles.link}
    >
      <div className={styles.btnwrapper} id="register">
        <div className={styles.glow}></div>
        <div className={styles.btnborder}>
          <div className={`${styles.circlewrapper} ${styles.top}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={`${styles.circlewrapper} ${styles.bottom}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={`${styles.circlewrapper} ${styles.curve}`}>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div
            className={`${styles.circlewrapper} ${styles.curve} ${styles.left}`}
          >
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
            <div className={`${styles.circle} bulb`}></div>
          </div>
          <div className={styles.register}>register</div>
        </div>
      </div>
    </Link>
  );
});

export default RegBtn;
