import { Canvas } from "@react-three/fiber"
import { useTexture,Decal,Float,OrbitControls,Preload} from "@react-three/drei"
import { Suspense } from "react"
import CanvasLoader from "./Loader"

function Ball({icon}){
    const [decal]=useTexture([icon])
    return(
        
        <mesh  castShadow={true} receiveShadow={true} scale={2.5}>
            <ambientLight intensity={0.55}/>
            
            <directionalLight position={[0,0,0.05]} /> 
            <icosahedronGeometry args={[1,1]} />
            <meshStandardMaterial color="#fff8eb" polygonOffset polygonOffsetFactor={-5} flatShading />
            <Decal position={[0,0,1]} map={decal} scale={1} rotation={[2*Math.PI,0,6.25]} flatShading />
        </mesh>
   
    )
}
export default function BallCanvas({icon}){
    
   return <>
    <Canvas frameloop="demand" dpr={[1, 2]}  gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false}    autoRotate={true} // Automatically rotate the camera
      autoRotateSpeed={0.5} // Adjust the speed of rotation
      enableDamping={true} // Smoother rotation
      dampingFactor={0.1}
      rotateSpeed={0.5}  />
            <Float speed={1} rotationIntensity={0.1} floatIntensity={2} >
                <Ball icon={icon}/>
            </Float>
        </Suspense>
            <Preload all/>
     </Canvas>
    </>
}