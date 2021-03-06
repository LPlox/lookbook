import Link from "next/link";
import "../scss/load-presets.scss";
import "../scss/grid4x4.scss";
import "../scss/nav-allcollections.scss";

const Nav = () => {
  return (
    <nav className="flex-container mobile-deactive" id="allcollection-nav">
      <Link href="/allcollections">
        <a className="link-font flex-item text-center">All</a>
      </Link>
      <Link href="/filter/men">
        <a className="link-font flex-item text-center">Men</a>
      </Link>
      <Link href="/filter/woman">
        <a className="link-font flex-item text-center">Woman</a>
      </Link>
      <Link href="/filter/autumn">
        <a className="link-font flex-item text-center">Season</a>
      </Link>
    </nav>
  );
};

export default Nav;
