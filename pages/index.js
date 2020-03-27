import fetch from "isomorphic-unfetch";
import Head from "../modules/default/head";
import Layout from "../modules/layout/layout";

const Index = ({ content: { body } }) => (
  <div className="container">
    <Head
      title="Lookbook"
      description="Ecommerce website with Next.js + Storyblok"
    />

    <Layout>
      <main>
        <h1 className="title">{body[0].promo_title} &rarr;</h1>
        <img src={body[0].promo_img[0].filename} alt="promo image" />
      </main>
      <footer></footer>
    </Layout>
  </div>
);

Index.getInitialProps = async () => {
  const req = await fetch(`http://localhost:3000/api/home`);
  const data = req.json();
  return data;
};

export default Index;
