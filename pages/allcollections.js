import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../modules/layout/layout";
import Header from "../modules/components/header";
import Nav from "../modules/components/nav";

import "../modules/scss/nav-allcollections.scss";
import "../modules/scss/allcollections.scss";

const AllCollections = array => {
  const collections = Object.values(array);

  return (
    <Layout>
      <Header />
      <Nav styleid={"allcollection-nav"} />
      <hr />
      <div>
        {collections.map((item, i) => (
          <div key={i}>
            <Link
              href={`/collection/[collection]`}
              as={`/collection/${item.uuid}`}
            >
              <a className="collection-link font-large" key={i}>
                {item.name}
              </a>
            </Link>
            <hr />
          </div>
        ))}
      </div>
    </Layout>
  );
};

AllCollections.getInitialProps = async () => {
  const req = await fetch(`${process.env.API_URL}/api/collection/all`);
  const data = req.json();
  return data;
};

export default AllCollections;
