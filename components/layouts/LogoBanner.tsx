import Image from "next/image";
import wrangler from "@/public/assets/logos/wrangler.svg";
import denim from "@/public/assets/logos/denim.svg";

function LogoBanner() {
  return (
    <div className="flex basis-full px-24 mb-[60px] gap-x-5 justify-between">
      <Image src={wrangler} width={303} height={44} alt="wrangler logo" />
      <Image src={denim} width={255} height={44} alt="wrangler logo" />
      <Image src={wrangler} width={303} height={44} alt="wrangler logo" />
      <Image src={denim} width={255} height={44} alt="wrangler logo" />
    </div>
  );
}

export default LogoBanner;
