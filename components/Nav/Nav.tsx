import React from "react";
import styles from "./nav.module.scss";
import Image from "next/image";
import about from "../../public/about.png";
import home from "../../public/home.png";
import contact from "../../public/contact.png";
import events from "../../public/events.png";

const Nav = () => {
  return (
    <>
      <div className={styles.wrapper}>
      <Image
          src={home}
          alt="home"
          width={347}
          height={168}
          className={styles.home}
        />
        <Image
          src={about}
          alt="about"
          width={347}
          height={168}
          className={styles.about}
        />
        <Image
          src={events}
          alt="events"
          width={347}
          height={168}
          className={styles.events}
        />
        <Image
          src={contact}
          alt="contact"
          width={347}
          height={168}
          className={styles.contact}
        />
      </div>
    </>
  );
};

export default Nav;
