import styles from "./trees.module.scss";

import Image from "next/image";

import tree from "@/assets/Landing/tree.png";

export default function Trees() {
  return (
    <>
      <div className={styles.treescontainer}>
        <Image
          id="leftTree"
          src={tree}
          alt="left tree"
          width={430}
          height={530}
          style={{ transform: "scaleX(-1)" }}
        />
        <Image
          id="rightTree"
          src={tree}
          alt="right tree"
          width={430}
          height={530}
          className={styles.righttree}
        />
      </div>
    </>
  );
}
