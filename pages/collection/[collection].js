import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import GridHeader from "../../modules/layout/grid-header";
import Header from "../../modules/components/header";
import CollectionProducts from "../../modules/components/collection-products";

const Collection = items => {
  return (
    <Layout>
      <Header />
      <GridHeader />
      <CollectionProducts products={{ items }} />
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
