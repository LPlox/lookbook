import "../scss/collection.scss";
import Link from "next/link";

const CollectionProducts = ({ products: { items } }) => {
  const productsArray = Object.values(items);

  const onWheel = e => {
    var container = document.getElementById("container");
    var containerScrollPosition = document.getElementById("container")
      .scrollLeft;
    container.scrollTo({
      top: 0,
      left: containerScrollPosition + e.deltaY * 6,
      behaviour: "smooth"
    });
  };

  return (
    <main>
      <div className="horizaontal-scroll" onWheel={onWheel} id="container">
        <div className="product-container"></div>
        <div className="product-container"></div>
        <div className="product-container"></div>
        {productsArray.map((item, itemIndex) => {
          const data = item.content;
          if (data) {
            return (
              <Link
                href={`/product/[product]`}
                as={`/product/${item.slug}`}
                key={itemIndex}
              >
                <div className="product-container">
                  <img
                    className="product-img"
                    key={item.id}
                    id={itemIndex}
                    src={data.images[0].filename}
                    alt={data.name}
                  />
                  {/* <img
                    className="product-img hoverhide"
                    id={parseInt(itemIndex) + 100}
                    key={item.uuid}
                    src={data.images[1].filename}
                    alt={data.name}
                  /> */}
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="collection-desc">
        <hr />
        <p className="paragraf-font scroll-advice">scroll →</p>
        <p className="description">{}</p>
      </div>
    </main>
  );
};

export default CollectionProducts;
