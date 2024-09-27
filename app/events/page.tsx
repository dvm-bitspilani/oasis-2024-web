"use client";

import React, { useState, useRef } from "react";
import styles from "./events.module.scss";
import Folder from "@/components/Events/Folder/Folder";
import Category from "@/components/Events/Category/Category";

import music from "../../assets/Events/Folders/music_folder.png";
import dance from "../../assets/Events/Folders/dance_folder.png";
import art from "../../assets/Events/Folders/art_folder.png";
import camera from "../../assets/Events/Folders/camera_folder.png";
import singing from "../../assets/Events/Folders//singing_folder.png";
import fashion from "../../assets/Events/Folders/fashion_folder.png";

export default function EventsPage() {
  const [category, setCategory] = useState<string>("");
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  function handleSelect(selectedCategory: string) {
    setCategory(selectedCategory);
    setIsModalOpen(true);
  }

  function handleCloseModal() {
    setIsModalOpen(false);
    setCategory("");
  }

  const containerRef = useRef<HTMLDivElement | null>(null);
  const scrollbarRef = useRef<HTMLDivElement | null>(null);

  const handleScroll = () => {
    console.log("scrolling");
    if (containerRef.current && scrollbarRef.current) {
      const { scrollHeight, clientHeight, scrollTop } = containerRef.current;

      if (scrollHeight > clientHeight) {
        const maxScrollTopValue = scrollHeight - clientHeight;
        const percentage = (scrollTop / maxScrollTopValue) * 100;
        scrollbarRef.current.style.top = `${Math.min(percentage, 100)}%`;
      }
    }
  };

  return (
    <main
      style={{
        width: "100vw",
        height: "100dvh",
        transform: "rotateY(180deg)",
      }}
    >
      <div className={styles.heading}>
        <h2>EVENTS</h2>
      </div>
      <div className={styles.scrollbar}>
        <div className={styles.rect}></div>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          className={styles.topicon}
        >
          <rect
            x="13.1367"
            y="4.56055"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 13.1367 4.56055)"
            fill="white"
          />
          <rect
            x="8.85938"
            y="0.279297"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 8.85938 0.279297)"
            fill="white"
          />
          <rect
            x="4.57422"
            y="4.56055"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 4.57422 4.56055)"
            fill="white"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="14"
          height="9"
          viewBox="0 0 14 9"
          fill="none"
          className={styles.bottomicon}
        >
          <rect
            x="13.1367"
            y="4.56055"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 13.1367 4.56055)"
            fill="white"
          />
          <rect
            x="8.85938"
            y="0.279297"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 8.85938 0.279297)"
            fill="white"
          />
          <rect
            x="4.57422"
            y="4.56055"
            width="4.28076"
            height="4.28076"
            transform="rotate(90 4.57422 4.56055)"
            fill="white"
          />
        </svg>
        <div className={styles.mainicon} ref={scrollbarRef}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="9"
            height="103"
            viewBox="0 0 9 103"
            fill="none"
          >
            <rect
              x="8.84766"
              y="0.408203"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 0.408203)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="11.0117"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 11.0117)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="21.6172"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 21.6172)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="32.2227"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 32.2227)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="42.8262"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 42.8262)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="53.4297"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 53.4297)"
              fill="white"
            />
            <rect
              x="8.84766"
              y="64.0352"
              width="7.06956"
              height="8.58447"
              transform="rotate(90 8.84766 64.0352)"
              fill="white"
            />
            {/* <rect
            x="8.84766"
            y="74.6387"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 74.6387)"
            fill="white"
          />
          <rect
            x="8.84766"
            y="85.2422"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 85.2422)"
            fill="white"
          />
          <rect
            x="8.84766"
            y="95.8457"
            width="7.06956"
            height="8.58447"
            transform="rotate(90 8.84766 95.8457)"
            fill="white"
          /> */}
          </svg>
        </div>
        <div className={styles.rightrect}></div>
      </div>
      {/* <div className={styles.folderContainer}>
        <Folder
          folderIcon={dance}
          isSelected={category === "dance"}
          onSelect={() => handleSelect("dance")}
        >
          Dance
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "music"}
          onSelect={() => handleSelect("music")}
        >
          Music
        </Folder>
        <Folder
          folderIcon={art}
          isSelected={category === "art"}
          onSelect={() => handleSelect("art")}
        >
          Art
        </Folder>
        <Folder
          folderIcon={camera}
          isSelected={category === "photography"}
          onSelect={() => handleSelect("photography")}
        >
          Photography
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "kernel"}
          onSelect={() => handleSelect("kernel")}
        >
          Kernel
        </Folder>
        <Folder
          folderIcon={fashion}
          isSelected={category === "fashion"}
          onSelect={() => handleSelect("fashion")}
        >
          Fashion
        </Folder>
        <Folder
          folderIcon={singing}
          isSelected={category === "profshow"}
          onSelect={() => handleSelect("profshow")}
        >
          ProfShow
        </Folder>
        <Folder
          folderIcon={music}
          isSelected={category === "lorem"}
          onSelect={() => handleSelect("lorem")}
        >
          Lorem
        </Folder>
      </div>
      <div className={styles.category}>
        <p>Please select a category</p>
      </div> */}
      <div
        className={styles.fixedCategoryContainer}
        onScroll={() => handleScroll()}
        ref={containerRef}
      >
        <Category onClose={handleCloseModal} />
      </div>

      {/* {isModalOpen && (
        <div className={styles.fixedCategoryContainer}>
          <Category onClose={handleCloseModal} />
        </div>
      )} */}
    </main>
  );
}
