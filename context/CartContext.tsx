"use client";

import { createContext, useContext, useState } from "react";

const CartContext = createContext<any>(null);

export function CartProvider({ children }: any) {
  const [cart, setCart] = useState<any[]>([]);

  // ADD TO CART (increase quantity)
  const addToCart = (product: any) => {
    setCart((prev) => {
      const id = product._id || product.id;

      const existing = prev.find(
        (item) => (item._id || item.id) === id
      );

      if (existing) {
        return prev.map((item) =>
          (item._id || item.id) === id
            ? { ...item, qty: item.qty + 1 }
            : item
        );
      }

      return [...prev, { ...product, qty: 1 }];
    });
  };

  // REMOVE ONE QUANTITY (NOT FULL DELETE)
  const removeFromCart = (id: string) => {
    setCart((prev) =>
      prev
        .map((item) => {
          if ((item._id || item.id) === id) {
            return { ...item, qty: item.qty - 1 };
          }
          return item;
        })
        .filter((item) => item.qty > 0) // remove if qty = 0
    );
  };

  return (
    <CartContext.Provider value={{ cart, addToCart, removeFromCart }}>
      {children}
    </CartContext.Provider>
  );
}

export const useCart = () => useContext(CartContext);