import fetch from "isomorphic-unfetch";

const Item = ({ content }) => {
  return <div>{content}</div>;
};

Item.getInitialProps = async ({ query }) => {
  const { item } = query;
  const req = await fetch(`${process.env.API_URL}/product/${item}`);
  const data = req.json;
  return data;
};

export default Item;
