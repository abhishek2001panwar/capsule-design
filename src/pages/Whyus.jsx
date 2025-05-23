import React, { useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";


function Whyus() {
    // Register ScrollTrigger plugin
    gsap.registerPlugin(ScrollTrigger);
    
    // State to track which sections should be smaller
    const [smallerSections, setSmallerSections] = useState([]);
    
    // Create refs for the sections
    const sectionRefs = useRef([]);
    const addToRefs = (el) => {
        if (el && !sectionRefs.current.includes(el)) {
            sectionRefs.current.push(el);
        }
    };
    
    useEffect(() => {
        // Randomly select sections to be smaller
        const randomSections = [];
        while (randomSections.length < 2) {
            const randomIndex = Math.floor(Math.random() * 6);
            if (!randomSections.includes(randomIndex)) {
                randomSections.push(randomIndex);
            }
        }
        setSmallerSections(randomSections);
        
        // Set up GSAP animations for each section
        sectionRefs.current.forEach((section) => {
            gsap.fromTo(section, 
                { opacity: 0, y: 50 },
                { 
                    opacity: 1, 
                    y: 0,
                    duration: 0.8,
                    scrollTrigger: {
                        trigger: section,
                        start: "top bottom-=100",
                        toggleActions: "play none none reverse"
                    }
                }
            );
        });
        
        return () => {
            ScrollTrigger.getAll().forEach(trigger => trigger.kill());
        };
    }, []);
    
    return (
        <div className="w-full px-3 sm:px-5 py-6 sm:py-10 min-h-screen">
            <h2 className="font-bold text-xs sm:text-sm">
                Want to learn more about <br />
                the benefits of—Capsules®?
            </h2>
            <h1 className="text-3xl sm:text-[4rem] font-bold py-2 sm:py-4">?* Why Capsules®</h1>

            <div className="w-full px-2 sm:px-5 grid grid-cols-1 md:grid-cols-2 gap-5 space-y-5">
                <div 
                    ref={addToRefs} 
                    className={`p-3 sm:p-5 rounded-2xl bg-[#2A2725] transition-all duration-500 ${
                        smallerSections.includes(0) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <h1 className="text-2xl sm:text-4xl font-bold max-w-xs">
                        Enjoy the view through—the wide panoramic glass window
                    </h1>
                </div>
                <div 
                    ref={addToRefs} 
                    className={`rounded-2xl transition-all duration-500 ${
                        smallerSections.includes(1) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <div className="h-full rounded-2xl">
                        <img
                            data-scroll
                            data-scroll-speed="-.1"
                            className="h-full w-full object-cover rounded-2xl transition-all duration-500"
                            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3-square.jpg&w=2559&q=80"
                            alt=""
                        />
                    </div>
                </div>
                
                <div 
                    ref={addToRefs} 
                    className={`p-3 sm:p-5 rounded-2xl bg-[#2A2725] transition-all duration-500 ${
                        smallerSections.includes(2) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <h1 className="text-2xl sm:text-4xl font-bold max-w-xs">
                        Enjoy the view through—the wide panoramic glass window
                    </h1>
                </div>
                <div 
                    ref={addToRefs} 
                    className={`rounded-2xl transition-all duration-500 ${
                        smallerSections.includes(3) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <div className="h-full rounded-2xl">
                        <img
                            data-scroll
                            data-scroll-speed="-.1"
                            className="h-full w-full object-cover rounded-2xl transition-all duration-500"
                            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3-square.jpg&w=2559&q=80"
                            alt=""
                        />
                    </div>
                </div>
                
                <div 
                    ref={addToRefs} 
                    className={`p-3 sm:p-5 rounded-2xl bg-[#2A2725] transition-all duration-500 ${
                        smallerSections.includes(4) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <h1 className="text-2xl sm:text-4xl font-bold max-w-xs">
                        Enjoy the view through—the wide panoramic glass window
                    </h1>
                </div>
                <div 
                    ref={addToRefs} 
                    className={`rounded-2xl transition-all duration-500 ${
                        smallerSections.includes(5) ? 'h-[35vh] md:h-[60vh]' : 'h-[50vh] md:h-screen'
                    }`}
                >
                    <div className="h-full rounded-2xl">
                        <img
                            data-scroll
                            data-scroll-speed="-.1"
                            className="h-full w-full object-cover rounded-2xl transition-all duration-500"
                            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3-square.jpg&w=2559&q=80"
                            alt=""
                        />
                    </div>
                </div>
            </div>
        </div>
    );
}



export default Whyus;
