import { useState, useEffect } from "react";
import fetch from "isomorphic-unfetch";
import GridLayout from "../modules/layout/main-grid-layout";
import Landing from "../modules/components/landing-main";
import Layout from "../modules/layout/layout";
import GridNavigation from "../modules/layout/grid-navigation";

const Index = ({ content: { body } }) => {
  // const [height, setHeight] = useState(null);
  // const [width, setWidth] = useState(null);

  // if (process.browser) {
  //   useEffect(() => setHeight(document.children[0].clientHeight), [
  //     document.children[0].clientHeight
  //   ]);
  //   useEffect(() => setWidth(document.children[0].clientWidth), [
  //     document.children[0].clientWidth
  //   ]);
  // }

  return (
    <Layout>
      <GridLayout />
      <GridNavigation description={body[0].promo_description}>
        <Landing
          title={body[0].promo_title}
          img={body[0].promo_img}
          date={body[0].promo_release}
          designer={body[0].promo_designer_name}
          // height={height}
          // width={width}
        />
      </GridNavigation>
    </Layout>
  );
};

//I've tried this way...

Index.getInitialProps = async () => {
  let url;
  if (process.env.API_URL) {
    url = `${process.env.API_URL}/api/home`;
  } else {
    url = `http://localhost:3000/api/home`;
  }
  const req = await fetch(url);
  const data = req.json();
  return data;
};

export default Index;
