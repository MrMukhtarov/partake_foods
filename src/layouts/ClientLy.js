import React from "react";
import { Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import FreeShopping from "../components/FreeShopping/FreeShipping";

const ClientLy = () => {
  return (
    <div>
      <FreeShopping />
      <Header />
      <div>
        <Outlet />
      </div>
    </div>
  );
};

export default ClientLy;
