import React from "react";

function Discover() {
  return (
    <div className="w-full h-screen px-5">
      <h2 className="font-bold text-md">Discover available capsules</h2>
      <h1 className="text-[10rem] py-4 tracking-tight leading-none">
        Choose the one <br /> you like best
      </h1>

      <div className="flex items-center justify-between  px-5 py-32">
        <div className="max-w-lg text-3xl font-medium">
          {" "}
          You can choose one of three premium capsule houses in our offer. Each
          of our capsules provides the highest quality and meets the standards
          adjusted to your needs. Choose the one you like
        </div>
        <div className="max-w-xl space-y-2 space-x-2 ">
          <h2>
            All Capsules® houses—has built <br /> based on the same rules:
          </h2>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Sustainable
          </button>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
Nature          </button>
          <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">
            Privacy
          </button>
                    <button className="px-8 text-xl py-3.5 border rounded-full text-[#9C9285]">Smart</button>

        </div>
      </div>
    </div>
  );
}

export default Discover;
