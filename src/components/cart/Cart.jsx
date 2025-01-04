import React, { useEffect, useRef } from "react";
import { useAllValues, useCart } from "../../contextApi/context";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cartOpen, handleCart } = useAllValues();
  const { cart, removeFromCart, addQty, removeQty } = useCart();
  const cartRef = useRef(null);

  const handleRemoveFromCart = (productId) => {
    removeFromCart(productId);
  };

  const closeCart = () => {
    handleCart();
  };

  const cartTotalValues = cart.reduce(
    (acc, item) => acc + item.price * item.qty,
    0
  );

  return (
    <>
      <div
        className={`fixed w-full inset-0 bg-black transition-opacity duration-300 ${
          cartOpen ? "opacity-15 visible" : "opacity-0 invisible"
        } z-[20] `}
        onClick={() => closeCart()}
      ></div>

      <div
        ref={cartRef}
        className={`overflow-hidden h-[100vh] fixed top-0 right-0 w-full sm:w-[400px] bg-gray-900 shadow-lg z-40 px-4 py-8 text-white transition-all duration-300 ${
          cartOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex justify-between items-center mb-6 border-b pb-3">
          <h2 className="text-lg font-semibold">Shopping Cart</h2>
          <IoMdClose className="cursor-pointer" size={28} onClick={closeCart} />
        </div>

        {/* Cart Items */}
        <div className="flex-1 h-[70vh] overflow-y-auto">
          <div className="flex flex-col gap-6">
            {cart.map((item, index) => (
              <div
                key={index}
                className="flex justify-between gap-2 items-center bg-gray-800 p-4 rounded-md shadow-md"
              >
                {/* Product Info */}
                <div className="flex w-28 gap-3 items-center flex-1 ">
                  <div className="w-16 h-16 overflow-hidden rounded-md">
                    <img
                      src={item?.images[0]}
                      className="w-full h-full object-contain"
                      alt={item.title}
                    />
                  </div>
                  <div className="text-sm">
                    <p className="text-white font-medium">{item.title}</p>
                    <p className="text-gray-400">${item.price}</p>
                  </div>
                </div>

                {/* Quantity Controls */}
                <div className="flex items-center gap-3">
                  <button
                    onClick={() => addQty(item)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-md text-white hover:bg-gray-600 transition duration-200"
                  >
                    +
                  </button>
                  <p className="text-lg font-semibold text-white">{item.qty}</p>
                  <button
                    onClick={() => removeQty(item)}
                    className="w-8 h-8 flex items-center justify-center bg-gray-700 rounded-md text-white hover:bg-gray-600 transition duration-200"
                  >
                    -
                  </button>
                </div>

                {/* Remove Button */}
                <MdDeleteOutline
                  onClick={() => handleRemoveFromCart(item.id)}
                  className="cursor-pointer text-gray-400 hover:text-red-500 transition duration-200"
                  size={24}
                />
              </div>
            ))}
          </div>
        </div>

        {/* Total Price */}
        <div className="mt-4 border-t pt-4">
          <p className="text-xl font-semibold text-center">
            Total:{" "}
            <span className="text-green-400">
              ${Math.floor(cartTotalValues)}
            </span>
          </p>
          <button className="mt-4 w-full bg-green-500 text-white py-3 rounded-md font-semibold hover:bg-green-600 transition duration-200">
            Checkout
          </button>
        </div>
      </div>
    </>
  );
};

export default Cart;
