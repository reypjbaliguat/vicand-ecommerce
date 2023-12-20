"use client";

import { useEffect, useState } from "react";

function PromotionHeader() {
  const [text, setText] = useState("Fast shipping only in United States!");
  const textArr = [
    "Fast shipping only in United States!",
    "Don't miss the chance to get the 20% discount!",
    "The 20% discount will apply on your first purchase!",
  ];
  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      if (index === 2) {
        index = 0;
      } else {
        index = index + 1;
      }
      setText(textArr[index]);
    }, 3000);
    return () => {
      clearInterval(interval);
    };
  }, []);
  return (
    <div className="py-4 bg-secondary-black flex basis-full justify-center items-center text-white text-sm">
      {text}
    </div>
  );
}

export default PromotionHeader;
