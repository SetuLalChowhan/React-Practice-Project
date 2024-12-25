import React, { useEffect, useRef } from "react";
import { useAllValues, useCart } from "../../contextApi/context";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cartOpen, handleCart } = useAllValues();
  const { cart, removeFromCart } = useCart();
  const cartRef = useRef(null);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const closeCart = () => {
    handleCart();
  };

  const handleOutsideClick = (event) => {
    if (cartRef.current && !cartRef.current.contains(event.target)) {
      closeCart();
    }
  };

  useEffect(() => {
    if (cartOpen) {
      document.addEventListener("mousedown", handleOutsideClick);
    } else {
      document.removeEventListener("mousedown", handleOutsideClick);
    }
    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [cartOpen]);

  return (
    <div
      ref={cartRef}
      className={`overflow-y-auto fixed top-0 right-0 w-[350px] bg-gray-800 z-40 h-screen px-4 py-10 text-white transition-all duration-300 ${
        cartOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-between">
        <p>Total Products</p>
        <IoMdClose
          className="cursor-pointer"
          color="white"
          size={30}
          onClick={closeCart}
        />
      </div>

      <div className="flex flex-col gap-3">
        {cart.map((item, index) => (
          <div key={index} className="flex justify-between items-center">
            <div className="flex gap-5 items-center">
              <div className="w-24 h-24 overflow-hidden ">
                <img
                  src={item?.images[0]}
                  className="w-full h-full object-contain"
                  alt={item.title}
                />
              </div>
              <div className="text-white flex flex-col gap-1 text-[14px]">
                <p>{item.title}</p>
                <p>{item.price}$</p>
              </div>
            </div>

            <MdDeleteOutline
              className="cursor-pointer"
              onClick={() => handleRemoveFromCart(item.id)}
              color="white"
              size={25}
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default Cart;
