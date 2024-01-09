import { Button } from "@mui/material";
import React from "react";

function MoreWithVicand() {
  return (
    <div className="flex mb-20 min-h-[564px] basis-full relative">
      <div className="min-h-[564px] w-full bg-more-with-vicand bg-cover z-0"></div>
      <div className="absolute flex flex-col justify-center items-center min-h-[564px] w-full bg-[#212C38BD] z-10 text-white">
        <h6 className="font-semibold text-[28px] mb-2"> MORE WITH VICAND </h6>
        <span className="text-[18px] mb-8 w-[560px] font-[300] text-center">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim velit mollit. Exercitation
          veniam consequ sunt nostrud amet ullamco est sit aliqua consequat
          minim mollit non deserunt ullamco est sit, minim mollit non deser
        </span>
        <Button
          style={{
            width: 144,
            height: 44,
            color: "#141414",
            borderRadius: 2,
            background: "#ffffff",
            textTransform: "none",
          }}
        >
          Learn More
        </Button>
      </div>
    </div>
  );
}

export default MoreWithVicand;
