"use client";

import {Component, Suspense, forwardRef, useCallback, useEffect, useRef, useState, type ReactNode} from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import slotMachine from "@/assets/Landing/slotMachine2D.webp";
import styles from "./slotMachine2d.module.scss";
import type {Props} from "./Scene";

const Scene = dynamic(() => import("./Scene"), {ssr: false});
function Fallback() { return <div className={styles.slotMachine}><Image src={slotMachine} alt="Regal Roulette slot machine" priority /></div>; }
class SceneBoundary extends Component<{children: ReactNode; onFailure: () => void}, {failed: boolean}> {
  state = {failed: false};
  static getDerivedStateFromError() { return {failed: true}; }
  componentDidCatch() { this.props.onFailure(); }
  render() { return this.state.failed ? null : this.props.children; }
}

const ProgressiveScene = forwardRef<any, Props>(function ProgressiveScene(props, ref) {
  const {setIs3dLoaded} = props;
  const [mode, setMode] = useState<"loading" | "3d" | "fallback" | "mobile">("loading");
  const [ready, setReady] = useState(false);
  const surface = useRef<HTMLDivElement>(null);
  const fallback = useCallback(() => { setMode("fallback"); setReady(false); }, []);
  const loaded = useCallback((value: boolean) => { setReady(value); setIs3dLoaded(value); }, [setIs3dLoaded]);

  useEffect(() => {
    const mobile = matchMedia("(max-width: 1000px)");
    const motion = matchMedia("(prefers-reduced-motion: reduce)");
    const update = () => {
      if (mobile.matches) { setMode("mobile"); setReady(false); return; }
      if (motion.matches) { fallback(); return; }
      const canvas = document.createElement("canvas");
      let supported = false;
      try {
        const gl = canvas.getContext("webgl2") || canvas.getContext("webgl");
        supported = !!gl;
        gl?.getExtension("WEBGL_lose_context")?.loseContext();
      } catch { supported = false; }
      setMode(supported ? "3d" : "fallback");
    };
    update();
    mobile.addEventListener("change", update);
    motion.addEventListener("change", update);
    return () => { mobile.removeEventListener("change", update); motion.removeEventListener("change", update); };
  }, [fallback]);

  useEffect(() => {
    if (mode === "fallback") document.querySelector<HTMLElement>("#scrollWrapper")?.style.setProperty("overflow-y", "auto");
    const element = surface.current;
    element?.addEventListener("webglcontextlost", fallback, true);
    return () => element?.removeEventListener("webglcontextlost", fallback, true);
  }, [mode, fallback]);

  if (mode === "mobile") return null;
  return <div ref={surface} style={{position: "absolute", inset: 0}}>
    {!ready && <Fallback />}
    {mode === "3d" && <Suspense fallback={null}><SceneBoundary onFailure={fallback}><Scene {...props} setIs3dLoaded={loaded} ref={ref} /></SceneBoundary></Suspense>}
  </div>;
});
export default ProgressiveScene;
