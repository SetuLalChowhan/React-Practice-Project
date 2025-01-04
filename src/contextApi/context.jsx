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

  const updateLocalStorage = (cart) => {
    localStorage.setItem("cart", JSON.stringify(cart));
  };

  const addToCart = (product) => {
    setCart((prev) => {
      let updatedCart = [...prev];
      const existingItem = updatedCart.find((item) => item.id === product.id);

      if (existingItem) {
        updatedCart = updatedCart.map((item) =>
          item.id === product.id ? { ...item, qty: item.qty + 1 } : item
        );
      } else {
        updatedCart.push({ ...product, qty: 1 }); // Initialize `qty` for new product
      }

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const addQty = (product) => {
    setCart((prev) => {
      const updatedCart = prev.map((item) =>
        item.id === product.id ? { ...item, qty: item.qty + 1 } : item
      );

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeQty = (product) => {
    setCart((prev) => {
      const updatedCart = prev
        .map((item) =>
          item.id === product.id
            ? { ...item, qty: Math.max(item.qty - 1, 0) } // Prevent negative quantity
            : item
        )
        .filter((item) => item.qty > 0); // Remove item if qty is 0

      updateLocalStorage(updatedCart);
      return updatedCart;
    });
  };

  const removeFromCart = (productId) => {
    setCart((prev) => {
      const updatedCart = prev.filter((product) => product.id !== productId);
      updateLocalStorage(updatedCart);
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
