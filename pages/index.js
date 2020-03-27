import fetch from "isomorphic-unfetch";
import Head from "../modules/default/head";
import Layout from "../modules/layout/layout";

const Index = ({data}) => (
  <div className="container">
    <Head
      title="Lookbook"
      description="Ecommerce website with Next.js + Storyblok"
    />

    <Layout>
      <main>
        <h1 className="title">Homepage &rarr;</h1>
        <p className="description">description text for homepage</p>
      </main>
      <footer></footer>
    </Layout>
  </div>
);

Index.getInitialProps = async () => {
  const req = await fetch(`http://localhost:3000/api/home`);
  const data = req.json();
  console.log(data);
  return data;
};

export default Index;
