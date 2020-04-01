import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import Header from "../../modules/components/header";
import Item from "../../modules/components/item";

const Product = ({
  content: { name, desc, price, sizes, images, material }
}) => {
  return (
    <Layout>
      <Header />
      <Item
        name={name}
        desc={desc}
        price={price}
        sizes={sizes}
        images={images}
        material={material}
      />
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
