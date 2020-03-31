import Link from "next/link";

import "../scss/load-presets.scss";
import "../scss/grid4x4.scss";
import "../scss/header.scss";

const Header = () => {
  return (
    <header className="flex-container">
      <Link href="/">
        <h1 className="logo flex-item text-center">Lookbook</h1>
      </Link>
      <div className="flex-item"></div>
      <Link href="/allcollections">
        <h2 className="link-font flex-item text-center mobile-deactive">
          All Collections
        </h2>
      </Link>
      <div className="flex-item">
        <button className="logo dropdown btn-broder">↓</button>
      </div>
    </header>
  );
};

export default Header;
