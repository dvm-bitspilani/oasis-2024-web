import styles from "./cross.module.scss";

interface Props {
  iframeClick: () => void;
}

export default function SlotMachineExitCross({ iframeClick }: Props) {
  return (
    <div id="exit-cross" className={styles.cross} onClick={iframeClick}>
      <svg viewBox="0 0 36 36" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M28.5 18H7.5"
          stroke="#FFD66C"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
        <path
          d="M17.1818 28.5L6.68182 18L17.1818 7.5"
          stroke="#FFD66C"
          stroke-width="3"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
    </div>
  );
}
