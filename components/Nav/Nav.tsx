"use client";
import React, { useEffect, useRef, useState } from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import about from "../../public/about.png";
import home from "../../public/home.png";
import contact from "../../public/contact.png";
import events from "../../public/events.png";
import gsap from "gsap";

const Nav = () => {
  const [active, setActive] = useState("home");
  const ticketRef = useRef(null);

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

  useEffect(() => {
    const handleState = () => {
      const totalHeight =
        document.documentElement.scrollHeight - window.innerHeight;
      const check = window.scrollY / totalHeight;
      console.log(check, active);

      switch (check) {
        case 0:
          setActive("home");
          break;
        case 0.4:
          setActive("about");
          break;
        case 0.6:
          setActive("events");
          break;
        case 1:
          setActive("contact");
          break;
        default:
          break;
      }
    };

    window.addEventListener("scroll", handleState);

    return () => {
      window.removeEventListener("scroll", handleState);
    };
  });

  return (
    <>
      <div className={styles.wrapper} ref={ticketRef} id="tickets">
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
          } ${active === "about" ? styles.aboutevents : ""}`}
          onClick={() => handleImageClick("events")}
        />
        <Image
          src={contact}
          alt="contact"
          width={347}
          height={168}
          className={`${styles.contact} ${
            active === "contact" ? styles.active : ""
          } ${active === "about" ? styles.aboutcontact : ""}`}
          onClick={() => handleImageClick("contact")}
        />
      </div>
    </>
  );
};

export default Nav;
