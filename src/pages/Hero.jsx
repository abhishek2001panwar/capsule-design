/* eslint-disable no-unused-vars */
import React from "react";

import Image from "../../public/image.avif";
import { motion, useScroll } from "motion/react";
function Hero() {
    const { scrollYProgress } = useScroll()

    const parentVarients = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                staggerChildren: 1,
            },
        },
    }
    const childVarients = {
        hidden: {
            opacity: 0,
            y: -50,
        },
        visible: {
            opacity: 1,
            y: 0,
            
        },
    }
    
return (
    <div className="p-2 flex flex-col h-screen">
        <div className="relative w-full h-full">
            <img 
                src={Image} 
                className="rounded-4xl w-full h-full object-cover" 
                alt="Capsule" 
            />
            <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, ease: "linear" }}
                className="absolute top-3 left-3 font-bold text-lg"
            >
                <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-white">capsules</h1>
            </motion.div>
            <div className="absolute bottom-10 md:bottom-11 w-full text-lg">
                <motion.div
                    initial="hidden"
                    animate="visible"
                    variants={parentVarients}
                    className="flex flex-col md:flex-row justify-between items-start md:items-center px-3"
                >
                    <motion.h1 
                        variants={childVarients}
                        transition={{ duration: 0.5, ease: "linear" }}
                        className="text-2xl md:text-3xl max-w-xl text-white font-bold mb-4 md:mb-0"
                    >
                        Closer to <br /> Nature—Closer <br /> to Yourself
                    </motion.h1>
                    <motion.h1 
                        variants={childVarients}
                        transition={{ duration: 0.5, ease: "linear" }}
                        className="text-sm md:text-md text-white"
                    >
                        Spend unforgettable and remarkable time <br /> in the Californian desert
                        with—Capsules.
                    </motion.h1>
                </motion.div>
            </div>
        </div>
    </div>
);
}

export default Hero;
