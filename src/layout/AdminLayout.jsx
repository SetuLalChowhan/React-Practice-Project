import React, { useState } from "react";
import DashSidebar from "../pages/Dashboard/DashSidebar";
import { Outlet } from "react-router-dom";
import Header from "../shared/Header/Header";

const AdminLayout = () => {

  const [isOpen,setOpen] =useState(false)
  return (
    <div className=" flex gap-3   ">
      <DashSidebar isOpen={isOpen} setOpen={setOpen} />

      <div className="w-full py-4 px-2 flex flex-col gap-2 flex-1  ">
        <Header  isOpen={isOpen} setOpen={setOpen} />

        <Outlet />
      </div>
    </div>
  );
};

export default AdminLayout;
