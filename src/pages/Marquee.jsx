import React from "react";

import Image from "../../public/image.avif";
function Marquee() {
return (
    <div className="w-full h-screen flex flex-col items-center justify-center bg-[#181717] text-white overflow-hidden">
        <div className="absolute z-[999]">
            <img src='https://capsules.moyra.co/_vercel/image?url=%2Fimages%2Fcap3.png&w=2559&q=80' alt="Logo" className="w-96 h-auto rounded-2xl object-cover  transition-transform duration-300" />
        </div>
        <marquee behavior="" direction="">
            <div className="text-3xl flex">
                {Array(20).fill().map((_, index) => (
                    <span key={index} className="mx-5 text-[10rem] font-bold">capsule</span>
                ))}
            </div>
        </marquee>
    </div>
);
}

export default Marquee;
