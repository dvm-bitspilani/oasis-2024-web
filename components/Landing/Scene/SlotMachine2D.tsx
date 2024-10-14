import styles from './slotMachine2d.module.scss'

import Image from "next/image";
import {forwardRef, useEffect} from "react";

import slotMachine from '@/assets/Landing/slotMachine2D.png'

interface Props {
    setIsSlotMachineLoaded: (value: boolean) => void
}

const SlotMachine2D = forwardRef(function SlotMachine2D({setIsSlotMachineLoaded}: Props, ref: any) {
    useEffect(() => {
        setIsSlotMachineLoaded(true)
    }, [setIsSlotMachineLoaded]);
    return (
        <div className={styles.slotMachine} id="slot-machine-2d" ref={ref}>
            <Image src={slotMachine} alt='slot-machine-2d'/>
        </div>
    )
})

export default SlotMachine2D