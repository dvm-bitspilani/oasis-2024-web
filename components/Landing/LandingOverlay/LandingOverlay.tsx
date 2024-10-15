import styles from "./overlay.module.scss";

import Navbar from "../Navbar/Navbar";
import CardsGroup from "../CardsGroup/CardsGroup";
// import AboutUsPage from "@/components/AboutUs/AboutUsPage";
// import ContactUs from "@/components/ContactUs/ContactUs";
import Social from "../Social/Social";
import Countdown from "../Countdown/Countdown";
import OasisLogo from "../Navbar/Logo/Logo";
import ScrollPrompt from "@/components/Landing/ScrollPrompt/ScrollPrompt";

export default function LandingOverlay() {
  return (
    <div className={styles.mainwrapper} id="mainwrapper">
      <Social />
      <div className={styles.countdownContainer} id="logo-container">
        <OasisLogo />
        <Countdown dateString="October 23, 2024 19:00:00" />
        {/* <ScrollPrompt /> */}
      </div>
      <div className={styles.headerContainer}>
        <Navbar />
      </div>
      {/* <div className={styles.navcontainer}>
        <Nav />
      </div> */}
      <div className={styles.machinecontainer}>
        <div className={styles.cards} id="leftcards">
          <CardsGroup group={1} />
        </div>
        <div className={styles.cards} id="rightcards">
          <CardsGroup group={2} />
        </div>
      </div>
      {/* <AboutUsPage /> */}
      {/* <ContactUs /> */}
    </div>
  );
}
