import fetch from "isomorphic-unfetch";
import Layout from "../../modules/layout/layout";
import Header from "../../modules/components/header";
import Nav from "../../modules/components/nav-top";
import FilterResults from "../../modules/components/filter-result";

const Tag = array => {
  return (
    <Layout>
      <Header />
      <Nav />
      <hr />
      <FilterResults products={{ array }} />
    </Layout>
  );
};

Tag.getInitialProps = async ({ query }) => {
  const { tag } = query;
  const req = await fetch(`${process.env.API_URL}/api/filter/${tag}`);
  const data = req.json();
  return data;
};

export default Tag;
