import {styles} from "../styles"
import {motion} from "framer-motion"
import ComputerCanvas from "./canvas/Computer"
export default function Hero(){
    return (
        <section className="relative w-full h-screen mx-auto flex flex-col ">
           <div className={styles.paddingX+" absolute top-[100px] flex flex-row gap-3"}>
            <div className="flex flex-col items-center">
                <div className="h-5 w-5 rounded-full bg-violet-500 "/>
                <div className="w-1 h-80 violet-gradient"/>
            </div>
            <div className="flex flex-col gap-2 text-balance w-3/5 xs:w-4/5">
                <p className={styles.heroHeadText}>Hi, I'm <span className="text-violet-500">Anirban</span></p>
                <p className={styles.heroSubText+" text-pretty tracking-wide"}>I am a Full Stack Developer with a passion for crafting seamless digital experiences.</p>
            </div>
            </div>
           
            <ComputerCanvas/>
            <div className="w-full absolute bottom-1 h-[40px] flex justify-center">
                <a className="h-[40px] w-[28px] rounded-xl border-4 flex justify-center items-flex-end" href={`#about`}>
                    {/* Here in animate the x y and z axis are defined and transition defines the movement of the ball*/}
                    <motion.div className="h-[10px] w-[10px] rounded-full bg-white mt-[1px]" animate={{y:[0,18,0]}} transition={{duration:1.5,repeat:Infinity,repeatType:'loop'}}/> 
                </a>
            </div>

        </section>
    )
}