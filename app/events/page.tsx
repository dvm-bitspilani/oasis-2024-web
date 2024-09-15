import React from "react";
import styles from "./events.module.scss"
import Folder from "@/components/Events/Folder/Folder";

export default function EventsPage() {
  return (
    <>
      <div className={styles.heading}>
        <h2>EVENTS</h2>
      </div>
      <div className={styles.folderContainer} >
        <Folder name="Dance" />
        <Folder name="Music" />
        <Folder name="Art" />
        <Folder name="Photography" />
        <Folder name="Kernel" />
        <Folder name="Fashion" />
        <Folder name="ProfShow" />
        <Folder name="Lorem" />
      </div>
    </>
  );
}
