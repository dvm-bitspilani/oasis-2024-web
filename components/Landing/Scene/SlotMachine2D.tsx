import styles from './slotMachine2d.module.scss'

import Image from "next/image";
import {forwardRef} from "react";

import slotMachine from '@/assets/Landing/slotMachine2D.png'

const SlotMachine2D = forwardRef(function SlotMachine2D(props, ref: any) {
    return (
        <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
            <Image src={slotMachine} alt='slot-machine-2d'/>
        </div>
    )
})

export default SlotMachine2D