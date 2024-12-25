import React, { useState } from "react";
import { IoHeartOutline } from "react-icons/io5";
import { IoHeart } from "react-icons/io5";

import { useCart } from "../../contextApi/context";

import { useWishlist } from "../../contextApi/context";

const Card = ({ product }) => {
  const [like, setlike] = useState(false);

  const handleSubmit = () => {
    setlike(!like);
  };

  const { addToCart, removeFromCart } = useCart();

  const handleAddToCart = () => {
    const updateProduct = {
      ...product,
      qty: 1,
    };
    addToCart(updateProduct);
  };

  return (
    <div className="w-[400px] h-[400px] relative shadow-lg bg-[#ddd] overflow-hidden cursor-pointer  group">
      <img
        src={product?.images[0]}
        alt={product.title}
        className="w-full h-full object-contain group-hover:scale-105 transition-all duration-300 ease"
      />

      {/* Love Button */}
      <div
        onClick={handleSubmit}
        className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"
      >
        <button className="text-red-500 text-2xl hover:text-red-700 ">
          {like ? <IoHeart /> : <IoHeartOutline />}
        </button>
      </div>

      {/* Overlay and Add to Cart button */}
      <div className="absolute h-full w-full bg-black/20 flex items-center justify-center bottom-[-100%] group-hover:bottom-0 opacity-0 group-hover:opacity-100 transition-all duration-500 ease-in-out">
        <button
          onClick={handleAddToCart}
          className="bg-white text-black px-4 py-2 rounded shadow hover:shadow-lg transition-transform duration-300 hover:scale-105"
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

export default Card;
