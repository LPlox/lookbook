import fetch from "isomorphic-unfetch";

const Collection = ({ content }) => {
  return <div key={content._uid}>{content.products[0].collection_name}</div>;
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
