import { mdiStar } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";

interface Props {
  label: string;
  star: number;
  amount: number;
  image: string;
}
function ProductItem({ label, star, amount, image }: Props) {
  return (
    <div className="flex flex-col h-[357px] basis-1/5 border-b border-product-border">
      <div
        className={`flex bg-product-gray w-full h-[283px] ${image} bg-center bg-contain bg-no-repeat mb-2`}
      />
      <div className="flex justify-between mb-4">
        <div className="flex flex-col">
          <span className="text-lg">{label}</span>
          <div className="flex">
            {Array.from(Array(star).keys()).map((s) => (
              <Icon key={s} path={mdiStar} size={1} />
            ))}
          </div>
        </div>
        <span className="text-lg font-bold"> $ {amount}</span>
      </div>
    </div>
  );
}

export default ProductItem;
