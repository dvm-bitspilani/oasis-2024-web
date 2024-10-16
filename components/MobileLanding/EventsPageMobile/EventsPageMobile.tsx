import styles from "./events.module.scss";

import Link from "next/link";
import Image from "next/image";

import musicmobile from "@/assets/Events/Folders/1.png";
import dancemobile from "@/assets/Events/Folders/2.png";
import quizmobile from "@/assets/Events/Folders/3.png";
import dramamobile from "@/assets/Events/Folders/5.png";
import fashionmobile from "@/assets/Events/Folders/4.png";
import cameramobile from "@/assets/Events/Folders/6.png";
import MobileHeading from "../AboutUsHeading/MobileHeading";

export default function EventsMobile() {
  return (
    <div className={styles.mobilecontainer}>
      <MobileHeading
        showArrows={false}
        style={{}}
        textStyles={{}}
        text="Events"
      />
      <Link href="/events/music">
        <Image
          src={musicmobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
      <Link href="/events/dance">
        <Image
          src={dancemobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
      <Link href="/events/quizzes">
        <Image
          src={quizmobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
      <Link href="/events/fashion">
        <Image
          src={fashionmobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
      <Link href="/events/drama">
        <Image
          src={dramamobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
      <Link href="/events/photography">
        <Image
          src={cameramobile}
          alt="music"
          width={312}
          height={132}
          className={styles.mobileimg}
        />
      </Link>
    </div>
  );
}
