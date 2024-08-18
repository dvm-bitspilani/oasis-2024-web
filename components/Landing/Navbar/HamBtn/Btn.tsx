import styles from './btn.module.scss'
import MenuLines from './MenuLines'
import HamPokerChip from './PokerChip'

export default function HamBtn() {
    return (
        <div className={styles.btn}>
            <HamPokerChip svgClass={styles.pokerChip} />
            <div className={styles.hamIcon}>
                <MenuLines svgClass={styles.menuLines} />
            </div>
        </div>
    )
}