import grunge from "@/assets/Landing/Grunge.png";
import Image from "next/image";

export default function Grunge() {
  return (
    <Image
      src={grunge}
      alt="grunge effect"
      draggable={false}
      style={{
        height: "100lvh",
        width: "100vw",
        position: "absolute",
        pointerEvents: "none",
        top: 0,
        zIndex: -3,
      }}
    />
  );
}
