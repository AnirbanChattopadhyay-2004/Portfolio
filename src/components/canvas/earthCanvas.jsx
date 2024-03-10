import { Suspense} from "react"
import {Canvas} from "@react-three/fiber"
import {OrbitControls,useGLTF,Preload} from "@react-three/drei"
import CanvasLoader from "./Loader"
const Earth=()=>{
    const earth=useGLTF("./planet/scene.gltf")
    return(<mesh scale={2.75}>
       <ambientLight intensity={0.75}/>
       <pointLight intensity={2}/>
       <directionalLight color="white" />
       {/* To show the object main line to display the gltf file */}
        <primitive object={earth.scene} position-y={0} rotation-y={0}/>   
    </mesh>
    )
}
export default function EarthCanvas(){
    return <Canvas frameloop="demand" gl={{preserveDrawingBuffer:true}} camera={{fov:45,near:0.1,far:200,position:[-4,3,6]}} >
        <Suspense fallback={<CanvasLoader/>}> 
            <OrbitControls autoRotate rotateSpeed={1.5} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2} enableZoom={false}/>
            <Earth/>
        </Suspense>
        <Preload all/>
    </Canvas>
}