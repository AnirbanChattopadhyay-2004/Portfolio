import {motion} from "framer-motion"
import { github } from "../assets"
import { styles } from "../styles"
import WrapperComponent from "./Wrapper"
import { projects } from "./constants"
import {Tilt} from "react-tilt"
import { fadeIn, textVariant } from "../utils/motion"


function ProjectCard({index,name,description,tags,image,source_code_link}){
    
    return <motion.div variants={fadeIn("up","spring",index*0.5, 2.75)}  >
       
    <Tilt options={{max:45,speed:450,scale:1}}  className="sm:w-[400px] w-full relative bg-tertiary  p-5 rounded-xl shadow-card" >
        <div className="h-[300px] w-full relative">
            <img src={image} alt="image" className="w-full h-4/5 object-cover  rounded-xl "   />
            <div className=" flex justify-end items-center   inset-0 absolute h-[40px] p-3">
                
                <div className="h-full p-3 h-8 black-gradient cursor-pointer flex justify-center items-center rounded-full" onClick={()=>{window.open(source_code_link,"__blank")}}><img src={github} alt="github" className="object-cover w-[28px] h-[28px]"/></div>
                
            </div>
        </div>
        <div className="mt-1">
            <p className="text-white font-bold text-2xl text-center">{name}</p>
            <p className="text-secondary text-justify leading-[30px] tracking-wide mt-3 ">{description}</p>

        </div>
       <div className="flex flex-wrap mt-3 gap-2">
        {
            tags.map((t)=>{
                return <p key={t.name} className={t.color}>#{t.name}&nbsp;&nbsp;&nbsp;</p>
            })
        }
       </div>
    </Tilt> 
  
    </motion.div>
   
}
function Work(){
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>Works done by me ?</p>
            <p className={`${styles.sectionHeadText}`}>Projects.</p>
            
        </motion.div>
        <div className="flex flex-row flex-wrap justify-center items-center gap-20 mt-10">
        {
            projects.map((p,idx)=>(
                <ProjectCard key={p.name} index={idx} {...p}/>
            ))
            
        } 
        
        </div>
        </>
    )
}
export default WrapperComponent(Work,"work")