import React from "react";
import styles from "./cardsgroup.module.scss";
import Card from "../Card/Card";

export default function CardsGroup() {
    return(
        <>
            <div className={styles.cardscontainer}>
                <div className={styles.card}><Card /></div>
                <div className={styles.card}><Card /></div>
                <div className={styles.card}><Card /></div>
            </div>
        </>
    )
}