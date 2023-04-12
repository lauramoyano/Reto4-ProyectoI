import { useLoader } from "@react-three/fiber";
import { TextureLoader } from "three";

export default function Floor() {
    const [texture] = useLoader(TextureLoader, ["/static/textures/material/suelo1.jpg"]);
    return (

        <mesh receiveShadow position-y={ - 1.5 } rotation-x={ - Math.PI * 0.5 }>
            <planeGeometry args={[8, 8]}   />
            <meshStandardMaterial map={texture}  />
        </mesh>
    )
}
