import Link from "next/link";
import "../scss/load-presets-only.scss";
import "../scss/header.scss";

const AllCollectionLayout = props => {
  return (
    <div>
      <div>
        <header className="flex-container">
          <h1 className="logo flex-child margin-top-20 text-center">
            Lookbook
          </h1>
          <div className="flex-child"></div>
          <Link href="/collections">
            <a className="link-font flex-child margin-top-30 text-center mobile-deactive">
              All Collections
            </a>
          </Link>
          <div className="flex-child">
            <button className="btn-none dropdown btn-right margin-top-20 margin-right-30">
              ↓
            </button>
          </div>
        </header>
        <nav className="position-a margin-top-80">
          <div className="flex-child text-center align-end mobile-deactive margin-bottom-20">
            <Link href="">
              <a className="link-font">All</a>
            </Link>
          </div>
          <div className="flex-child text-center align-end mobile-deactive margin-bottom-20">
            <Link href="">
              <a className="link-font">Men</a>
            </Link>
          </div>
          <div className="flex-child text-center align-end mobile-deactive margin-bottom-20">
            <Link href="">
              <a className="link-font">Women</a>
            </Link>
          </div>
          <div className="flex-child text-center align-end mobile-deactive margin-bottom-20">
            <Link href="">
              <a className="link-font">In Season</a>
            </Link>
          </div>
        </nav>
      </div>
      <hr className="margin-top-120" />
      {props.children}
    </div>
  );
};

export default AllCollectionLayout;
