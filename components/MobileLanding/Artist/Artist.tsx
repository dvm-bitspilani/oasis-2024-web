import styles from './artist.module.scss'
import {StaticImport} from "next/dist/shared/lib/get-img-props";
import Image from "next/image";

interface Props {
    reverse: boolean;
    image: string | StaticImport;
    name: string;
    date: number;
}

export default function Artist({reverse, image, name, date}: Props) {
    return (
        <div className={reverse ? `${styles.artist} ${styles.reverse}` : styles.artist}>
            <div className={styles.imgContainer}>
                <Image src={image} alt={name}
                       className={`${styles.image} ${date === 26 ? styles.vishal : date === 25 ? styles.seedhe : styles.diary}`}/>
            </div>
            <div className={styles.description}>
                <p className={styles.name}>{name}</p>
                <p className={styles.date}>{`October ${date}`}</p>
            </div>
        </div>
    )
}