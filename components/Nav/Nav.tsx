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

  const handleScroll = (position: any) => {
    const totalHeight =
      document.documentElement.scrollHeight - window.innerHeight;
    window.scrollTo({
      top: totalHeight * position,
      behavior: "smooth",
    });
  };

  const handleImageClick = (name: string) => {
    setActive(name);

    switch (name) {
      case "home":
        handleScroll(0);
        break;
      case "about":
        handleScroll(0.43);
        break;
      case "events":
        handleScroll(0.8);
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

      if (check < 0.2) {
        setActive("home");
      } else if (check >= 0.2 && check <= 0.6) {
        setActive("about");
      } else if (check > 0.6 && check <= 0.8) {
        setActive("events");
      } else if (check > 0.6) {
        setActive("contact");
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
          className={`${styles.home} ${
            active === "home" ? styles.active : ""
          } ${active === "contact" ? styles.contacthome : ""}`}
          onClick={() => handleImageClick("home")}
        />
        <Image
          src={about}
          alt="about"
          width={347}
          height={168}
          className={`${styles.about} ${
            active === "about" ? styles.active : ""
          } ${active === "contact" ? styles.contactabout : ""}`}
          onClick={() => handleImageClick("about")}
        />
        <Image
          src={events}
          alt="events"
          width={347}
          height={168}
          className={`${styles.events} ${
            active === "events" ? styles.active : ""
          } ${active === "about" ? styles.aboutevents : ""} ${
            active === "contact" ? styles.contactevents : ""
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
          } ${active === "about" ? styles.aboutcontact : ""}`}
          onClick={() => handleImageClick("contact")}
        />
      </div>
    </>
  );
};

export default Nav;
