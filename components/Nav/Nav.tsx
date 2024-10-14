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
  const [scrollPosition, setScrollPosition] = useState(0);

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
        // handleScroll(0.22);
        // console.log(scrollPosition)
        if (scrollPosition > 0.6) {
          // console.log("hello")
          handleScroll(0.5); 
        } else {
          handleScroll(0.15);
        }
        break;
      case "events":
        // handleScroll(0.5);
        if (scrollPosition > 0.8) {
          // console.log("hello")
          handleScroll(0.9); 
        } else {
          handleScroll(0.4);
        }
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
      // console.log(check, active);
      setScrollPosition(check);

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

  // useEffect(() => {
  //   const handleState = () => {
  //     const totalHeight =
  //       document.documentElement.scrollHeight - window.innerHeight;
  //     const currentScroll = window.scrollY / totalHeight;
  //     setScrollPosition(currentScroll); // Update scroll position

  //     if (currentScroll < 0.2) {
  //       setActive("home");
  //     } else if (currentScroll >= 0.2 && currentScroll <= 0.6) {
  //       setActive("about");
  //     } else if (currentScroll > 0.6 && currentScroll <= 0.8) {
  //       setActive("events");
  //     } else if (currentScroll > 0.8) {
  //       setActive("contact");
  //     }
  //   };

  //   window.addEventListener("scroll", handleState);

  //   return () => {
  //     window.removeEventListener("scroll", handleState);
  //   };
  // }, [active]);

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
          } ${active === "contact" ? styles.contactabout : ""} ${
            active === "events" ? styles.eventsabout : ""
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
          } ${active === "about" ? styles.aboutcontact : ""} ${
            active === "events" ? styles.eventscontact : ""
          }`}
          onClick={() => handleImageClick("contact")}
        />
      </div>
    </>
  );
};

export default Nav;
