import React from "react";
import Hamburger from "hamburger-react";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const Header = ({ isOpen, setOpen }) => {
  return (
    <div className=" w-full   shadow-lg py-4 px-16 sticky top-0  z-[100]   flex justify-between">
      <p className=" font-poppins font-semibold text-2xl lg:block hidden ">
        Welcome to The Dashboard
      </p>

      <div className=" lg:hidden block  text-black">
        <Hamburger size={22} toggled={isOpen} toggle={setOpen} />
      </div>

      <div>
        <Popover>
          <PopoverTrigger>
            <Avatar>
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
          </PopoverTrigger>
          <PopoverContent className=" w-28">
            <div className=" flex  flex-col justify-center text-center  gap-2">
              <p className=" py-3 border-b-2 border-gray-200">Profile</p>
              <p>Setting</p>
            </div>
          </PopoverContent>
        </Popover>
      </div>
    </div>
  );
};

export default Header;
