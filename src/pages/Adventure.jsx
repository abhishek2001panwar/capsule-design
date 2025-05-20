import React from "react";

function Adventure() {
  return (
    <div className="w-full h-screen px-5">
      <h2 className="font-bold text-md">Ready for an adventure?</h2>
      <h1 className="text-[10rem] py-4  leading-none">
        Discover the
        <br /> desert activities
      </h1>

      <div className="flex items-center justify-between  px-5 py-20">
        <div className="max-w-xl text-3xl font-medium">
          {" "}
         We want to make sure your stay is exciting and enjoyable. That’s why we
offer a variety of activities with different
levels of engagement. Whether you seek
thrills or tranquility, there’s something for
everyone to make your desert stay truly memorable.
        </div>
        <div className="max-w-xl space-y-2 space-x-2 ">
          <h2>
            All Capsules® houses—has built <br /> based on the same rules:
          </h2>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Sustainable
          </button>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Nature{" "}
          </button>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Privacy
          </button>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Smart
          </button>
        </div>
      </div>
    </div>
  );
}

export default Adventure;
