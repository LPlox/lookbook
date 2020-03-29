import Head from "../default/head";

const Layout = props => (
  <div>
    <Head
      title="Lookbook"
      description="Ecommerce website with Next.js + Storyblok"
    />
    {props.children}
  </div>
);

export default Layout;
