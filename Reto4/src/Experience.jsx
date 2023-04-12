import { OrbitControls } from '@react-three/drei'
import { Perf } from 'r3f-perf'
import Planeta from './Planeta'
import Floor from './Floor'
import { useHelper } from '@react-three/drei'
import { DirectionalLightHelper,  HemisphereLightHelper, PointLightHelper, SpotLightHelper,RectAreaLight } from 'three'
import { RectAreaLightHelper }  from 'three/examples/jsm/helpers/RectAreaLightHelper.js'
import { useRef } from 'react'

export default function Experience() {
 

    const spotLightRef = useRef()
    useHelper(spotLightRef, SpotLightHelper, 2)
    
    
    {/*const pointLightRef = useRef()
useHelper(pointLightRef, PointLightHelper, 2)*/}
    {/*const hemispherelLightRef = useRef()
useHelper(hemispherelLightRef, HemisphereLightHelper, 2)*/}
    {/*const directionalLightRef = useRef()
useHelper(directionalLightRef, DirectionalLightHelper, 1)*/}
{/*const rectLightRef = useRef()
    useHelper(rectLightRef,RectAreaLightHelper , 2) */}
    return <>
        <Perf position="top-left" />

        <OrbitControls makeDefault />
        {/*<rectAreaLight ref={rectLightRef} castShadow position={[0, 3, -5]} intensity={2.5} color="gray" />*/}
       <spotLight ref={spotLightRef} castShadow position={[0, 3, -5]} intensity={2.5} />
        {/*<pointLight ref={pointLightRef} castShadow position={[0, 4, 0]} intensity={1.5} />*/}

        {/*<hemisphereLight ref={hemispherelLightRef} castShadow position={[0, 2, 0]} intensity={1.5} />*/}

        {/*<directionalLight ref={directionalLightRef} castShadow position={[0, 5, -5]} intensity={1.5} />*/}

        {/*<ambientLight intensity={0.5} />*/}
        <Planeta/>
        <Floor/>
    </>
}