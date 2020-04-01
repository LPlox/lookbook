import fetch from "isomorphic-unfetch";
import Layout from "../modules/layout/layout";
import Header from "../modules/components/header";
import Nav from "../modules/components/nav-top";
import CollectionLinks from "../modules/components/collection-links";

const AllCollections = array => {
  return (
    <Layout>
      <Header />
      <Nav styleid={"allcollection-nav"} />
      <hr />
      <CollectionLinks collections={{ array }} />
    </Layout>
  );
};

AllCollections.getInitialProps = async () => {
  const req = await fetch(`${process.env.API_URL}/api/collection/all`);
  const data = req.json();
  return data;
};

export default AllCollections;
