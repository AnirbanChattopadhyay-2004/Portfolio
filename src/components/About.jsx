import {motion} from "framer-motion"
import {Tilt} from "react-tilt"
import { fadeIn, textVariant } from "../utils/motion"
import { styles } from "../styles"
import { services } from "./constants"
import WrapperComponent from "./Wrapper/index.js"
function ServiceCard({idx,title,icon})
{
    
    return(
    <Tilt className="xs:w-[250px] w-full">
        <motion.div variants={fadeIn("right","spring",idx*1.5,5)} className="w-full shadow-card p-[1px] rounded-[20px] green-pink-gradient">
            
            <div options={{max:45,scale:1,speed:450}} className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[250px] flex flex-col justify-center items-center gap-5">
            <img src={icon} alt="image" className="h-20"/>
            <p className="text-white  text-center font-bold tracking-wide">{title}</p>
           </div>
        </motion.div>
    </Tilt>)
}
function About(){
    return (
        <>
            <motion.div variants={textVariant()} className="mt-20">
                <p className={`${styles.sectionSubText} `}>Introduction</p>
                <p className={`${styles.sectionHeadText}`}>Overview</p>
                <p className="mt-5 text-secondary font-medium leading-[30px] tracking-wide mb-20 ">As a full-stack developer, I orchestrate the seamless integration of React, HTML, CSS, MongoDB, Node.js, Express.js, TypeScript, Material-UI, Tailwind CSS, and even jQuery when necessary, crafting captivating web applications that delight users with their elegance and functionality.</p>
            </motion.div>
        <div className="flex flex-wrap gap-10 justify-center items-center">
        {
            services.map((service,idx)=>{
             return  <ServiceCard key={service.title} index={idx} {...service}/>
            })
        }
        </div>
        </>
    )
}
export default WrapperComponent(About,"about") 