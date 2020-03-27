import Link from "next/link";
import "../scss/load-presets-only.scss";
import "../scss/header.scss";

const Header = () => (
  <header className="z-1">
    <div className="grid-container">
      <h1 className="logo grid-layout-1-1 margin-top-20 text-center">
        Lookbook
      </h1>

      <Link href="/">
        <a className="link-font grid-layout-3-1 margin-top-30 text-center mobile-deactive">
          All Collections
        </a>
      </Link>
      <div className="grid-layout-4-1">
        <button className="btn-none dropdown btn-right margin-top-20 margin-right-30">
          ↓
        </button>
      </div>
    </div>
  </header>
);

export default Header;
