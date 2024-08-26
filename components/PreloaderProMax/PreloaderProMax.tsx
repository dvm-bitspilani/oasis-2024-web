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
    <Preloader
      style={{
        zIndex: 99999999999,
        display: isLoaded ? "none" : "flex",
      }}
    />
  );
}
