import Link from "next/link";

import "../scss/load-presets.scss";
import "../scss/grid4x4.scss";
import "../scss/header.scss";

const Header = () => {
  return (
    <header className="flex-container">
      <Link href="/">
        <a className="logo flex-item text-center">Lookbook</a>
      </Link>
      <div className="flex-item"></div>
      <Link href="/allcollections">
        <a className="link-font flex-item text-center mobile-deactive">
          All Collections
        </a>
      </Link>
      <div className="flex-item">
        <button className="logo dropdown btn-none">↓</button>
      </div>
    </header>
  );
};

export default Header;
