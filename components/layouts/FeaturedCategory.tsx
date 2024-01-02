"use client";

import { Button } from "@mui/material";
import { items } from "../constants/featuredCategoryItems";
import FeaturedCategoryItem from "./FeaturedCategoryItem";
import { useState } from "react";

function FeaturedCategory() {
  const [selectedItem, setSelectedItem] = useState("Jacket");
  const handleChangeSelect = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="mt-[82px] flex basis-full px-24 flex-col mb-20">
      <div className="flex justify-between mb-10">
        <h6 className="text-[28px] font-semibold">Featured Category</h6>
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
      <div className="flex items-stretch">
        {items.map((item) => (
          <FeaturedCategoryItem
            key={item.label}
            label={item.label}
            imgName={item.imgName}
            handleChangeSelect={handleChangeSelect}
            selectedItem={selectedItem}
          />
        ))}
      </div>
    </div>
  );
}

export default FeaturedCategory;
