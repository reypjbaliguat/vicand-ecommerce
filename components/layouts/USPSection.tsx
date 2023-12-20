import { mdiTruck } from "@mdi/js";
import Icon from "@mdi/react";
import React from "react";
import { items } from "../constants/uspItems";

function USPSection() {
  return (
    <div className="px-24 bg-secondary-black text-white flex basis-full gap-11 py-14">
      {items.map((item) => (
        <div
          key={item.icon}
          className="flex w-[290px] py-4 justify-center items-center bg-[#1A1A1A] rounded-[4px]"
        >
          <Icon path={item.icon} size={1.5} className="mr-6" />
          <span className="w-[184px] text-sm">{item.text}</span>
        </div>
      ))}
    </div>
  );
}

export default USPSection;
