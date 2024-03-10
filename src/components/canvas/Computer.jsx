import { Suspense,useEffect,useState} from "react"
import { OrbitControls,Preload,useGLTF} from "@react-three/drei"
import {Canvas} from "@react-three/fiber"
import CanvasLoader from "./Loader.jsx"

const Computers = ({isMobile})=>{
    // console.log(isMobile)
        const computer=useGLTF("./desktop_pc/scene.gltf") //to use gltf file 3d file
        return(
        <mesh>
            <hemisphereLight  intensity={2}/>
            <pointLight intensity={10}/>
            <spotLight position={[-20,1,2]}/>
            <directionalLight color="violet" position={[0, 0, 6]} />
           
            <primitive object={computer.scene} scale={isMobile?0.6:0.75} position={isMobile?[-1.25,-4.00,-2]:[0,-3.70,-1.5]} />
           
        </mesh>
        )

}

export default function ComputerCanvas(){
    const[isMobile,setIsmobile]=useState(false);
    useEffect(
        ()=>{
            const mediaQuery=window.matchMedia('(max-width: 500px)')
            setIsmobile(mediaQuery.matches)
            
            const handleMediaChange=(event)=>{
                setIsmobile(event.matches)
            }
            // console.log(mediaQuery)
            mediaQuery.addEventListener('change', handleMediaChange)
            return ()=>{
                mediaQuery.removeEventListener('change',handleMediaChange)

            }
        },[]
    )
    return (
       <Canvas frameloop="demand" shadows camera={{position:[20,3,5],fov:25}} gl={{preserveDrawingBuffer:true}}>
        <Suspense fallback={<CanvasLoader />}>
            <OrbitControls enableZoom={false} maxPolarAngle={Math.PI/2} minPolarAngle={Math.PI/2}/>
            <Computers isMobile={isMobile}/>
        </Suspense>
        <Preload all/>
       </Canvas>
    )
}
