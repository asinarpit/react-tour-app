import React from 'react';
import { useScroll, useTransform, motion } from 'framer-motion';
import { useRef } from 'react';
import img1 from "../assets/mountain-man.png";
import img2 from "../assets/fog.png";
import img3 from "../assets/mountains.jpg";
import './Parallax.css';
import SearchIcon from '@mui/icons-material/Search';
export default function Parallax() {
    const ref = useRef();
    const {scrollYProgress} = useScroll({
        target:ref,
        offset:["end end", "end start"]
    });
  
    const yFg = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
    const yBox = useTransform(scrollYProgress, [0, 1], ["0%", "200%"]);

    return (
        <motion.div ref={ref} className="parallax-container"> 
            {/* Title */}

            {/* Foreground Image */}
            <motion.img 
                style={{ y: yFg }} 
                className="foreground-image" 
                src={img1} 
                alt="mountain man" 
            />
            

            <motion.div style={{ y: yBox }}  className='text-box'>
                 {/* Text */}
            <motion.h1 
                
            >
                Unlock your next <br/><span style={{fontSize:"8rem",textTransform:"uppercase"}}>Adventure</span><br/> with seamless travel planning
            </motion.h1>

            {/* button */}
            <button>View Packages</button>

            <div className='input-box-container'>
            <div className='input-box'>
                <input type="text" placeholder='Enter your destination'/>

                <span style={{backgroundColor:"#259b92",padding:"0.5rem"}}>

                <SearchIcon style={{fontSize:"1.2rem",color:"white"}}/>
                </span>


            </div>

            <div style={{display:"flex",alignItems:"center",gap:"1.2rem", color:"white", fontWeight:"500",fontSize:"0.9rem",marginTop:"0.8rem"}}>
                <p>Recommended Location :</p>
                <p style={{backgroundColor:"#259b92",padding:"0.3rem 0.6rem",borderRadius:"1.2rem"}}>New Zealand</p>
                
            </div>

            </div>
           

            </motion.div>
           

            {/* Fog */}
            <motion.img 
                initial={{ translateY: 0 }} 
                whileInView={{ translateY: "100%", transition: { duration: 3, ease: "easeOut", delay: 0.8 } }} 
                src={img2} 
                alt="fog" 
                className="fog-image"
            />

            {/* Background Image */}
            <motion.img 
                className="background-image" 
                src={img3} 
                alt="mountains" 
            />



        </motion.div>
    );
}
