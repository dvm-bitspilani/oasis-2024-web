"use client";

import { Canvas } from "@react-three/fiber";
// import { Perf } from "r3f-perf";

import { SlotMachine2 } from "./SlotMachine2";
import { SlotMachine } from "./SlotMachine";
import { forwardRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface Props {
  setIs3dLoaded: (value: boolean) => void;
  isXS: boolean;
  isMobile: boolean;
}

const LandingScene = forwardRef(function LandingScene(
  { setIs3dLoaded, isXS, isMobile }: Props,
  ref
) {
  return (
    <>
      <Canvas style={{ position: "fixed" }}>
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
        <perspectiveCamera fov={75} />
        <group
          position={
            isXS ? [0, -1.15, 2.5] : isMobile ? [0, -1, 3] : [0, -0.7, 3]
          }
          rotation={[0, Math.PI, 0]}
        >
          <SlotMachine
            video="/Videos/curtainRaiser23_flipped.mp4"
            ref={ref}
            setIs3dLoaded={setIs3dLoaded}
          />
          {/* <SlotMachine2
            video="/Videos/curtainRaiser23_flipped.mp4"
            ref={ref}
            setIs3dLoaded={setIs3dLoaded}
          /> */}
        </group>
      </Canvas>
    </>
  );
});

export default LandingScene;
