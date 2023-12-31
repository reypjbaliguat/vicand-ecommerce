import { Button } from "@mui/material";
import React from "react";

function LandingPageHero() {
  return (
    <section className="h-[644px] w-full px-24 bg-hero-image bg-cover flex justify-center flex-col">
      <span className="text-white font-bold">STYLISH OUTDOOR</span>
      <span className="text-white text-[52px] font-extrabold">
        A Perfect Aesthetic
      </span>
      <span className="text-white w-[476px] mb-8">
        Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet
        sint. Velit officia consequat duis enim. Icia consequat duis enim Amet
        minim mollit .
      </span>
      <div className="flex gap-5">
        <Button
          style={{
            backgroundColor: "#ffffff",
            color: "#000000",
            width: 144,
            height: 48,
            borderRadius: 2,
          }}
        >
          {" "}
          Shop Women{" "}
        </Button>
        <Button
          style={{
            color: "#ffffff",
            border: "2px solid #ffffff",
            width: 144,
            height: 48,
            borderRadius: 2,
          }}
        >
          {" "}
          Shop Men{" "}
        </Button>
      </div>
    </section>
  );
}

export default LandingPageHero;
