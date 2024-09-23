"use client";

import { useEffect, useState } from "react";
import { waitForPreload } from "@/helper/waitForPreload";
import Preloader from "../Preloader/Preloader";

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
