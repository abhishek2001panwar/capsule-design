// Remove Framer Motion imports and add GSAP
import React, { useRef } from "react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/all";

function About() {
  const text = `Welcome  to a world of wild California desert with Capsules®, where you will desert with Capsules® where you will discover exquisite nature
                observing it discover exquisite nature observing it from capsule houses,
                nestled in thefrom capsule houses, nestled in the one of the most
                breathtakingone of the most breathtaking destination on the United
                States`;
  const words = text.split(" ");
  const headingRef = useRef(null);

  useGSAP(() => {
    gsap.registerPlugin(ScrollTrigger);

    if (window.innerWidth >= 768) {
      gsap.to(".char-span", {
        color: "white",
        y: 0,
        opacity: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".heading-text",
          start: "top 80%",
          end: "bottom 20%",
          scrub: 3,
        },
      });
    } else {
      gsap.to(".char-span", {
        color: "white",
        y: 0,
        opacity: 1,
        stagger: 0.01,
        scrollTrigger: {
          trigger: ".heading-text",
          start: "top 90%",
          end: "bottom 60%",
          scrub: 1,
        },
      });
    }
  });

  return (
    <div className="w-full min-h-screen text-white px-3 py-20 md:px-5 md:py-52">
      <h1
        ref={headingRef}
        className="heading-text max-w-7xl text-3xl md:text-4xl lg:text-5xl leading-normal md:leading-[3.5rem] lg:leading-[4rem] font-bold"
      >
        {words.map((word, index) => (
          <React.Fragment key={index}>
            <span
              className="char-span inline-block"
              style={{
                color: "black",
                opacity: 0,
                transform: "translateY(-50px)",
              }}
            >
              {word}
            </span>
            {index < words.length - 1 && (
              <span
                className="char-span inline-block"
                style={{
                  color: "black",
                  opacity: 0,
                  transform: "translateY(-50px)",
                }}
              >
                &nbsp;
              </span>
            )}
          </React.Fragment>
        ))}
      </h1>

      <div className="flex flex-col md:flex-row items-center justify-between max-w-7xl gap-8 px-3 py-16 md:px-5 md:py-32">
        <div className="flex flex-wrap justify-center gap-4">
          <img
            className="w-40 h-28 md:w-52 md:h-32 rounded-full object-cover"
            src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fwelcome-1.png&w=2559&q=80"
            alt=""
          />
          <img
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
