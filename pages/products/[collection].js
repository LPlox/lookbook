import fetch from "isomorphic-unfetch";
import Link from "next/link";
import { useRouter } from "next/router";

const Collection = ({ content }) => {
  const itemArray = content.products[1].items;
  console.log(itemArray);
  const router = useRouter();

  return (
    <div>
      {content.products[0].collection_name}
      {itemArray.map((item, i) => {
        return (
          <div key={item._uid}>
            <p>{item.name}</p>
            <Link href="item/[id]" as={`item/${item._uid}`}>
              {item.item_images[0].filename ? (
                <img src={item.item_images[0].filename} alt="products" />
              ) : null}
            </Link>
            <p>{item.description}</p>
          </div>
        );
      })}
    </div>
  );
};

Collection.getInitialProps = async ({ query }) => {
  const { collection } = query;
  const req = await fetch(
    `${process.env.API_URL}/api/collection/${collection}`
  );
  const data = req.json();
  return data;
};

export default Collection;
