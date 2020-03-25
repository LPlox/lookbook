import Head from "../modules/default/head";
import Layout from "../modules/layout/layout";

const Index = () => (
  <div className="container">
    <Head
      title="Lookbook"
      description="Example ecommerce website with Next.js + Storyblok"
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

export default Index;
