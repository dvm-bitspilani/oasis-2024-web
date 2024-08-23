import styles from "./glow.module.scss";

export default function Glow() {
  return (
    <div className={styles.glow}>
      <svg
        viewBox="0 0 1687 1687"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          opacity="0.15"
          d="M0 1687L0 0L1687 0L1687 1687L0 1687Z"
          fill="url(#paint0_radial_2398_200)"
        />
        <defs>
          <radialGradient
            id="paint0_radial_2398_200"
            cx="0"
            cy="0"
            r="1"
            gradientUnits="userSpaceOnUse"
            gradientTransform="translate(843.5 843.5) scale(843.5)"
          >
            <stop stopColor="#FADC69" />
            <stop offset="1" stopColor="#FADC69" stopOpacity="0" />
          </radialGradient>
        </defs>
      </svg>
    </div>
  );
}
