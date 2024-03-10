import { styles } from "../../styles"
import { staggerContainer } from "../../utils/motion"
import {motion} from "framer-motion"

 const WrapperComponent=(Component,title) =>
    function Wrap(){
        return(
            <motion.section variants={staggerContainer()} initial='hidden' whileInView='show' viewport={{once:true,amount:0.25}} className={"mx-auto "+styles.padding}>
                <span className="hash-span" id={title}>&nbsp;</span>
                <Component/>
            </motion.section>
        )

    }
export default WrapperComponent