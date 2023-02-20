import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FreeShopping from "../components/FreeShopping/FreeShipping";
import Footer from "../components/Footer/Footer";

const ClientLy = () => {
  return (
    <div>
      <FreeShopping />
      <Header />
      <div>
        <Outlet />
      </div>
      <Footer/>
    </div>
  );
};

export default ClientLy;
