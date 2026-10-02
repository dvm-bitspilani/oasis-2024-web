import styles from "./logo.module.scss";

import Image from "next/image";

export default function OasisLogo({id = "oasisLogo"}: {id?: string}) {
    const logoHeight = 200
    const logoAspectRatio = 4096 / 2037

    return (
        <div className={styles.logo}>
            <Image
                id={id}
                src="/oasislogoNew.webp"
                priority
                fetchPriority="high"
                alt="oasis logo landing"
                width={logoAspectRatio * logoHeight}
                height={logoHeight}
            />
        </div>
    );
}
