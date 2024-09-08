import styles from "./machine.module.scss";

import slotMachine from "@/assets/Landing/slotMachine2D.svg";

import Image from "next/image";
import { forwardRef } from "react";

const MobileSlotMachine = forwardRef(function MobileSlotMachine(
  props,
  ref: any
) {
  return (
    <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
      <Image src={slotMachine} alt="slot-machine-2d" id="slot-machine-2d" />
    </div>
  );
});

export default MobileSlotMachine;
