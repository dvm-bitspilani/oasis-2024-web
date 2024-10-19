"use client";

import { Canvas } from "@react-three/fiber";

import { SlotMachine2 } from "./SlotMachine2";
import { forwardRef, useEffect, useState } from "react";

import { detectAppleDevice } from "@/helper/detectAppleDevice";

interface Props {
  setIs3dLoaded: (value: boolean) => void;
  isAboutUs: boolean;
  isXS: boolean;
  isMobile: boolean;
  iframeClick: () => void;
  setCamera: (value: any) => void;
  isVideoFocused: boolean;
  isLanding: boolean;
  isEvents: boolean;
}

const LandingScene = forwardRef(function LandingScene(
  {
    setIs3dLoaded,
    isAboutUs,
    isXS,
    isMobile,
    iframeClick,
    isVideoFocused,
    setCamera,
    isLanding,
    isEvents,
  }: Props,
  ref
) {
  return (
    <>
      <Canvas
        style={{
          position: "absolute",
          // pointerEvents: isLanding ? "none" : "auto",
        }}
        camera={{
          fov: 50,
        }}
      >
        <ambientLight intensity={1.3} />
        <group
          position={
            isXS ? [0, -1.1, 1.5] : isMobile ? [0, -1, 2] : [0, -0.8, 2]
          }
          rotation={[0, Math.PI, 0]}
        >
          <SlotMachine2
            ref={ref}
            setIs3dLoaded={setIs3dLoaded}
            iframeClick={iframeClick}
            setCamera={setCamera}
            isVideoFocused={isVideoFocused}
            isEvents={isEvents}
            isAboutUs={isAboutUs}
          />
        </group>
      </Canvas>
    </>
  );
});

export default LandingScene;
