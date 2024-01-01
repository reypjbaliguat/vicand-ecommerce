"use client";

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
      className={`relative ${
        selectedItem === label ? "grow-[8]" : "max-w-[160px] grow"
      } `}
      onClick={() => handleChangeSelect(label)}
    >
      <span className="text-white absolute z-50 bottom-0 w-20 left-10 text-center brightness-100 mb-3">
        Shop Now
      </span>
      <span className="text-xl absolute z-50 text-white brightness-100 top-0 mt-5 ml-5">
        {label}
      </span>

      <div
        className={` cursor-pointer brightness-50  h-[460px] bg-${imgName}-image bg-cover bg-center`}
      ></div>
    </div>
  );
}

export default FeaturedCategoryItem;
