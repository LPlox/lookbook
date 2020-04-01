import Link from "next/link";
import fetch from "isomorphic-unfetch";
import Header from "../../modules/components/header";
import Nav from "../../modules/components/nav-top";

const Tag = items => {
  return (
    <main>
      <Header />
      <Nav />
      <div>
        <div></div>
      </div>
    </main>
  );
};

Tag.getInitialProps = async ({ query }) => {
  const { tag } = query;
  const req = await fetch(`${process.env.API_URL}/api/collection/${tag}`);
  const data = req.json();
  return data;
};

export default Tag;
