"use client";

import { mdiArrowLeft, mdiArrowRight } from "@mdi/js";
import Icon from "@mdi/react";
import { Button, Card } from "@mui/material";
import { items } from "../constants/testimonialItems";
import TestimonialItem from "./TestimonialItem";

function Testimonial() {
  return (
    <div className="bg-testimonial bg-cover bg-center h-[600px] flex relative mb-[120px]">
      <div className="absolute flex flex-col px-24 h-[600px] w-full bg-[#212C38BD] z-10 text-white">
        <div className="flex justify-between my-10 items-center">
          <h6 className="text-[28px]">Testimonial</h6>
          <div className="flex">
            <Button
              style={{
                background: "#ffffff",
                width: 48,
                height: 48,
                borderRadius: 2,
                color: "#000000",
              }}
              className="mr-5"
            >
              <Icon path={mdiArrowLeft} size={1} />
            </Button>
            <Button
              style={{
                background: "#ffffff",
                width: 48,
                height: 48,
                borderRadius: 2,
                color: "#000000",
              }}
            >
              <Icon path={mdiArrowRight} size={1} />
            </Button>
          </div>
        </div>
        <div className="flex gap-x-5 justify-between min-w-[1240px]">
          {items.map((item) => (
            <TestimonialItem
              key={item.name}
              profilePic={item.profilePic}
              name={item.name}
              message={item.message}
              itemPic={item.itemPic}
              productName={item.productName}
              amount={item.amount}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
