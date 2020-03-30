import Link from "next/link";
import "../scss/load-presets-only.scss";
import "../scss/grid-navigation.scss";

const GridNavigation = props => {
  return (
    <header className="grid-container position-a z-1">
      <h1 className="logo grid-layout-1-1 margin-top-14 text-center">
        Lookbook
      </h1>

      <Link href="/">
        <a className="link-font grid-layout-3-1 margin-top-20 text-center mobile-deactive">
          All Collections
        </a>
      </Link>
      <div className="grid-layout-4-1">
        <button className="btn-none dropdown btn-right margin-top-14 margin-right-30">
          ↓
        </button>
      </div>

      {props.children}

      <div className="grid-layout-1-4  text-center align-end mobile-deactive margin-bottom-20">
        <Link href="">
          <a className="link-font">All</a>
        </Link>
      </div>
      <div className="grid-layout-2-4  text-center align-end mobile-deactive margin-bottom-20">
        <Link href="">
          <a className="link-font">Men</a>
        </Link>
      </div>
      <div className="grid-layout-3-4 text-center align-end mobile-deactive margin-bottom-20">
        <Link href="">
          <a className="link-font">Women</a>
        </Link>
      </div>
      <div className="grid-layout-4-4  text-center align-end mobile-deactive margin-bottom-20">
        <Link href="">
          <a className="link-font">In Season</a>
        </Link>
      </div>
    </header>
  );
};

export default GridNavigation;
