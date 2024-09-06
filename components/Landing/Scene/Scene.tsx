"use client";

import { Canvas, useThree } from "@react-three/fiber";
// import { Perf } from "r3f-perf";

import { SlotMachine2 } from "./SlotMachine2";
import { SlotMachine } from "./SlotMachine";
import { forwardRef, useEffect, useState } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";
import { SlotMachineiOS } from "./SlotMachineiOS";

function detectAppleDevice() {
  const userAgent = navigator.userAgent.toLowerCase();

  if (
    userAgent.includes("iphone") ||
    userAgent.includes("ipad") ||
    userAgent.includes("ipod")
  ) {
    return true;
  } else {
    return false;
  }
}

interface Props {
  setIs3dLoaded: (value: boolean) => void;
  isXS: boolean;
  isMobile: boolean;
  iframeClick: () => void;
  setCamera: (value: any) => void;
  isVideoFocused: boolean;
  isLanding: boolean;
}

const LandingScene = forwardRef(function LandingScene(
  {
    setIs3dLoaded,
    isXS,
    isMobile,
    iframeClick,
    isVideoFocused,
    setCamera,
    isLanding,
  }: Props,
  ref
) {
  const [isAppleDevice, setIsAppleDevice] = useState<any>(null);

  useEffect(() => {
    setIsAppleDevice(detectAppleDevice());
  }, []);
  return (
    <>
      <Canvas
        style={{
          position: "absolute",
          pointerEvents: isLanding ? "none" : "auto",
        }}
        camera={{
          fov: 50,
        }}
      >
        {/* <Perf /> */}
        {/* <EffectComposer>
          <Bloom
            intensity={1}
            luminanceThreshold={0.7}
            luminanceSmoothing={0.025}
            mipmapBlur={false}
          />
        </EffectComposer> */}
        <ambientLight intensity={1.3} />
        {/* <perspectiveCamera fov={500} /> */}
        <group
          position={
            isXS ? [0, -1.15, 2.5] : isMobile ? [0, -1, 2] : [0, -0.6, 2]
          }
          rotation={[0, Math.PI, 0]}
        >
          {/* <SlotMachine2
            video="/Videos/curtainRaiser23_flipped.mp4"
            ref={ref}
            setIs3dLoaded={setIs3dLoaded}
            iframeClick={iframeClick}
            setCamera={setCamera}
            isVideoFocused={isVideoFocused}
          /> */}
          {isAppleDevice ? (
            <SlotMachineiOS
              video="/Videos/curtainRaiser23_flipped.mp4"
              ref={ref}
              setIs3dLoaded={setIs3dLoaded}
              iframeClick={iframeClick}
              setCamera={setCamera}
              isVideoFocused={isVideoFocused}
            />
          ) : (
            <SlotMachine2
              video="/Videos/curtainRaiser23_flipped.mp4"
              ref={ref}
              setIs3dLoaded={setIs3dLoaded}
              iframeClick={iframeClick}
              setCamera={setCamera}
              isVideoFocused={isVideoFocused}
            />
          )}
        </group>
      </Canvas>
    </>
  );
});

export default LandingScene;
