import { useState } from "react";
import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import GridHeader from "../../modules/layout/grid-header";
import Header from "../../modules/components/header";

import "../../modules/scss/collection.scss";

const Collection = items => {
  const products = Object.values(items);

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
    <Layout>
      <Header />
      <GridHeader />
      <div className="horizaontal-scroll" onWheel={onWheel} id="container">
        <div className="product-container"></div>
        <div className="product-container"></div>
        <div className="product-container"></div>
        {products.map((item, itemIndex) => {
          const data = item.content;
          if (data) {
            return (
              <Link href="/" key={itemIndex}>
                <div className="product-container">
                  <img
                    className="product-img"
                    key={item.id}
                    id={itemIndex}
                    src={data.images[0].filename}
                    alt={data.name}
                  />
                  <img
                    className="product-img hoverhide"
                    id={parseInt(itemIndex) + 100}
                    key={item.uuid}
                    src={data.images[1].filename}
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
        <p className="paragraf-font scroll-advice">scroll →</p>
        <p className="description">{}</p>
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
