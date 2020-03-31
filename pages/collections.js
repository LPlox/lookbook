import fetch from "isomorphic-unfetch";
import Link from "next/link";
import Layout from "../modules/layout/layout";
import AllCollectionLayout from "../modules/layout/all-collection-layout";

const Collections = array => {
  const collections = Object.values(array);

  return (
    <Layout>
      <AllCollectionLayout>
        <div className="">
          {collections.map((item, i) => (
            <div>
              <Link href="/products/[slug]" as={`/products/${item.slug}`}>
                <a className="font-large" key={i}>
                  {item.name}
                </a>
              </Link>
              <hr />
            </div>
          ))}
        </div>
      </AllCollectionLayout>
    </Layout>
  );
};

Collections.getInitialProps = async () => {
  const req = await fetch(`${process.env.API_URL}/api/allcollections`);
  const data = req.json();
  return data;
};

export default Collections;
