import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import { Button } from "@mui/material";
import React from "react";

interface Props {
  label: string;
  star: number;
  amount: number;
  image: string;
  image2: string;
}
function ProductItem({ label, star, amount, image, image2 }: Props) {
  return (
    <div className="flex relative group flex-col h-[357px] basis-1/5 border-b border-product-border transition-all">
      <div
        className={`flex bg-product-gray w-full group-hover:h-[357px] h-[283px] ${image} ${image2} bg-center bg-contain bg-no-repeat mb-2 group-hover:mb-0`}
      />
      <Button
        style={{
          backgroundColor: "#141414",
          color: "#ffffff",
          width: 180,
          height: 50,
          borderRadius: 2,
        }}
        className="absolute bottom-4 hidden group-hover:block self-center"
      >
        Quick View
      </Button>
      <div className="flex justify-between mb-4 group-hover:mb-0 group-hover:hidden transition-all ">
        <div className="flex flex-col">
          <span className="text-lg">{label}</span>
          <div className="flex">
            {Array.from(Array(star).keys()).map((s) => (
              <Icon key={s} path={mdiStar} size={1} />
            ))}
            <span className="text-xs">(138)</span>
          </div>
        </div>
        <span className="text-lg font-bold"> $ {amount}</span>
      </div>
    </div>
  );
}

export default ProductItem;
