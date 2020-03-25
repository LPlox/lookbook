import Header from "../components/header";
import "../scss/global.scss";

const Layout = props => (
  <div>
    <Header />
    {props.children}
  </div>
);

export default Layout;
