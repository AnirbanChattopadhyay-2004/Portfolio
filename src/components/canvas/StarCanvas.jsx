import { Canvas } from "@react-three/fiber";
import { Suspense,useRef } from "react"
import { Points,PointMaterial ,Preload,OrbitControls} from '@react-three/drei'
import * as random from 'maath/random/dist/maath-random.esm'
function Star(props){
    const ref=useRef()
    const sphere=random.inSphere(new Float32Array(6000),{radius:1.3})
    
    return (
        <group ref={ref} rotation={[0,0,Math.PI/4]} castShadow>
            <ambientLight intensity={0.5}/>
            <directionalLight color="red"/>
            <Points ref={ref} positions={sphere} stride={3} frustumCulled {...props}>
            <PointMaterial transparent color="white" size={2} sizeAttenuation={false} depthWrite={false} />

            </Points>
        </group>
    )
}
export default function StarCanvas(){
    return (<div className="h-auto absolute z-[-1] w-full inset-0">
    <Canvas frameloop="demand" gl={{preserveDrawingBuffer:true}} camera={{position:[0,0,1]}}>
        <Suspense fallback={null}>
            <OrbitControls autoRotate rotateSpeed={0.5} reverseHorizontalOrbit/>
        <Star/>
        </Suspense>
        <Preload all/>
    </Canvas>
    </div>)}