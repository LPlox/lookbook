import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import Header from "../../modules/components/header";

import "../../modules/scss/collection.scss";

const Collection = items => {
  const products = Object.values(items);

  return (
    <Layout>
      <Header />
      <div className="collection-grid">
        <div className="grid-display grid-1-1"></div>
        <div className="grid-display grid-1-2"></div>
        <div className="grid-display grid-1-3"></div>
        <div className="grid-display grid-1-4 mobile-deactive"></div>
      </div>
      <div className="horizaontal-scroll">
        {products.map((item, itemIndex) => {
          const data = item.content;
          if (data) {
            return (
              <Link href="/">
                <div className="product-container">
                  <img
                    className="product-img"
                    key={itemIndex}
                    src={data.images[0].filename}
                    alt={data.name}
                  />
                </div>
              </Link>
            );
          }
        })}
      </div>
      <div className="collection-desc">
        <hr />
        <div className="headline"></div>
      </div>
    </Layout>
  );
};

Collection.getInitialProps = async ({ query }) => {
  const { collection } = query;
  const req = await fetch(
    `${process.env.API_URL}/api/collection/${collection}`
  );
  const data = req.json();
  return data;
};

export default Collection;
