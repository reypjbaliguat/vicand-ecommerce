import InstagramDescriptionItem from "./InstagramDescriptionItem";

function InstagramDescription() {
  return (
    <div className="flex basis-full px-24 gap-x-5 justify-between mb-20">
      <InstagramDescriptionItem />
      <InstagramDescriptionItem />
    </div>
  );
}

export default InstagramDescription;
