/* eslint-disable no-unused-vars */
import { motion } from "motion/react";
import React from "react";

function Discover() {
    
return (
    <div className="w-full min-h-screen px-3 md:px-5">
        <motion.h2 
            className="font-bold text-md"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "linear" }}
        >
            Discover available capsules
        </motion.h2>
                 
        <motion.h1
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false }}
            transition={{ duration: 0.6, ease: "linear" }}
            className="text-4xl md:text-6xl lg:text-8xl xl:text-[10rem] py-2 md:py-4 leading-tight md:leading-none"
        >
            Choose the <br className="md:block" /> one you like best
        </motion.h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between px-2 md:px-5 py-10 md:py-32 gap-8">
            <div className="max-w-lg text-xl md:text-2xl lg:text-3xl font-medium">
                You can choose one of three premium capsule houses in our offer. Each
                of our capsules provides the highest quality and meets the standards
                adjusted to your needs. Choose the one you like
            </div>
            <div className="max-w-xl space-y-2">
                <h2 className="mb-3">
                    All Capsules® houses—has built <br className="hidden md:block" /> based on the same rules:
                </h2>
                <div className="flex flex-wrap gap-2">
                    <button className="px-4 md:px-8 text-lg md:text-xl py-2.5 md:py-3.5 border rounded-full text-[#9C9285]">
                        Sustainable
                    </button>
                    <button className="px-4 md:px-8 text-lg md:text-xl py-2.5 md:py-3.5 border rounded-full text-[#9C9285]">
                        Nature
                    </button>
                    <button className="px-4 md:px-8 text-lg md:text-xl py-2.5 md:py-3.5 border rounded-full text-[#9C9285]">
                        Privacy
                    </button>
                    <button className="px-4 md:px-8 text-lg md:text-xl py-2.5 md:py-3.5 border rounded-full text-[#9C9285]">
                        Smart
                    </button>
                     <button className="px-4 md:px-8 text-lg md:text-xl py-2.5 md:py-3.5 border rounded-full text-[#9C9285]">
                        Security
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Discover;
