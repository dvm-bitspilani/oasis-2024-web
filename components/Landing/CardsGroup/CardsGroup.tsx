import React from "react";
import styles from "./cardsgroup.module.scss";
import Card from "../Card/Card";

interface CardsGroupProps {
    group: number
}

export default function CardsGroup({ group }: CardsGroupProps) {
    return (
        <>
            <div className={styles.cardscontainer}>
                <div className={styles.card}><Card cardID={`card${group + 0}`} /></div>
                <div className={styles.card}><Card cardID={`card${group + 1}`} /></div>
                <div className={styles.card}><Card cardID={`card${group + 2}`} /></div>
            </div>
        </>
    )
}