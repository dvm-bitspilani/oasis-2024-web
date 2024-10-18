import styles from "./contactUs.module.scss";

import MobileHeading from "@/components/MobileLanding/AboutUsHeading/MobileHeading";
import MobileContactCard from "@/components/MobileLanding/ContactUs/MobileContactCard/MobileContactCard";

import aryan from "@/assets/Landing/contactUs/aryan.png";
import prateek from "@/assets/Landing/contactUs/prateek.png";
import jaiditya from "@/assets/Landing/contactUs/jaiditya.png";
import shreeram from "@/assets/Landing/contactUs/shreeram.png";
import rijul from "@/assets/Landing/contactUs/rijul.png";
import shreyansh from "@/assets/Landing/contactUs/shreyansh.png";
import ahan from "@/assets/Landing/contactUs/ahan.png";
import aryanK from "@/assets/Landing/contactUs/aryankhorana.png";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ContactUsMobile() {
  useGSAP(
    () => {
      const evenCards = document.querySelectorAll(".contactCardAnimationEven");
      const oddCards = document.querySelectorAll(".contactCardAnimationOdd");

      if (evenCards.length !== 0 && oddCards.length !== 0) {
        gsap.from(evenCards, {
          scrollTrigger: {
            trigger: evenCards[0],
            start: "top 70%",
            markers: false,
            toggleActions: "play none none none",
          },
          xPercent: 120,
          duration: 0.5,
          stagger: 0.3,
        });
        gsap.from(oddCards, {
          scrollTrigger: {
            trigger: oddCards[0],
            start: "top 70%",
            markers: false,
            toggleActions: "play none none none",
          },
          xPercent: -120,
          duration: 0.5,
          stagger: 0.3,
        });
      }
    },
    { dependencies: [] }
  );
  return (
    <>
      <MobileHeading
        text="Contact Us"
        showArrows={false}
        style={{}}
        textStyles={{}}
      />
      <div className={styles.cardsContainer}>
        <MobileContactCard
          animationIndex={1}
          name="Aryan Wadhwa"
          image={aryan}
          dep1="Registrations, Events &"
          dep2="Approval Queries"
          contactDetails={true}
          phone="tel:+919810297034"
          email="mailto:pcr@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={2}
          name="Prateek Kashyap"
          image={prateek}
          dep1="Website, App &"
          dep2="Online Payments"
          contactDetails={true}
          phone="tel:+918700225449"
          email="mailto:webmaster@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={3}
          name="Shreeram Verma"
          image={shreeram}
          dep1="Sponsorship and"
          dep2="Marketing"
          contactDetails={true}
          phone="tel:+918889588288"
          email="mailto:shreeram@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={4}
          name="Jaiditya Singh"
          image={jaiditya}
          dep1="Logistics and"
          dep2="Operations"
          contactDetails={true}
          phone="tel:+919168421199"
          email="mailto:controls@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={5}
          name="Rijul Bassamboo"
          image={rijul}
          dep1="Reception and"
          dep2="Accomodation"
          contactDetails={true}
          phone="tel:+919811529877"
          email="mailto:recnacc@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={6}
          name="Shreyansh Vanjani"
          image={shreyansh}
          dep1="Publicity and"
          dep2="Collaborations"
          contactDetails={true}
          phone="tel:+918000695988"
          email="mailto:adp@bits-oasis.org"
        />
        <MobileContactCard
          animationIndex={7}
          name="Ahan Bansal"
          image={ahan}
          dep1="President,"
          dep2="Student's Union"
          contactDetails={true}
          phone="tel:+919687513867"
          email="mailto:president@pilani.bits-pilani.ac.in"
        />
        <MobileContactCard
          animationIndex={8}
          name="Aryan Khorana"
          image={aryanK}
          dep1="General Secretary,"
          dep2="Student's Union"
          contactDetails={true}
          phone="tel:+919149338624"
          email="mailto:gensec@pilani.bits-pilani.ac.in"
        />
      </div>
      <div className={styles.madeWith}>
        <a href="https://bits-dvm.org" target="_main">
          <span className={styles.madewithText}>Made with</span> <span>❤️</span>{" "}
          <span className={styles.madewithText}>by DVM</span>
        </a>
      </div>
    </>
  );
}
