import fetch from "isomorphic-unfetch";

const Collections = ({ content }) => {
  return <div>{content}</div>;
};

Index.getInitialProps = async () => {
  const req = await fetch(`${process.env.API_URL}/api/allcollections`);
  const data = req.json();
  return data;
};

export default Collections;
