import React from "react";
import Navbar from "../shared/Navbar/Navbar";
import { Outlet } from "react-router-dom";
import Footer from "../shared/Footer/Footer";
import Cart from "../components/cart/Cart";


const UserLayout = () => {
  return (
    <>
      <Navbar />
      <Outlet />
      <Cart/>
      <Footer />
    </>
  );
};

export default UserLayout;
