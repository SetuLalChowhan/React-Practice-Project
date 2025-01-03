import React, { useEffect, useState } from "react";
import { Link, NavLink, useLocation } from "react-router-dom";
import { AiOutlineClose } from "react-icons/ai";

import { ScrollArea } from "@/components/ui/scroll-area";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const DashSidebar = ({ isOpen, setOpen }) => {
  const location = useLocation();
  const [activeDropdown, setActiveDropdown] = useState(null);

  const allLinks = [
    {
      name: "Home",
      link: "/dashboard",
      subLinks: [],
    },
    {
      name: "Review",
      link: "/dashboard/review",
      subLinks: [
        { name: "All Reviews", link: "/dashboard/review/all" },
        { name: "Pending Reviews", link: "/dashboard/review/pending" },
      ],
    },
    {
      name: "Setting",
      link: "/dashboard/setting",
      subLinks: [
        { name: "Profile", link: "/dashboard/setting/profile" },
        { name: "Security", link: "/dashboard/setting/security" },
      ],
    },
    {
      name: "Test",
      link: "/dashboard/test",
      subLinks: [
        { name: "Test A", link: "/dashboard/test/a" },
        { name: "Test B", link: "/dashboard/test/b" },
      ],
    },
  ];

  // Update activeDropdown based on the current path
  useEffect(() => {
    const matchedParent = allLinks.find((item) => {
      return item.subLinks.find(
        (subLink) => subLink.link === location.pathname
      );
    });
    setActiveDropdown(matchedParent ? matchedParent.name : null);

    console.log(matchedParent);
  }, [location.pathname]);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-15 visible" : "opacity-0 invisible"
        } z-[20] xl:hidden`}
        onClick={() => setOpen(false)}
      ></div>

      <div
        className={`w-[250px] fixed lg:sticky xl:left-0 top-0 bottom-0 transition-all duration-300 shadow-md bg-[#fff] py-6 ${
          isOpen ? `left-[0px]` : `-left-[100%]`
        } h-screen z-50`}
      >
        <Link
          to={"/dashboard"}
          className="flex justify-between items-center px-6"
        >
          <h1 className="text-[32px] font-bold">SetuLal</h1>

          <div
            className="cursor-pointer lg:hidden block"
            onClick={() => setOpen(false)}
          >
            <AiOutlineClose size={25} />
          </div>
        </Link>

        <ScrollArea className="h-full w-full overflow-auto mt-10">
          <Accordion
            type="single"
            collapsible
            value={activeDropdown}
            onValueChange={setActiveDropdown}
          >
            {allLinks.map((item, index) =>
              item.subLinks && item.subLinks.length > 0 ? (
                <AccordionItem key={index} value={item.name}>
                  <AccordionTrigger className="text-lg pl-6 py-3 hover:bg-gray-100 transition-all duration-300">
                    {item.name}
                  </AccordionTrigger>
                  <AccordionContent>
                    <div className="flex flex-col gap-1 mt-2 ">
                      {item.subLinks.map((subItem, subIndex) => (
                        <NavLink
                          key={subIndex}
                          to={subItem.link}
                          onClick={() => setOpen(false)}
                          className={({ isActive }) =>
                            `block  ${
                              isActive ? "bg-gray-100" : "bg-none"
                            } text-base  pl-10 hover:bg-gray-100 py-3 transition-all duration-300 w-full`
                          }
                        >
                          {subItem.name}
                        </NavLink>
                      ))}
                    </div>
                  </AccordionContent>
                </AccordionItem>
              ) : (
                <NavLink
                  key={index}
                  end={item.link === "/dashboard"}
                  onClick={() => setOpen(false)}
                  className={({ isActive }) =>
                    `block ${
                      isActive ? "bg-gray-100" : "bg-none"
                    } text-lg pl-6 hover:bg-gray-100 py-3 transition-all duration-300 w-full`
                  }
                  to={item.link}
                >
                  {item.name}
                </NavLink>
              )
            )}
          </Accordion>
        </ScrollArea>
      </div>
    </>
  );
};

export default DashSidebar;
