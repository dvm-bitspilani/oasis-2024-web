import { Canvas, ThreeElements } from "@react-three/fiber";
import { Perf } from 'r3f-perf'

import SlotMachine from "./SlotMachine";
import { SlotMachine2 } from "./SlotMachine2";
import { useRef, forwardRef } from "react";

interface Props {
    setIs3dLoaded: (value: boolean) => void
}

const LandingScene = forwardRef(function LandingScene({ setIs3dLoaded }: Props, ref) {
    const pointRef = useRef()
    return (
        <>
            <Canvas style={{ position: 'fixed' }}>
                <Perf />
                <ambientLight intensity={2.0} />
                <pointLight
                    intensity={1.0}
                    position={[0, 0, 4]}
                />
                <perspectiveCamera fov={75} />
                <group position={[0, -0.7, 3]} rotation={[0, Math.PI, 0]}>
                    <SlotMachine2
                        video='/Videos/curtainRaiser23_flipped.mp4'
                        ref={ref}
                        setIs3dLoaded={setIs3dLoaded}
                    />
                </group>
                {/* <ScrollControls pages={1} damping={0.25}>
                <LandingOverlay />
            </ScrollControls> */}
            </Canvas>
        </>
    )
})

export default LandingScene