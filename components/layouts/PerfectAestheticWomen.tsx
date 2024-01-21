import { Button } from "@mui/material";
import React from "react";

function PerfectAestheticWomen() {
  return (
    <div className="flex basis-full px-24 mb-[120px]">
      <div className="flex basis-1/2 py-[63px] flex-col">
        <span className="font-bold">STYLISH OUTDOOR - WOMEN</span>
        <span className="font-extrabold text-[52px] mb-1">
          A Perfect Aesthetic
        </span>
        <span className="text-lg mb-8 w-[479px]">
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
          sint. Velit officia consequat duis enim. Icia consequat duis enimAmet
          minim mollit .
        </span>
        <Button
          className=""
          variant="contained"
          style={{
            backgroundColor: "#141414",
            color: "#ffffff",
            width: 148,
            height: 52,
            borderRadius: 2,
            textTransform: "none",
          }}
        >
          Shop Women
        </Button>
      </div>
      <div className="flex bg-cover bg-center basis-1/2 bg-aesthetic-woman" />
    </div>
  );
}

export default PerfectAestheticWomen;
