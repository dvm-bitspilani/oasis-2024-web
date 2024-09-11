import HamPokerChip from "@/components/Landing/Navbar/HamBtn/PokerChip";
import styles from "./btn.module.scss";

export default function BackButton() {
  return (
    <div className={styles.btn}>
      <HamPokerChip svgClass={styles.pokerChip} />
      <div className={styles.hamIcon}>
        <svg
          width="36"
          height="36"
          viewBox="0 0 36 36"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M28.5 18H7.5"
            stroke="#FFD66C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M17.1819 28.5L6.68188 18L17.1819 7.5"
            stroke="#FFD66C"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </div>
    </div>
  );
}
