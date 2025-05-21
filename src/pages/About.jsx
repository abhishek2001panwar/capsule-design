// eslint-disable-next-line no-unused-vars
import { color, motion, useScroll, useTransform } from "motion/react";

import React, { useRef } from "react";

function About() {
  const text = `Welcome to a world of wild California desert with Capsules®, where you
        will desert with Capsules®, where you will discover exquisite nature
        observing it discover exquisite nature observing it from capsule houses,
        nestled in thefrom capsule houses, nestled in the one of the most
        breathtakingone of the most breathtaking destination on the United
        States`;
  const words = text.split("");
  const headingRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: headingRef,
    offset: ["start end", "end end"]
  });

  const parentVarients = {
    hidden: {
      color: "white",
      y: -50
    },
    visible: {
        color: "white",
      y: 0,
      transition: {
        staggerChildren: 1
      }
    }
  };
    const childVarients = {
        hidden: {
            color: "gray",
            y: -50
        },
        visible: {
            color: "gray",
            y: 0,
            
        },
    }

return (
    <div className="w-full min-h-screen text-white px-3 py-20 md:px-5 md:py-52">
        <h1 
            ref={headingRef}
            initial="hidden"
            animate="visible"
            variants={parentVarients}
            transition={{ duration: 0.5, ease: "linear" }}
            className="max-w-7xl text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-[3.5rem] lg:leading-[4rem] font-bold"
        >
            {words.map((char, index) => {
                return (
                    <motion.span
                        variants={childVarients}
                        style={{
                            opacity: useTransform(scrollYProgress, [0, 1], [0, 1]),
                            y: useTransform(scrollYProgress, [0, 1], [-50, 0])
                        }}
                        key={index}
                    >
                        {char}
                    </motion.span>
                );
            })}
        </h1>

        <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl gap-8 px-3 py-16 md:px-5 md:py-32">
            <div className="flex flex-wrap justify-center gap-4">
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    drag
                    dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="w-40 h-28 md:w-52 md:h-32 rounded-full object-cover"
                    src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fwelcome-1.png&w=2559&q=80"
                    alt=""
                />
                <motion.img
                    initial={{ y: -100, opacity: 0 }}
                    drag
                    dragConstraints={{ top: -100, left: -100, right: 100, bottom: 100 }}
                    whileInView={{ y: 0, opacity: 1 }}
                    className="w-40 h-28 md:w-52 md:h-32 rounded-full object-cover"
                    src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fwelcome-2.png&w=2559&q=80"
                    alt=""
                />
            </div>
            <div>
                <h1 className="max-w-xl text-xl md:text-2xl lg:text-3xl font-medium text-center md:text-left">
                    Welcome Image 2 A place where you can be with yourself and your
                    loved ones. A place where you can experience unforgettable desert
                    things.
                </h1>
            </div>
        </div>
    </div>
);
}

export default About;
