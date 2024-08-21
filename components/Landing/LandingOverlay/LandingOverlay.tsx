import styles from './overlay.module.scss'

import Navbar from '../Navbar/Navbar'
import CardsGroup from '../CardsGroup/CardsGroup'
import AboutUsPage from '@/components/AboutUs/AboutUsPage'

export default function LandingOverlay() {
    return (
        <div className={styles.mainwrapper}>
            <div className={styles.headerContainer}>
                <Navbar />
            </div>
            <div className={styles.machinecontainer}>
                <div className={styles.cards} id='leftcards'><CardsGroup group={1} /></div>
                <div className={styles.cards} id='rightcards'><CardsGroup group={2} /></div>
            </div>
            <AboutUsPage />
        </div>
    )
}