import { DoubleSide } from "three";
import { useTexture } from "@react-three/drei";


export default function Door() {
    const PATH = "/static/textures/material/"

    const props = useTexture({
        map: PATH + 'color.jpg',
        displacementMap: PATH + 'height.png',
        normalMap: PATH + 'normal.jpg',
        roughnessMap: PATH + 'roughness.jpg',
        aoMap: PATH + 'ao.jpg',
        

    })
    
    return (
        <mesh castShadow rotation-y={Math.PI / 12}>
            <sphereGeometry  args={[1,32,32]} />
            <meshStandardMaterial {...props} side={DoubleSide} 
            displacementScale={0.01}/>
        </mesh>
    )
}