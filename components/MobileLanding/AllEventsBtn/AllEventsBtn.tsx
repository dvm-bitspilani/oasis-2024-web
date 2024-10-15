import styles from './btn.module.scss'
import Link from "next/link";

export default function AllEventsBtn() {
    return (
        <Link
            href='/events'
            className={styles.container}
        >
            View All Events
        </Link>
    )
}