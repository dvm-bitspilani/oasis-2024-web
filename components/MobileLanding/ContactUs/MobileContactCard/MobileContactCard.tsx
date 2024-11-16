import styles from "./card.module.scss";
import Image from "next/image";

import background from "@/assets/MobileLanding/ContactUs/CardBackground.svg";
import phoneIcon from "@/assets/MobileLanding/ContactUs/PhoneIcon.svg";
import mailIcon from "@/assets/MobileLanding/ContactUs/MailIcon.svg";
import { StaticImport } from "next/dist/shared/lib/get-img-props";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useRef } from "react";

interface Props {
  name: string;
  image: string | StaticImport;
  dep1: string;
  dep2: string;
  contactDetails: boolean;
  phone: string | null;
  email: string | null;
  animationIndex: number;
}

interface ContactProps {
  phone: string | null;
  email: string | null;
}

gsap.registerPlugin(ScrollTrigger);

export function ContactBlock({ phone, email }: ContactProps) {
  return (
    <div className={styles.contactBlock}>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={phone ?? "#"}
        onClick={(e) => {
          if (!phone) {
            e.preventDefault();
          }
        }}
        style={{ visibility: phone === null ? "hidden" : "visible" }}
      >
        <Image src={phoneIcon} alt="phone icon" />
      </a>
      <a
        target="_blank"
        rel="noopener noreferrer"
        href={email ?? "#"}
        style={{ visibility: email === null ? "hidden" : "visible" }}
      >
        <Image src={mailIcon} alt="mail icon" />
      </a>
    </div>
  );
}

export default function MobileContactCard({
  name,
  image,
  dep1,
  dep2,
  contactDetails,
  phone,
  email,
  animationIndex,
}: Props) {
  const cardContainer: any = useRef();

  // useGSAP(
  //   () => {
  //     if (cardContainer.current) {
  //       gsap.from(cardContainer.current, {
  //         scrollTrigger: {
  //           trigger: cardContainer.current,
  //           start: "top 70%",
  //           markers: false,
  //           toggleActions: "play none none none",
  //         },
  //         xPercent: animationIndex % 2 ? -120 : 120,
  //         duration: 0.3,
  //       });
  //     }
  //   },
  //   { dependencies: [] }
  // );

  return (
    <div
      className={`${styles.container} ${
        animationIndex % 2
          ? "contactCardAnimationOdd"
          : "contactCardAnimationEven"
      }`}
    >
      <div className={styles.cardContent}>
        <p className={styles.heading}>{name}</p>
        <Image src={image} alt={name} className={styles.image} />
        <p className={styles.desc}>{dep1}</p>
        <p className={styles.desc}>{dep2}</p>
        {contactDetails ? <ContactBlock email={email} phone={phone} /> : null}
      </div>
      <Image
        src={background}
        alt="card background"
        className={styles.background}
      />
    </div>
  );
}
