import BallCanvas from "./canvas/BallCanvas"
import { technologies } from "./constants"
import WrapperComponent from "./Wrapper"
function Tech(){
    return (
        <>
        <div className="flex flex-row flex-wrap  gap-10 ">
           
            {
                technologies.map((tech)=>{
                    return(
                    <div  key={tech.name} className="size-28 " >
                        <BallCanvas icon={tech.icon} />
                    </div>)
                })
            }
        </div>
        </>
    )
}
export default WrapperComponent(Tech,"tech")