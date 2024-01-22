import { items } from "../constants/latestBlogsItem";
import LatestBlogsItem from "./LatestBlogsItem";
import SectionHeaderAndButtons from "./SectionHeaderAndButtons";

function LatestBlogs() {
  return (
    <div className="flex basis-full px-24 flex-col mb-20">
      <SectionHeaderAndButtons label={"Latest Blogs"} isViewAll={true} />
      <div className="flex gap-x-5 justify-between">
        {items.map((item) => (
          <LatestBlogsItem key={item.bgImage} bgImage={item.bgImage} />
        ))}
      </div>
    </div>
  );
}

export default LatestBlogs;
