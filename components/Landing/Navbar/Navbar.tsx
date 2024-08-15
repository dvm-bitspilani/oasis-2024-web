import React from "react";
import styles from "./navbar.module.scss";
import Image from "next/image";
import HamBtn from "./HamBtn/Btn";

export default function Navbar() {
    return (
        <>
            <div className={styles.header}>
                {/* <Image
                    src="/hammenu.png"
                    alt=""
                    width={99}
                    height={99}
                /> */}
                <HamBtn />
            </div>
            <div className={styles.logo}>
                <Image
                    src="/oasislogo.png"
                    alt="oasis logo landing"
                    width={560}
                    height={205}
                />
            </div>
        </>
    )
}