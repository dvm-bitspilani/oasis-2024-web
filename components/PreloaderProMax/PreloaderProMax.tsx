"use client";

import { useEffect, useState } from "react";
import Preloader from "../Preloader/Preloader";

export default function PreloaderProMax() {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setTimeout(() => {
      setIsLoaded(true);
    }, 3000);
  }, []);

  return (
    <div
      style={{
        width: "100vw",
        height: "100dvh",
        zIndex: 99999999999,
        display: isLoaded ? "none" : "block",
      }}
    >
      <Preloader />
    </div>
  );
}
