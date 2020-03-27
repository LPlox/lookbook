import Link from "next/link";

const Nav = () => {
  return (
    <nav className="grid-container position-a">
      <div className="grid-layout-1-4  text-center">
        <Link href="">
          <a className="link-font">All</a>
        </Link>
      </div>
      <div className="grid-layout-2-4  text-center">
        <Link href="">
          <a className="link-font">Men</a>
        </Link>
      </div>
      <div className="grid-layout-3-4 text-center">
        <Link href="">
          <a className="link-font">Women</a>
        </Link>
      </div>
      <div className="grid-layout-4-4  text-center">
        <Link href="">
          <a className="link-font">In Season</a>
        </Link>
      </div>
    </nav>
  );
};

export default Nav;
