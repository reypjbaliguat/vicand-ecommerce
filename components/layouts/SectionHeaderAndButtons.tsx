import { Button } from "@mui/material";
import React from "react";

interface Props {
  label: string;
}
function SectionHeaderAndButtons({ label }: Props) {
  return (
    <div className="flex justify-between mb-10">
      <h6 className="text-[28px] font-semibold">{label}</h6>
      <div className="flex gap-3">
        <Button
          style={{
            backgroundColor: "#141414",
            color: "#ffffff",
            width: 112,
            height: 40,
            borderRadius: 2,
          }}
        >
          Men
        </Button>
        <Button
          style={{
            color: "#BFBFBF",
            border: "1px solid #BFBFBF",
            width: 112,
            height: 40,
            borderRadius: 2,
          }}
        >
          Women
        </Button>
      </div>
    </div>
  );
}

export default SectionHeaderAndButtons;
