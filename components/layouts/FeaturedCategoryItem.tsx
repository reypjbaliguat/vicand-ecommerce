"use client";

import { Button } from "@mui/material";

interface Props {
  imgName: string;
  label: string;
  handleChangeSelect: (item: string) => void;
  selectedItem: string;
}

function FeaturedCategoryItem({
  imgName,
  label,
  handleChangeSelect,
  selectedItem,
}: Props) {
  return (
    <div
      className={`relative transition-all ${
        selectedItem === label ? "grow-[8]" : "w-[160px] grow"
      }`}
      onClick={() => handleChangeSelect(label)}
    >
      {selectedItem === label ? (
        <div className="absolute bottom-0 left-0 right-0 bg-secondary-black z-50 p-6 h-24 flex">
          {" "}
          <span className="text-white text-sm mr-14">
            Jackets minim mollit non deserunt ullamco est sit aliqua dolor do
            amet sint. Velit officia consequat duis enim.
          </span>
          <Button
            style={{
              backgroundColor: "#ffffff",
              borderRadius: 2,
              color: "#141414",
            }}
            className="flex h-12 w-60 capitalize"
          >
            View all
          </Button>
        </div>
      ) : (
        <>
          <span className="text-white absolute z-50 bottom-0 w-20 left-10 text-center mb-3">
            Shop Now
          </span>
          <span className="text-xl absolute z-50 text-white top-0 mt-5 ml-5">
            {label}
          </span>
        </>
      )}

      <div
        className={`cursor-pointer h-[460px] ${imgName} bg-cover ${
          selectedItem === label ? "brightness-100 bg-center" : "brightness-50"
        }`}
      ></div>
    </div>
  );
}

export default FeaturedCategoryItem;
