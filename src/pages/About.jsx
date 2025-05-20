import React from "react";

function About() {
  return (
    <div className=" w-full min-h-screen text-white px-5 py-52">
      <h1 className="max-w-7xl text-5xl leading-[4rem] font-bold">
        Welcome to a world of wild California desert with Capsules®, where you
        willdesert with Capsules®, where you will discover exquisite nature
        observing itdiscover exquisite nature observing it from capsule houses,
        nestled in thefrom capsule houses, nestled in the one of the most
        breathtakingone of the most breathtaking destination on the United
        States
      </h1>

      <div className="flex items-center justify-between max-w-7xl px-5 py-32">
        <div className="flex">
         <img className="w-52 h-32 rounded-full" src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fwelcome-1.png&w=2559&q=80" alt="" />
         <img className="w-52 h-32 rounded-full" src="https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fwelcome-2.png&w=2559&q=80" alt="" />
        </div>
        <div>
          <h1 className="max-w-xl text-3xl font-medium">
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
