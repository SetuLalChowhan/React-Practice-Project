import Hamburger from "hamburger-react";
import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart } from "react-icons/bs";
import { useAllValues, useCart } from "../../contextApi/context";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? `text-yellow-500 font-bold px-3 relative hover-link ${
          isOpen ? `px-0` : `px-3`
        }`
      : `text-white relative hover-link ${isOpen ? `px-0` : `px-3`}`;

  const [isOpen, setOpen] = useState(false);

  useEffect(() => {
    const handleOutsideClick = (e) => {
      if (!e.target.closest(".mobile-nav") && !e.target.closest(".hamburger")) {
        setOpen(false);
      }
    };
    document.addEventListener("click", handleOutsideClick);

    return () => {
      document.removeEventListener("click", handleOutsideClick);
    };
  }, []);

  const { cart } = useCart();
  const { handleCart } = useAllValues();

  const openCart = () => {
    handleCart(true);

    console.log("hi")
  };

  return (
    <header className="py-6 sticky top-0 bg-gray-800 z-20">
      {/* Desktop Version */}
      <div className="flex justify-between items-center lg:px-20 px-10 z-20">
        {/* Brand Logo */}
        <div className="text-white text-lg font-poppins">Hi & Buy</div>

        {/* Navigation Links */}
        <nav className="lg:flex space-x-6 hidden">
          <NavLink to="/" className={navLinkClasses}>
            Home
          </NavLink>
          <NavLink to="/about" className={navLinkClasses}>
            About
          </NavLink>
          <NavLink to="/contact" className={navLinkClasses}>
            Contact
          </NavLink>
          <NavLink to="/collections" className={navLinkClasses}>
            Collections
          </NavLink>
        </nav>

        {/* Right Side Placeholder */}
        <div className=" flex gap-5 items-center">
          <button onClick={openCart} className=" relative">
            <BsCart color="white" size={30} />
            <p className=" absolute -top-5 -right-2 text-[20px] text-white">
              {" "}
              {cart.length}{" "}
            </p>
          </button>
          <Link
            to={`#`}
            className="relative lg:inline-block hidden text-lg group"
          >
            <span className="relative z-10 block px-5 py-3 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-5 py-3 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Sign Up</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>

        {/* Hamburger */}
        <div className="lg:hidden block hamburger">
          <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
        </div>
      </div>

      {/* Mobile Version */}
      <div
        className={`w-[240px] flex flex-col transition-all duration-300 gap-2 ${
          isOpen ? `translate-x-0` : `-translate-x-full`
        } items-start px-10 border-b-2 h-screen fixed top-0 left-0 bg-gray-800 py-10 mobile-nav z-50`}
      >
        <div className="text-white text-lg font-poppins">Hi & Buy</div>
        <nav className="flex flex-col space-y-3 mt-8">
          <NavLink
            onClick={() => setOpen(false)}
            to="/"
            className={navLinkClasses}
          >
            Home
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/about"
            className={navLinkClasses}
          >
            About
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/contact"
            className={navLinkClasses}
          >
            Contact
          </NavLink>
          <NavLink
            onClick={() => setOpen(false)}
            to="/collections"
            className={navLinkClasses}
          >
            Collections
          </NavLink>
        </nav>
        <div className="mt-4">
          <Link to={`#`} className="relative inline-block text-lg group">
            <span className="relative z-10 block px-3 py-2 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-2 border-gray-900 rounded-lg group-hover:text-white">
              <span className="absolute inset-0 w-full h-full px-3 py-2 rounded-lg bg-gray-50"></span>
              <span className="absolute left-0 w-48 h-48 -ml-2 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-12 bg-gray-900 group-hover:-rotate-180 ease"></span>
              <span className="relative">Sign Up</span>
            </span>
            <span
              className="absolute bottom-0 right-0 w-full h-12 -mb-1 -mr-1 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0"
              data-rounded="rounded-lg"
            ></span>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
