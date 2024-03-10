import { useState,useRef } from "react"
import {motion} from "framer-motion"
import WrapperComponent from "./Wrapper"
import { styles } from "../styles"
import { slideIn } from "../utils/motion"
import EarthCanvas from "./canvas/earthCanvas/"
import emailjs from "@emailjs/browser"
function Contact(){
    const [form,setForm]=useState({
        name:"",
        email:"",
        message:""
    })

    const formref =useRef(null)
    
    const [loading,setLoading]=useState(false) 
    
    function handleSubmit(e){
        e.preventDefault()
        setLoading(true)
        emailjs.send('service_3gz0ji4','template_ff0dq5t',{
            from_name:form.name,
            to_name:'Anirban',
            from_email:form.email,
            to_email:'anirbanchattopadhyay2004@gmail.com',
            message:form.message
        },'caiUzkLwfEQzH6yMC')
        .then(()=>{
            setLoading(false)
            alert('Your mail has been sent successfully.Rosponse will be given as soon as possible.')
            setForm({
                name:"",
                email:"",
               message:""
            })
        }),(error)=>{
            console.log(error)
            setLoading(false)
            alert("Something went wrong")
        }
        
    }
    
    function handlechange(e){
        const {name,value}=e.target
        setForm({...form,[name]:value})
    }
    return (
        
        <div className="flex xl:flex-row gap-8 flex-col-reverse overflow-hidden">
            <motion.div variants={slideIn("left","tween",0.1,1)} className="flex-[0.75]  bg-black-100 rounded-3xl p-8">
                <p className={styles.sectionSubText}>Want to contact me!</p>
                <h1 className={styles.sectionHeadText}>Contact</h1>
                <form onSubmit={handleSubmit} className="mt-10 flex flex-col gap-10">
                    <label className="flex flex-col gap-3 ">
                        <p className="text-white font-black">Your Name</p>
                        <input type="text" name="name" value={form.name} onChange={handlechange} className="bg-tertiary h-12 rounded-lg border-none outline-none p-5" placeholder="What's your good name?"/>
                    </label>
                    <label className="flex flex-col gap-3 ">
                        <p className="text-white font-black">Your Email</p>
                        <input type="email" name="email" value={form.email} onChange={handlechange} className="bg-tertiary h-12 rounded-lg border-none outline-none p-5" placeholder="What's your good email?"/>
                    </label>
                    <label className="flex flex-col gap-3 ">
                        <p className="text-white font-black">Message</p>
                        <textarea name="message" rows={7} value={form.message} onChange={handlechange} className="bg-tertiary  rounded-lg border-none outline-none p-5" placeholder="What's your message?"/>
                    </label>
                    <button type="submit" className="bg-tertiary h-10 shadow-xl rounded-lg w-1/5 mr-auto">{loading?"Sending...":"Send"}</button>
                </form>
            </motion.div>
            <motion.div className="xl:flex-[1.25] xl:h-auto lg:h-[550px] md:h-[350px] flex justify-center items-center" variants={slideIn("right","tween",0.5,1)}>
                <EarthCanvas/>
            </motion.div>
        </div>
        
    )
}
export default WrapperComponent(Contact,"contact")