import styles from './btn.module.scss'
import HamPokerChip from './PokerChip'

export default function HamBtn() {
    return (
        <div className={styles.btn}>
            <HamPokerChip />
            <div className={styles.hamIcon}>
                <div className={styles.iconLine}></div>
                <div className={styles.iconLine}></div>
                <div className={styles.iconLine}></div>
            </div>
        </div>
    )
}