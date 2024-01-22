interface Props {
  bgImage: string;
}

function LatestBlogsItem({ bgImage }: Props) {
  return (
    <div
      className={`flex basis-[232px] h-[310px] justify-center items-end relative rounded-[2px] ${bgImage}`}
    >
      <div className="absolute w-full h-[310px] bg-latest-blog-bg-cover z-0" />
      <span className="text-white text-lg font-bold mb-4 z-10">
        Fashion #2022
      </span>
    </div>
  );
}

export default LatestBlogsItem;
