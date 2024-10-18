import React from "react";
import styles from "./artistn2o.module.scss";
import harshVivek from "@/assets/MobileLanding/ProfShowsMobile/HarshVivek.png";
import youtube from "@/assets/MobileLanding/ProfShowsMobile/youtube.svg";
import Image from "next/image";

export default function ArtistN2O() {
    return (
        <>
            <div className={styles.name}>
                <p>HARSH GUJRAL</p>
                <p>VIVEK SAMTANI</p>
            </div>
            <div className={styles.info}>
                <div className={styles.button}>
                    <div className={styles.date}>October 27</div>
                    <div className={styles.youtube}>
                        <a href="https://www.youtube.com/@Harshgujral" target="_main">
                            <Image
                                src={youtube}
                                alt="icon"
                            />
                            <p>@harshgujral</p>
                        </a>
                        <a href="https://www.youtube.com/@VivekSamtani" target="_main">
                            <Image
                                src={youtube}
                                alt="icon"
                            />
                            <p>@viveksamtani</p>
                        </a>
                    </div>
                </div>
                <div className={styles.artistImg}>
                    <Image
                        src={harshVivek}
                        alt="n2o"
                    />
                </div>
            </div>
        </>
    );
}
