"use client";

import { Canvas } from "@react-three/fiber";
import { Perf } from "r3f-perf";

import { SlotMachine2 } from "./SlotMachine2";
import { forwardRef } from "react";
import { EffectComposer, Bloom } from "@react-three/postprocessing";

interface Props {
  setIs3dLoaded: (value: boolean) => void;
  isXS: boolean;
}

const LandingScene = forwardRef(function LandingScene(
  { setIs3dLoaded, isXS }: Props,
  ref
) {
  return (
    <>
      <Canvas style={{ position: "fixed" }}>
        <Perf />
        {/* <EffectComposer>
          <Bloom
            intensity={2.0}
            luminanceThreshold={0.7}
            luminanceSmoothing={0.025}
            mipmapBlur={false}
          />
        </EffectComposer> */}
        <ambientLight intensity={2.0} />
        <pointLight intensity={1.0} position={[0, 0, 4]} />
        <perspectiveCamera fov={75} />
        <group
          position={isXS ? [0, -1.25, 2] : [0, -0.7, 3]}
          rotation={[0, Math.PI, 0]}
        >
          <SlotMachine2
            video="/Videos/curtainRaiser23_flipped.mp4"
            ref={ref}
            setIs3dLoaded={setIs3dLoaded}
          />
        </group>
      </Canvas>
    </>
  );
});

export default LandingScene;
