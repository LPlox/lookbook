import Link from "next/link";
import "../scss/allcollections.scss";

const CollectionLinks = ({ collections: { array } }) => {
  const collectionsArray = Object.values(array);
  console.log(collectionsArray);
  return (
    <div>
      {collectionsArray.map((item, i) => {
        if (item) {
          return (
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
          );
        }
      })}
    </div>
  );
};

export default CollectionLinks;
