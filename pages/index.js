import fetch from "isomorphic-unfetch";
import Header from "../modules/components/header";
import GridLayout from "../modules/layout/main-grid-layout";
import Annotations from "../modules/components/annotations";
import Landing from "../modules/components/landing-main";
import Footer from "../modules/components/footer";
import Layout from "../modules/layout/landing-layout";

const Index = ({ content: { body } }) => (
  <Layout>
    <GridLayout />
    <Annotations />
    <Header />
    <Landing />
    <Footer />
  </Layout>
);

Index.getInitialProps = async () => {
  const req = await fetch(`http://localhost:3000/api/home`);
  const data = req.json();
  return data;
};

export default Index;
