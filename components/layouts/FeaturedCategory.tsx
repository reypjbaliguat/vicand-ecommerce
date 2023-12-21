import { Button } from "@mui/material";
import tshirt from "@/public/assets/featured-category/tshirt.jpg";
import Image from "next/image";

function FeaturedCategory() {
  return (
    <div className="mt-[82px] flex basis-full px-24 flex-col">
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
      <div className="flex">
        <div className="flex w-[160px] h-[460px] bg-tshirt-image bg-cover bg-center relative flex-col justify-between">
          <span className="text-xl text-white left-5 top-5 mt-5 ml-5">
            Tshirt
          </span>
          <span className="text-xl text-white left-[50%] bottom-[14px] text-center mb-3">
            Shop Now
          </span>
        </div>
      </div>
    </div>
  );
}

export default FeaturedCategory;
