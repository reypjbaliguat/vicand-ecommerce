import { Button } from "@mui/material";
import React from "react";

interface Props {
  type: "men" | "women";
}

function PerfectAestheticWomen({ type }: Props) {
  return (
    <div className="flex basis-full px-24 mb-[120px]">
      <div
        className={`flex basis-1/2 py-[63px] flex-col ${
          type === "women" ? "order-1" : "order-2 pl-[128px]"
        }`}
      >
        <span className="font-bold">
          STYLISH OUTDOOR - {type === "women" ? "WOMEN" : "MEN"}
        </span>
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
          Shop {type === "women" ? "Women" : "Men"}
        </Button>
      </div>
      <div
        className={`flex bg-cover bg-center basis-1/2 ${
          type === "women"
            ? "order-2 bg-aesthetic-women"
            : "order-1 bg-aesthetic-men"
        }`}
      />
    </div>
  );
}

export default PerfectAestheticWomen;
