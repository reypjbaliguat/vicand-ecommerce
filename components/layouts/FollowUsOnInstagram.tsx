import { items } from "../constants/instagramItems";
import InstagramItem from "./InstagramItem";
import SectionHeaderAndButtons from "./SectionHeaderAndButtons";

function FollowUsOnInstagram() {
  return (
    <div className="flex basis-full px-24 flex-col mb-[120px]">
      {" "}
      <SectionHeaderAndButtons
        label={"@ Follow us on Instagram"}
        isViewAll={true}
      />{" "}
      <div className="flex gap-x-[13px] justify-between">
        {items.map((item) => (
          <InstagramItem bgImage={item.bgImage} key={item.bgImage} />
        ))}
      </div>
    </div>
  );
}

export default FollowUsOnInstagram;
