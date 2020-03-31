import fetch from "isomorphic-unfetch";
import Layout from "../modules/layout/layout";
import Header from "../modules/components/header";
import Nav from "../modules/components/nav";
import Grid from "../modules/layout/grid-homepage";
import Promo from "../modules/components/promo";

import "../modules/scss/nav-homepage.scss";

const Index = collection => {
  return (
    <Layout>
      <Grid />
      <Header />
      <Promo
        title={collection[0].name}
        designer={collection[0].content.designer_name}
        imgHorizontal={collection[0].content.main_img}
        imgVertical={collection[0].content.mobile_img}
        release={collection[0].content.release_date}
      />
      <Nav styleid={"homepage-nav"} />
    </Layout>
  );
};

Index.getInitialProps = async () => {
  const req = await fetch(`${process.env.API_URL}/api/filter/promo`);
  const data = req.json();
  return data;
};

export default Index;
