import Image from "next/image";
import instagram from "@/public/assets/logos/instagram.png";

interface Props {
  bgImage: string;
}

function InstagramItem({ bgImage }: Props) {
  return (
    <div
      className={`flex rounded-[2px] basis-[196px] p-3 items-end justify-end h-[310px] ${bgImage}`}
    >
      <Image
        src={instagram}
        height={46}
        width={46}
        className="rounded-[100px]"
        alt="instagram logo"
      />
    </div>
  );
}

export default InstagramItem;
