import React from "react";
import styles from "./category.module.scss";

interface CategoryProps {
  onClose: () => void;
}

export default function Category({ onClose }: CategoryProps) {
  return (
    <div className={styles.mainContainer}>
      <button onClick={onClose}>X</button>
    </div>
  );
}