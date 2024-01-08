import { products } from "../constants/products";
import ProductItem from "./ProductItem";
import SectionHeaderAndButtons from "./SectionHeaderAndButtons";

function TopPicks() {
  return (
    <div className="flex basis-full px-24 flex-col mb-20">
      <SectionHeaderAndButtons label={"Top Picks"} />
      <div className="gap-x-5 gap-y-10 flex flex-wrap justify-between">
        {products.map((product) => {
          return (
            <ProductItem
              key={product.label}
              label={product.label}
              amount={product.amount}
              image={product.image}
              star={product.star}
            />
          );
        })}
      </div>
    </div>
  );
}

export default TopPicks;
