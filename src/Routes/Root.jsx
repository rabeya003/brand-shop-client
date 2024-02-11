import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div>
      <Header>
        <Outlet></Outlet>
        <Footer />
      </Header>
    </div>
  );
};

export default Root;
