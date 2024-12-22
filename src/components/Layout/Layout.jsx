import React from "react";
import Footer from "../Footer/Footer";
import Routers from "../../routers/Routers";
import Header from "../Header/Header";

const Layout = () => {
  return (
    <>
    <Header/>
      <div>
        <Routers />
      </div>
      <Footer />
    </>
  );
};

export default Layout;
