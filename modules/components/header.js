import Link from "next/link";

const Header = () => (
  <header>
    <div className="logo"></div>
    <nav>
      <Link href="/home">Home</Link>
      <Link href="/collections">Collections</Link>
      <div className="dropdown"></div>
    </nav>
  </header>
);

export default Header;
