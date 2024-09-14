"use client";

import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

function waitForPreload(querySelector: string) {
  return new Promise((resolve, reject) => {
    const preloader = document.querySelector(querySelector);
    if (preloader) {
      return resolve("loaded");
    }

    const observer = new MutationObserver(() => {
      if (preloader) {
        observer.disconnect();
        return resolve("loaded");
      }
    });

    observer.observe(document.body, {
      childList: true,
      subtree: true,
    });
  });
}

export default function PrePreloader() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    waitForPreload("#preloader").then(() => {
      setTimeout(() => {
        setIsLoaded(true);
      }, 500);
      // console.log("#preloader");
    });
  }, []);

  return (
    <div
      style={{
        display: isLoaded ? "none" : "flex",
      }}
    >
      <Preloader />
    </div>
  );
}
