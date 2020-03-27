import Nav from "../components/nav";
import Head from "../default/head";

const Layout = props => (
  <div>
    <Head
      title="Lookbook"
      description="Ecommerce website with Next.js + Storyblok"
    />
    {props.children}
    <Nav />
  </div>
);

export default Layout;
