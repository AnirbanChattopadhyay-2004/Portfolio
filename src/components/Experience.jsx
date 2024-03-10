import {motion} from "framer-motion"
import {styles} from "../styles"
import { VerticalTimeline,VerticalTimelineElement } from "react-vertical-timeline-component"
import { experiences } from "./constants"
import WrapperComponent from "./Wrapper"
import { textVariant } from "../utils/motion"
import "react-vertical-timeline-component/style.min.css"
function ExperienceCard({exp}){
    return( 
   
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: '#1d1836', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  #1d1836' }}
          date={exp.date}
          iconStyle={{background:exp.iconBg}}
          icon={<img src={exp.icon} alt="icon" />}
        >
          <h3 className="vertical-timeline-element-title text-center font-bold">{exp.title}</h3>
          <h4 className="vertical-timeline-element-subtitle mt-2 text-center font-semibold">{exp.company_name}</h4>
          <ul className="list-disc ml-5 mt-3 space-y-3 tracking-wide">
            {(exp.points).map((point,idx)=>{
                return <li key={idx} >{point}</li>
            })}
          </ul>
        </VerticalTimelineElement>
    )

}
function Experience(){
    return (
        <>
        <motion.div variants={textVariant()}>
            <p className={`${styles.sectionSubText}`}>What have I did ?</p>
            <p className={`${styles.sectionHeadText}`}>Work Experience.</p>
            
        </motion.div>
        <VerticalTimeline className="mt-20">
        {
            experiences.map((experience)=>(
                <ExperienceCard key={experience.company_name} exp={experience}/>
            ))
        }
        </VerticalTimeline>
        </>
    )
}
export default WrapperComponent(Experience,"experience")