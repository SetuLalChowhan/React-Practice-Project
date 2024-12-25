// src/CartContext.js
import React, { createContext, useState, useContext } from "react";

// values
const AllValuesContext = createContext();
export const useAllValues = () => useContext(AllValuesContext);

// Cart Context
const CartContext = createContext();
export const useCart = () => useContext(CartContext);

// Wishlist Context
const WishlistContext = createContext();
export const useWishlist = () => useContext(WishlistContext);

export const AllValuesProvider = ({ children }) => {
  const [cartOpen, setCartOpen] = useState(false);

  const handleCart = () => {
    setCartOpen(!cartOpen);
  };

  return (
    <AllValuesContext.Provider value={{ cartOpen, handleCart }}>
      {children}
    </AllValuesContext.Provider>
  );
};

export const CartProvider = ({ children }) => {
  const [cart, setCart] = useState(() => {
    // Retrieve cart from localStorage on mount
    const savedCart = localStorage.getItem("cart");
    return savedCart ? JSON.parse(savedCart) : [];
  });

  console.log(cart)

  const addToCart = (product) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      const itemExist = updatedCart.find((item) => item.id == product.id);

      if (itemExist) {
        updatedCart.forEach((item) => {
          item.id == product.id ? (item.qty += 1) : item;
        });
      } else {
        updatedCart = [...prev, product];
      }

      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const addQty = (product) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      const itemExist = updatedCart.find((item) => item.id == product.id);

      if (itemExist) {
        updatedCart.forEach((item) => {
          item.id == product.id ? (item.qty += 1) : item;
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };
  const removeQty = (product) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      const itemExist = updatedCart.find((item) => item.id == product.id);

      if (itemExist) {
        updatedCart.forEach((item) => {
          item.qty == 0 ? item : item.id == product.id ? (item.qty -= 1) : item;
        });
      }
      localStorage.setItem("cart", JSON.stringify(updatedCart));
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updatedCart = prev.filter((product) => product.id !== productId);
      localStorage.setItem("cart", JSON.stringify(updatedCart)); // Save updated cart to localStorage
      return updatedCart;
    });
  };

  return (
    <CartContext.Provider
      value={{ cart, addToCart, removeFromCart, addQty, removeQty }}
    >
      {children}
    </CartContext.Provider>
  );
};

export const WishlistProvider = ({ children }) => {
  const [wishlist, setWishlist] = useState([]);

  const addToWishlist = (product) => {
    setWishlist((prevWishlist) => [...prevWishlist, product]);
  };

  const removeFromWishlist = (productId) => {
    setWishlist((prevWishlist) =>
      prevWishlist.filter((item) => item.id !== productId)
    );
  };

  return (
    <WishlistContext.Provider
      value={{ wishlist, addToWishlist, removeFromWishlist }}
    >
      {children}
    </WishlistContext.Provider>
  );
};

// cart open
