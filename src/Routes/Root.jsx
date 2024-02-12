import { Outlet } from "react-router-dom";
import Header from "../Shared/Header";
import Footer from "../Shared/Footer";

const Root = () => {
  return (
    <div className="">
      <Header></Header>
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};

export default Root;
