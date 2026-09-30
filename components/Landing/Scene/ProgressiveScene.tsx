"use client";
import { Component, forwardRef, useEffect, useState, type ReactNode } from "react";
import dynamic from "next/dynamic";
import Image from "next/image";
import slotMachine from "@/assets/Landing/slotMachine2D.webp";
import styles from "./slotMachine2d.module.scss";
import type { Props } from "./Scene";
const Scene = dynamic(() => import("./Scene"), { ssr: false });
function Fallback() { return <div className={styles.slotMachine}><Image src={slotMachine} alt="Regal Roulette slot machine" priority /></div>; }
class SceneBoundary extends Component<{ children: ReactNode }, { failed: boolean }> {
 state = { failed: false };
 static getDerivedStateFromError() { return { failed: true }; }
 render() { return this.state.failed ? <Fallback /> : this.props.children; }
}
const ProgressiveScene = forwardRef<any, Props>(function ProgressiveScene(props, ref) {
 const [mode, setMode] = useState<"loading" | "3d" | "fallback" | "mobile">("loading");
 useEffect(() => {
   if (matchMedia("(max-width: 1000px)").matches) { setMode("mobile"); return; }
   const canvas = document.createElement("canvas");
   let supported = false;
   try { const gl = canvas.getContext("webgl2") || canvas.getContext("webgl"); supported = !!gl; gl?.getExtension("WEBGL_lose_context")?.loseContext(); } catch { supported = false; }
   setMode(supported && !matchMedia("(prefers-reduced-motion: reduce)").matches ? "3d" : "fallback");
 }, []);
 useEffect(() => { if(mode === "fallback") { document.querySelector("#scrollWrapper")?.setAttribute("style", "overflow-y: auto"); } }, [mode]);
 if(mode === "mobile") return null;
 if(mode !== "3d") return <Fallback />;
 return <SceneBoundary><Scene {...props} ref={ref} /></SceneBoundary>;
});
export default ProgressiveScene;
