import React from "react";
import styles from "./instructions.module.scss";

interface Props {
  text: string;
}

const Instruction = ({ text }: Props) => {
  return (
    <div className={styles.content}>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="16"
        height="20"
        viewBox="0 0 16 20"
        fill="none"
      >
        <path
          d="M16 10L8 0L0 10L8 20L16 10Z"
          fill="url(#paint0_linear_2256_950)"
        />
        <defs>
          <linearGradient
            id="paint0_linear_2256_950"
            x1="8"
            y1="0"
            x2="8"
            y2="20"
            gradientUnits="userSpaceOnUse"
          >
            <stop stop-color="#EDD08D" />
            <stop offset="0.465" stop-color="#D29D5D" />
            <stop offset="1" stop-color="#F0D896" />
          </linearGradient>
        </defs>
      </svg>
      <div className={styles.text}>{text}</div>
    </div>
  );
};

export default Instruction;
