/* eslint-disable no-unused-vars */
import React, { useRef } from "react";

import Image from "../../public/image.avif";
import { motion, useScroll, useTransform } from "motion/react";
function Marquee() {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start start", "end start"],
  });

  // Transform scroll progress to image dimensions - simpler approach
  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.3], // Adjust these values as needed
    [1, 3] // Start at normal size and grow to 5x
  );

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
  };

  const childVarients = {
    hidden: {
      opacity: 0,
      y: -50,
    },
    visible: {
      opacity: 1,
      y: 0,
    },
  };

  // Function to create scroll animation properties for each box
  const useBoxAnimation = (boxRef) => {
    const { scrollYProgress } = useScroll({
      target: boxRef,
      offset: ["start 10%", "bottom 15%"],
    });

    // Transform scroll progress to animation values (equivalent to GSAP scrollTrigger)
    const scale = useTransform(scrollYProgress, [0, 1], [1, 0.7]);
    const x = useTransform(scrollYProgress, [0, 1], [0, 200]);
    const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

    return { scale, x, opacity };
  };

  // Create refs for each box
  const box1Ref = useRef(null);
  const box2Ref = useRef(null);
  const box3Ref = useRef(null);

  // Get animation properties for each box
  const box1Animation = useBoxAnimation(box1Ref);
  const box2Animation = useBoxAnimation(box2Ref);
  const box3Animation = useBoxAnimation(box3Ref);

  return (
    <>
      <div
        ref={containerRef}
        className="w-full h-screen flex flex-col items-center justify-center bg-[#181717] text-white overflow-hidden"
      >
        <div className="absolute z-[99] overflow-hidden ">
          <motion.img
            transition={{ duration: 0.5, ease: "linearInOut" }}
            style={{
              scale: imageScale,
              transformOrigin: "center center",
            }}
            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80"
            alt="Logo"
            className="w-[40rem]  h-auto rounded-md object-cover transition-transform duration-300"
          />
        </div>
        <marquee behavior="" direction="">
          <div className="text-3xl flex">
            {Array(20)
              .fill()
              .map((_, index) => (
                <span key={index} className="mx-5 text-[10rem] font-bold">
                  capsule
                </span>
              ))}
          </div>
        </marquee>
      </div>

      <div >

      <div 
        data-scroll
        data-scroll-speed="-.1"
      
      className="p-3 flex flex-col h-screen">
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
                     <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-white">Classic Capsules</h1>
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
                            Classic Capsule® boasts refined aesthetics and <br /> a modern
interior, creating an intimate retreat in a desert landscape.
                         </motion.h1>
                     </motion.div>
                 </div>
             </div>
         </div>

       <div

       data-scroll
        data-scroll-speed=".2"
        data-scroll-section
        
       
       className="p-3 flex flex-col h-screen">
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
                      <h1 className="text-4xl md:text-6xl lg:text-[8rem] text-white">Dessert Capsules</h1>
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
                              With its striking architecture and upscale <br /> amenities, Desert
Capsule® offers an exclusive retreat in the heart of the desert
                          </motion.h1>
                      </motion.div>
                  </div>
              </div>
          </div>

       <div
        data-scroll
        data-scroll-speed=".1"
        data-scroll-section
       className="p-3 flex flex-col h-screen">
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
                      <h1 className="text-4xl md:text-5xl lg:text-[7rem] text-white   ">Terrace Capsules</h1>
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
                             The most prestige capsule with the biggest <br /> terrace
and jacuzzi with an amazing view of Los Angeles
                          </motion.h1>
                      </motion.div>
                  </div>
              </div>
          </div>
      </div>
    </>
  );
}

export default Marquee;
