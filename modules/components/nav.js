import Link from "next/link";

import "../scss/load-presets.scss";
import "../scss/grid4x4.scss";

const Nav = ({ styleid }) => {
  return (
    <nav className="flex-container mobile-deactive" id={styleid}>
      <Link href="/">
        <a className="link-font flex-item text-center">All</a>
      </Link>
      <Link href="/">
        <a className="link-font flex-item text-center">Men</a>
      </Link>
      <Link href="/">
        <a className="link-font flex-item text-center">Woman</a>
      </Link>
      <Link href="/">
        <a className="link-font flex-item text-center">Season</a>
      </Link>
    </nav>
  );
};

export default Nav;
