import React, { useEffect, useRef, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BsCart, BsSearch } from "react-icons/bs";
import Hamburger from "hamburger-react";
import { useAllValues, useCart } from "../../contextApi/context";
import { useQuery } from "@tanstack/react-query";
import { searchApi } from "@/api/allApi";

const Navbar = () => {
  const navLinkClasses = ({ isActive }) =>
    isActive
      ? `text-yellow-500 font-bold px-3 relative hover-link`
      : `text-white relative hover-link px-3`;

  const [isOpen, setOpen] = useState(false);
  const mobileNavRef = useRef(null); // Ref for the mobile navigation container
  const searchRef = useRef(null); // Ref for the search area
  const { cart } = useCart();
  const { handleCart } = useAllValues();

  const openCart = () => {
    handleCart();
  };

  const [search, setSearch] = useState("");
  const [debouncedSearch, setDebouncedSearch] = useState("");
  const [isSearchVisible, setSearchVisible] = useState(false); // State for search area visibility

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedSearch(search);
    }, 500);

    return () => {
      clearTimeout(handler);
    };
  }, [search]);

  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["search_products", debouncedSearch],
    queryFn: () => searchApi(debouncedSearch),
    enabled: !!debouncedSearch,
  });

  // Detect clicks outside the search area
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        searchRef.current &&
        !searchRef.current.contains(event.target)
      ) {
        setSearchVisible(false); // Hide search area
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <div
        className={`fixed inset-0 bg-black transition-opacity duration-300 ${
          isOpen ? "opacity-15 visible" : "opacity-0 invisible"
        } z-[20] xl:hidden `}
        onClick={() => setOpen(false)}
      ></div>

      <header className="py-6 sticky top-0 bg-gray-800 z-20">
        <div className="flex justify-between items-center lg:px-20 px-10 z-20">
          <div className="text-white text-lg font-poppins">Hi & Buy</div>

          <div
            ref={searchRef} // Attach ref to search area container
            className="flex flex-col gap-2 items-center w-[20%] relative"
          >
            <div
              className="px-4 py-2 flex gap-2 border-[1px] border-white rounded-lg items-center w-full"
              onClick={() => setSearchVisible(true)} // Show search area when clicked
            >
              <BsSearch size={22} color="white" />
              <input
                type="text"
                value={search}
                placeholder="search products"
                className="bg-transparent border-none outline-none text-white"
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            {isSearchVisible && data && (
              <div className="absolute top-12 rounded-md bg-white w-full max-h-[400px] overflow-y-auto">
                {data?.products?.length > 0 ? (
                  data.products.map((item, index) => (
                    <Link
                      to={`#`}
                      key={index}
                      className="flex justify-between py-4 px-3 items-center hover:bg-gray-100 transition-all duration-300 border-[1px]"
                    >
                      <p className="text-xs">{item.title}</p>
                    </Link>
                  ))
                ) : (
                  <p className="text-xs px-3 py-4">No Products Found</p>
                )}
              </div>
            )}
          </div>

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

          <div className="flex gap-5 items-center">
            <button onClick={openCart} className="relative">
              <BsCart color="white" size={30} />
              <p className="absolute -top-5 -right-2 text-[20px] text-white">
                {cart.length}
              </p>
            </button>
            <Link
              to={`/signup`}
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

          <div className="lg:hidden block hamburger">
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </div>
        </div>
      </header>
    </>
  );
};

export default Navbar;
