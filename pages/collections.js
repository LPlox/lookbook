import fetch from "isomorphic-unfetch";
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
              <a className="font-large" key={i}>
                {item.name}
              </a>
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
