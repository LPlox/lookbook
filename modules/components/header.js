import Link from "next/link";

const Header = () => (
  <header>
    <div className="logo"></div>
    <nav>
      <Link href="/home">
        <a>Home</a>
      </Link>
      <Link href="/collections">
        <a>Collections</a>
      </Link>
      <div className="dropdown"></div>
    </nav>
  </header>
);

export default Header;
