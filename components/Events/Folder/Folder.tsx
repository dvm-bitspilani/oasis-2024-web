import React from "react";
import styles from "./folder.module.scss";
import { ReactNode } from "react";
import Image, { StaticImageData } from "next/image";

interface FolderProps {
  children: ReactNode;
  onSelect: () => void;
  isSelected: boolean;
  folderIcon: StaticImageData;
}

const Folder: React.FC<FolderProps> = ({
  children,
  onSelect,
  isSelected,
  folderIcon,
}) => {
  return (
    <button
      className={`${styles.folder} ${isSelected ? styles.active : ""}`}
      onClick={onSelect}
    >
      <Image src={folderIcon} alt="folder icon" className={styles.icon} />
      <p>{children}</p>
    </button>
  );
};

export default Folder;
