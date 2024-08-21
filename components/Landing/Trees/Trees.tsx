import styles from './trees.module.scss'

import Image from 'next/image'

export default function Trees() {
    return (
        <div className={styles.treescontainer}>
            <Image
                src="/tree.png"
                alt="left tree"
                width={430}
                height={530}
                style={{ transform: "scaleX(-1)" }}
            />
            <Image
                src="/tree.png"
                alt="right tree"
                width={430}
                height={530}
                className={styles.righttree}
            />
        </div>
    )
}