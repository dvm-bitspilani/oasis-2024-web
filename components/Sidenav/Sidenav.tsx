import React from "react";
import styles from "./sidenav.module.scss";
import Link from "next/link";

const Sidenav = () => {
  return (
    <>
      <div className={styles.wrapper}>
        <Link href="/" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.home}>home</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
            >
              <path
                d="M0 14.3736L11.4986 28.75L23 14.3736L11.4986 0L0 14.3736Z"
                fill="#D4B558"
              />
            </svg>
          </div>
        </Link>
        <Link href="/about" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.about}>about</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
            >
              <path
                d="M0 14.3736L11.4986 28.75L23 14.3736L11.4986 0L0 14.3736Z"
                fill="#D4B558"
              />
            </svg>
          </div>
        </Link>
        <Link href="/shows" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.shows}>shows</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
            >
              <path
                d="M0 14.3736L11.4986 28.75L23 14.3736L11.4986 0L0 14.3736Z"
                fill="#D4B558"
              />
            </svg>
          </div>
        </Link>
        <Link href="/events" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.events}>events</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
            >
              <path
                d="M0 14.3736L11.4986 28.75L23 14.3736L11.4986 0L0 14.3736Z"
                fill="#D4B558"
              />
            </svg>
          </div>
        </Link>
        <Link href="/contact" className={styles.link}>
          <div className={styles.container}>
            <p className={styles.contact}>contact</p>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="23"
              height="29"
              viewBox="0 0 23 29"
              fill="none"
            >
              <path
                d="M0 14.3736L11.4986 28.75L23 14.3736L11.4986 0L0 14.3736Z"
                fill="#D4B558"
              />
            </svg>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Sidenav;
