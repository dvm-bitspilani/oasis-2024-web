import styles from './overlay.module.scss'

import Navbar from '../Navbar/Navbar'
import Trees from '../Trees/Trees'
import CardsGroup from '../CardsGroup/CardsGroup'
import Glow from '../Glow/Glow'

export default function LandingOverlay() {
    return (
        <div className={styles.mainwrapper}>
            <Glow />
            <div className={styles.headerContainer}>
                <Navbar />
            </div>
            <div className={styles.machinecontainer}>
                <div className={styles.cards}><CardsGroup group={1} /></div>
                {/* <CardsAndMachine /> */}
                <div className={styles.cards}><CardsGroup group={2} /></div>
            </div>
            <Trees />
        </div>
    )
}