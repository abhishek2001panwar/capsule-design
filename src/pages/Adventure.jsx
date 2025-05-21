import React from "react";

function Adventure() {
return (
    <div className="w-full min-h-screen px-4 md:px-5">
        <h2 className="font-bold text-md px-5">Ready for an adventure?</h2>
        <h1 className="text-5xl md:text-7xl lg:text-[10rem] py-4 px-5 leading-none">
            Discover the
            <br /> desert activities
        </h1>

        <div className="flex flex-col md:flex-row md:items-center justify-between md:px-5 py-10 md:py-20 gap-8">
            <div className="max-w-xl text-xl md:text-2xl lg:text-3xl font-medium">
                {" "}
                We want to make sure your stay is exciting and enjoyable. That's why we
                offer a variety of activities with different
                levels of engagement. Whether you seek
                thrills or tranquility, there's something for
                everyone to make your desert stay truly memorable.
            </div>
            <div className="max-w-xl space-y-2">
                <h2 className="mb-4">
                    All Capsules® houses—has built <br className="hidden md:block" /> based on the same rules:
                </h2>
                <div className="flex flex-wrap gap-2">
                    <button className="px-6 md:px-8 text-lg md:text-xl py-3 md:py-3.5 border rounded-full text-[#9C9285]">
                        Sustainable
                    </button>
                    <button className="px-6 md:px-8 text-lg md:text-xl py-3 md:py-3.5 border rounded-full text-[#9C9285]">
                        Nature
                    </button>
                    <button className="px-6 md:px-8 text-lg md:text-xl py-3 md:py-3.5 border rounded-full text-[#9C9285]">
                        Privacy
                    </button>
                    <button className="px-6 md:px-8 text-lg md:text-xl py-3 md:py-3.5 border rounded-full text-[#9C9285]">
                        Smart
                    </button>
                </div>
            </div>
        </div>
    </div>
);
}

export default Adventure;
