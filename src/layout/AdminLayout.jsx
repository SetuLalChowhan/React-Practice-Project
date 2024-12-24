import React from "react";
import DashSidebar from "../pages/Dashboard/DashSidebar";
import { Outlet } from "react-router-dom";

const AdminLayout = () => {
  return (
    <>
      <DashSidebar />
      <Outlet />
    </>
  );
};

export default AdminLayout;
