"use client";

import { Button } from "@mui/material";
import { items } from "../constants/featuredCategoryItems";
import FeaturedCategoryItem from "./FeaturedCategoryItem";
import { useState } from "react";
import SectionHeaderAndButtons from "./SectionHeaderAndButtons";

function FeaturedCategory() {
  const [selectedItem, setSelectedItem] = useState("Jacket");
  const handleChangeSelect = (item: string) => {
    setSelectedItem(item);
  };
  return (
    <div className="mt-[82px] flex basis-full px-24 flex-col mb-20">
      <SectionHeaderAndButtons label={"Featured Category"} />
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
