"use client";

import { Canvas } from "@react-three/fiber";

import { SlotMachine2 } from "./SlotMachine2";
import { Component, forwardRef, type ReactNode } from "react";

export interface Props {
  setIs3dLoaded: (value: boolean) => void;
  isAboutUs: boolean;
  isXS: boolean;
  isMobile: boolean;
  iframeClick: () => void;
  setCamera: (value: any) => void;
  isVideoFocused: boolean;
  isLanding: boolean;
  isEvents: boolean;
  onFailure?: () => void;
}

// Fiber renders Canvas children in a separate React root. Catch model errors
// inside that root before they propagate to Canvas's uncaught-error handler.
class SceneAssetBoundary extends Component<{children: ReactNode; onFailure?: () => void}, {failed: boolean}> {
  state = {failed: false};
  static getDerivedStateFromError() { return {failed: true}; }
  componentDidCatch() { this.props.onFailure?.(); }
  render() { return this.state.failed ? null : this.props.children; }
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
    onFailure,
  }: Props,
  ref
) {
  return (
    <>
      <Canvas
        dpr={[1, 1.5]}
        gl={{ antialias: true, powerPreference: "low-power" }}
        style={{
          position: "absolute",
          // pointerEvents: isLanding ? "none" : "auto",
        }}
        camera={{
          fov: 50,
        }}
      >
        <SceneAssetBoundary onFailure={onFailure}>
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
        </SceneAssetBoundary>
      </Canvas>
    </>
  );
});

export default LandingScene;
