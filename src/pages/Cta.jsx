import React from "react";

function Cta() {
return (
    <div className="flex flex-col items-center justify-center py-12 md:py-20 lg:py-32 px-4 md:px-0">
        <h2 className="font-bold text-lg md:text-xl">Closer than you think</h2>
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-[5rem] py-2 md:py-4 leading-tight md:leading-none text-center">
            Our Capsules® are located <br className="hidden md:block" /> 
            near Los Angeles with easy <br className="hidden md:block" /> 
            access by road.
        </h1>

        <button className="px-6 sm:px-8 md:px-10 py-3 md:py-4 border rounded-full mt-4 md:mt-0">Connect</button>
    </div>
);
}

export default Cta;
