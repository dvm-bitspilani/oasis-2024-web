import styles from "./overlay.module.scss";

import Navbar from "../Navbar/Navbar";
import CardsGroup from "../CardsGroup/CardsGroup";
import AboutUsPage from "@/components/AboutUs/AboutUsPage";
import ContactUs from "@/components/ContactUs/ContactUs";
import OasisLogo from "../Navbar/Logo/Logo";
import Social from "../Social/Social";

export default function LandingOverlay() {
  return (
    <div className={styles.mainwrapper}>
      <Social />
      <div className={styles.headerContainer}>
        <Navbar />
      </div>
      <div className={styles.machinecontainer}>
        <div className={styles.cards} id="leftcards">
          <CardsGroup group={1} />
        </div>
        <div className={styles.cards} id="rightcards">
          <CardsGroup group={2} />
        </div>
      </div>
      <AboutUsPage />
      <ContactUs />
      
    </div>
  );
}
