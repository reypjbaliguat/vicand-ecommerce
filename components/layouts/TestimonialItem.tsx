import {
  mdiFormatQuoteOpen,
  mdiShoppingOutline,
  mdiStar,
  mdiStarOutline,
} from "@mdi/js";
import Icon from "@mdi/react";
import { Card, Divider } from "@mui/material";
import Image, { StaticImageData } from "next/image";

interface Props {
  profilePic: StaticImageData;
  name: string;
  message: string;
  itemPic: StaticImageData;
  productName: string;
  amount: number;
}

function TestimonialItem({
  profilePic,
  name,
  message,
  itemPic,
  productName,
  amount,
}: Props) {
  return (
    <Card className="flex flex-col basis-[295px]">
      <div className="flex flex-col p-4">
        <Image
          height={62}
          width={62}
          alt="testimonial photo"
          src={profilePic}
          className="self-center"
        />
        <div className="flex flex-col mb-2">
          <Icon
            path={mdiFormatQuoteOpen}
            size={1}
            className="text-dark-blue self-center mr-28"
          />
          <span className="font-semibold text-dark-blue self-center">
            {name}
          </span>
        </div>
        <div className="flex justify-center mb-4">
          <Icon path={mdiStar} size={0.7} className="mr-[2px] text-dark-blue" />
          <Icon path={mdiStar} size={0.7} className="mr-[2px] text-dark-blue" />
          <Icon path={mdiStar} size={0.7} className="mr-[2px] text-dark-blue" />
          <Icon path={mdiStar} size={0.7} className="mr-[2px] text-dark-blue" />
          <Icon path={mdiStarOutline} size={0.7} className="text-dark-blue" />
        </div>
        <Divider className="bg-dark-blue w-[90%] mb-4 self-center" />
        <span className="text-secondary-black text-sm mb-7">{message}</span>
      </div>
      <div className="flex p-4 bg-dark-blue items-center justify-between">
        <div className="flex">
          <Image
            alt="testimonial-product"
            height={49}
            width={47}
            src={itemPic}
            className="mr-3"
          />
          <div className="flex flex-col justify-start  text-white">
            {" "}
            <span className="font-semibold mb-1 truncate max-w-[120px]">
              {productName}
            </span>
            <span className="font-semibold">${amount}</span>
          </div>
        </div>
        <Card
          className="flex items-center justify-center w-10 h-10"
          elevation={0}
        >
          <Icon path={mdiShoppingOutline} size={1} />
        </Card>
      </div>
    </Card>
  );
}

export default TestimonialItem;
