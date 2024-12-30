import React, { useEffect, useRef } from "react";
import { Link, NavLink } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { ScrollArea } from "@/components/ui/scroll-area";

const DashSidebar = ({ isOpen, setOpen }) => {
  const allLinks = [
    {
      name: "Home",
      link: "/dashboard",
    },
    {
      name: "Review",
      link: "/dashboard/review",
    },
    {
      name: "Setting",
      link: "/dashboard/setting",
    },
  ];



  return (
    <>
      <div
     
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-15 visible" : "opacity-0 invisible"
        } z-[20] xl:hidden `}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`  w-[250px] fixed lg:sticky xl:left-0 top-0 bottom-0  transition-all duration-300  shadow-md bg-[#fff] py-6 ${
          isOpen ? ` left-[0px]  ` : ` -left-[100%]`
        }  h-screen z-50  `}
      >
        <Link
          to={"/dashboard"}
          className=" flex justify-between items-center px-6"
        >
          <h1 className=" text-[32px] font-bold">SetuLal</h1>

          <div
            className=" cursor-pointer lg:hidden block"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose size={25} />
          </div>
        </Link>

        <ScrollArea className="h-[500px] w-full mt-10 ">
          <div className=" flex flex-col gap-5 ">
            {allLinks.map((item, index) => (
              <NavLink
                key={index}
                end={item.link === "/dashboard"}
                onClick={() => setOpen(false)}
                className={({ isActive }) =>
                  `${
                    isActive ? " bg-gray-100  " : " bg-none "
                  }  text-lg pl-10 hover:bg-gray-100 py-3 transition-all duration-300  `
                }
                to={`${item.link}`}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </ScrollArea>
      </div>
    </>
  );
};

export default DashSidebar;
