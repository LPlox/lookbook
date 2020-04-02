import Link from "next/link";
import "../scss/filter.scss";

const FilterResults = ({ products: { array } }) => {
  const itemsArray = Object.values(array);
  console.log(itemsArray);
  return (
    <main>
      <div className="filter-result-layout">
        {itemsArray.map((item, index) => {
          if (item.name) {
            return (
              <div key={index} className="filter-product-img">
                <Link href={`/product/${item.slug}`}>
                  <img
                    key={index}
                    src={item.content.images[0].filename}
                    alt={item.name}
                  />
                </Link>
              </div>
            );
          } else if (item.back && index === 0) {
            return (
              <h1 key={index} className="font-big nothing-here-msg text-center">
                Nothing to here. Sorry~~
              </h1>
            );
          }
        })}
      </div>
    </main>
  );
};

export default FilterResults;
