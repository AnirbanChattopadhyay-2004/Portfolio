import React,{useState,useEffect} from "react"
import {Link} from "react-router-dom"
import {navLinks} from "./constants/index.js"
import {logo,menu,close} from "../assets/index.js"
import {styles} from "../styles.js"
export default function Navbar(){
    const [active,setActive] =useState("")
    const [toggle,setToggle]=useState(false)
    return (
        <nav className={`${styles.paddingX} w-full flex items-center justify-center bg-primary fixed top-0 z-20 py-2`}>
            <div className="flex  items-center  w-full max-w-7x1 mx-auto">
                <Link to="/" className="flex items-center gap-3 flex-1" onClick={()=>{
                    setActive("")
                    window.scrollTo(0,0)
                }}>
                    
                    <img src={logo} className="w-9 h-9 object-contains"/>
                    <p className="text-[16px] flex text-white font-medium cursor-pointer">Anirban<span className="sm:block hidden">&nbsp;| Full Stack Developer</span></p>
                </Link>
                <ul className="list-none hidden sm:flex flex-row gap-10">
                    
                    {
                        navLinks.map((link)=>{
                           return( <li key={link.id}><a className={`${active==link.id?"text-white":"text-secondary"} text-sm hover:text-white font-medium`} href={`#${link.id}`} onClick={()=>{setActive(link.id)}}>{link.title}</a></li>)
                        })
                    } 
                    
                     
                </ul>
                <div className="block sm:hidden flex-row justify-end " >
                    <img src={toggle?close:menu} alt="Images" className="cursor-pointer object-contain h-[28px] w-[28px]" onClick={()=>{setToggle(!toggle)}}/>
                    <div className={!toggle?"hidden":"flex"+"top-25 min-w-[140px] right-0 black-gradient absolute p-6 z-10 mx-4 my-4 rounded-xl"}>
                            <ul className="list-none flex flex-col items-start justify-end gap-3">

                                {
                                    navLinks.map((link)=>{
                                    return( <li key={link.id}><a className={`${active==link.id?"text-white":"text-secondary"} text-sm hover:text-white font-medium tracking-wide`} href={`#${link.id}`} onClick={()=>{setActive(link.id); setToggle(!toggle)} }>{link.title}</a></li>)
                                    })
                                } 
                                
                           </ul>
                    </div>
                </div>
            </div>
        </nav>
    )
}