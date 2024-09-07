"use client";
import React, { useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import about from "../../public/about.png";
import home from "../../public/home.png";
import contact from "../../public/contact.png";
import events from "../../public/events.png";

const Nav = () => {
  const [active, setActive] = useState("home");

  const handleScroll = (position) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;

    window.scrollTo({
      top: totalHeight * position,
      behavior: "smooth",
    });
  };

  const handleImageClick = (name) => {
    setActive(name);

    switch (name) {
      case "home":
        handleScroll(0);
        break;
      case "about":
        handleScroll(0.4);
        break;
      case "events":
        handleScroll(0.6);
        break;
      case "contact":
        handleScroll(1);
        break;
      default:
        break;
    }
  };

  return (
    <>
      <div className={styles.wrapper}>
        <Image
          src={home}
          alt="home"
          width={347}
          height={168}
          className={`${styles.home} ${active === "home" ? styles.active : ""}`}
          onClick={() => handleImageClick("home")}
        />
        <Image
          src={about}
          alt="about"
          width={347}
          height={168}
          className={`${styles.about} ${
            active === "about" ? styles.active : ""
          }`}
          onClick={() => handleImageClick("about")}
        />
        <Image
          src={events}
          alt="events"
          width={347}
          height={168}
          className={`${styles.events} ${
            active === "events" ? styles.active : ""
          }`}
          onClick={() => handleImageClick("events")}
        />
        <Image
          src={contact}
          alt="contact"
          width={347}
          height={168}
          className={`${styles.contact} ${
            active === "contact" ? styles.active : ""
          }`}
          onClick={() => handleImageClick("contact")}
        />
      </div>
    </>
  );
};

export default Nav;
