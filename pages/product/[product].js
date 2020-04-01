import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import Header from "../../modules/components/header";

import "../../modules/scss/product.scss";

const Product = ({
  content: { name, desc, price, sizes, images, material }
}) => {
  return (
    <Layout>
      <Header />
      <main className="product-container">
        <div className="box-1 box-top"></div>
        <div className="box-2">
          <div className="box-left"></div>
          <div className="info-box">
            <div className="text-container">
              <p className="shift-left-name paragraf-font">Name</p>
              <h1 className="font-medium">{name}</h1>
            </div>
            <div className="text-container-desc">
              <p className="shift-left-desc paragraf-font">Description</p>
              <p className="paragraf-font">{desc}</p>
            </div>
            <div className="text-container-material">
              <p className="shift-left-material paragraf-font">Material</p>
              <p className="paragraf-font">{material}</p>
            </div>
          </div>
          <div className="img-container">
            <img src={images[0].filename} />
          </div>
        </div>
        <div className="box-3 box-bottom">
          <div className="info-bottom">
            <button className="purchase paragraf-font btn-border">BUY</button>
          </div>
        </div>
      </main>
    </Layout>
  );
};

Product.getInitialProps = async ({ query }) => {
  const { product } = query;
  const req = await fetch(`${process.env.API_URL}/api/item/${product}`);
  const data = req.json();
  return data;
};

export default Product;
