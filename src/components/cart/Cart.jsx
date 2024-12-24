import React, { useEffect } from "react";
import { useAllValues, useCart } from "../../contextApi/context";
import { IoMdClose } from "react-icons/io";
import { MdDeleteOutline } from "react-icons/md";

const Cart = () => {
  const { cartOpen, handleCart } = useAllValues();
  const{cart,removeFromCart} =useCart()

  const handleRemoveToCart = (productId) => {
    removeFromCart(productId);
   
  };

    useEffect(() => {
      const handleOutsideClick = (e) => {
        if (!e.target.closest(".cart") && !e.target.closest(".close")) {
         
        }
      };
      document.addEventListener("click", handleOutsideClick);
  
      return () => {
        document.removeEventListener("click", handleOutsideClick);
      };
    }, []);

    const closeCart = ()=>{
        handleCart(false)
    }

  console.log(cart)
  return (
    <div
      className={` overflow-y-auto overflow-hidden  fixed top-0 right-0  w-[350px] bg-gray-800 z-40 h-screen px-4 py-10 text-white transition-all duration-300 cart ${
        cartOpen ? `translate-x-0` : ` translate-x-full`
      }`}
    >
      <div className=" flex justify-between ">
        <p>Total Products</p>
        <IoMdClose
          className=" cursor-pointer close"
          color="white"
          size={30}
          onClick={closeCart}
        />
      </div>

      <div className=" flex flex-col gap-3">
        {
            cart.map((item,index)=>(
                <div key={index} className=" flex justify-between items-center">
                    <div className=" flex gap-5 items-center">
                        <div className=" w-24 h-24  overflow-hidden border-2 border-red-500">
                            <img src={item?.images[0]} className=" w-full h-full object-contain" />
                        </div>
                        <div className=" text-white flex flex-col gap-1 text-[14px]">
                            <p>{item.title}</p>
                            <p>{item.price}$</p>

                        </div>


                    </div>

                    <MdDeleteOutline className=" cursor-pointer" onClick={()=> handleRemoveToCart(item.id)}  color="white" size={25} />


                </div>
            ))
        }

      </div>
    </div>
  );
};

export default Cart;
