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
        <div className="absolute z-[99] ">
          <motion.img
            transition={{ duration: 0.5, ease: "linearInOut" }}
            style={{
              scale: imageScale,
              transformOrigin: "center center",
            }}
            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80"
            alt="Logo"
            className="w-96 h-auto rounded-2xl object-cover transition-transform duration-300"
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

      <div>

      <motion.div
        ref={box1Ref}
        className="box  p-2 flex flex-col h-screen sticky top-[15px]"
        style={{
          scale: box1Animation.scale,
          x: box1Animation.x,
          opacity: box1Animation.opacity,
        }}
        transition={{ duration: 0.9 }}
      >
        <div className="relative">
          <img
           
            src='https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80'
            className="rounded-4xl w-full h-[90%]"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute top-3 left-3 font-bold text-lg"
          >
            <h1 className="text-[6rem] text-white">Classic Capsules</h1>
          </motion.div>
          <div className="absolute bottom-24 w-full text-lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={parentVarients}
              className="flex justify-between items-center"
            >
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-3xl max-w-xl text-white ml-3 font-bold"
              >
                Closer to <br /> Nature—Closer <br /> to Yourself
              </motion.h1>
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-md text-white mr-3"
              >
               Classic Capsule® boasts refined aesthetics <br /> and a modern
interior, creating an intimate retreat in a desert landscape
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={box2Ref}
        className="box p-2 flex flex-col h-screen sticky top-[14px]"
        style={{
          scale: box2Animation.scale,
          x: box2Animation.x,
          opacity: box2Animation.opacity,
        }}
        transition={{ duration: 0.9 }}
      >
        <div className="relative">
          <img
           
            src={Image}
            className="rounded-4xl w-full h-[90%]"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute top-3 left-3 font-bold text-lg"
          >
            <h1 className="text-[6rem] text-white">Terrace Capsules</h1>
          </motion.div>
          <div className="absolute bottom-24 w-full text-lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={parentVarients}
              className="flex justify-between items-center"
            >
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-3xl max-w-xl text-white ml-3 font-bold"
              >
                Closer to <br /> Nature—Closer <br /> to Yourself
              </motion.h1>
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-md text-white mr-3"
              >
                The most prestige capsule with the biggest <br /> terrace
and jacuzzi with an amazing view of Los Angeles.
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.div>

      <motion.div
        ref={box3Ref}
        className="box p-2 flex flex-col h-screen sticky top-[14px]"
        style={{
          scale: box3Animation.scale,
          x: box3Animation.x,
          opacity: box3Animation.opacity,
        }}
        transition={{ duration: 0.9 }}
      >
        <div className="relative">
          <img
           
            src={Image}
            className="rounded-4xl w-full h-[90%]"
            alt=""
          />
          <motion.div
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: "linear" }}
            className="absolute top-3 left-3 font-bold text-lg"
          >
            <h1 className="text-[6rem] text-white">Dessert Capsules</h1>
          </motion.div>
          <div className="absolute bottom-24 w-full text-lg">
            <motion.div
              initial="hidden"
              animate="visible"
              variants={parentVarients}
              className="flex justify-between items-center"
            >
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-3xl max-w-xl text-white ml-3 font-bold"
              >
                Closer to <br /> Nature—Closer <br /> to Yourself
              </motion.h1>
              <motion.h1
                variants={childVarients}
                transition={{ duration: 0.5, ease: "linear" }}
                className="text-md text-white mr-3"
              >
               With its striking architecture and upscale <br /> amenities, Desert
Capsule® offers an exclusive retreat in the heart of the desert.
              </motion.h1>
            </motion.div>
          </div>
        </div>
      </motion.div>
      </div>
    </>
  );
}

export default Marquee;
