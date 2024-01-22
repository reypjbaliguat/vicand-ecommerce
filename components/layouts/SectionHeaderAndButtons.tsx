import { mdiArrowUpRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  isViewAll?: boolean;
}
function SectionHeaderAndButtons({ label, isViewAll }: Props) {
  return (
    <div className="flex basis-full justify-between mb-10">
      <h6 className="text-[28px] font-semibold">{label}</h6>
      {isViewAll ? (
        <Button
          style={{
            backgroundColor: "#141414",
            color: "#ffffff",
            width: 112,
            height: 40,
            borderRadius: 2,
            textTransform: "none",
          }}
          endIcon={<Icon path={mdiArrowUpRight} size={1} />}
        >
          View All
        </Button>
      ) : (
        <div className="flex gap-3">
          <Button
            style={{
              backgroundColor: "#141414",
              color: "#ffffff",
              width: 112,
              height: 40,
              borderRadius: 2,
              textTransform: "none",
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
              textTransform: "none",
            }}
          >
            Women
          </Button>
        </div>
      )}
    </div>
  );
}

export default SectionHeaderAndButtons;
