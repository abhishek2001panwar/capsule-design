import React from "react";

import Image from "../../public/image.avif";

function Hero() {
  return (
    <div className="p-2 flex flex-col  h-screen">
      <div className="relative">
        <img src={Image} className="rounded-4xl w-full h-[90%]" alt="" />
        <div className="absolute top-3 left-3 font-bold text-lg">
          <h1 className="text-[8rem] text-white">capsules</h1>
        </div>
        <div className="absolute bottom-24 w-full  text-lg">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl max-w-xl text-white ml-3 font-bold">
              Closer to  <br /> Nature—Closer <br /> to Yourself
            </h1>
            <h1 className="text-md text-white mr-3">
              Spend unforgettable and remarkable time <br /> in the Californian desert
              with—Capsules.
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
