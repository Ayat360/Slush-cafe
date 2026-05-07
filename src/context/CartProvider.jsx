import { useState, useEffect } from "react";
import { CartContext } from "./cartContext";

export default function CartProvider({ children }) {
  // LOAD FROM LOCAL STORAGE
  const [cart, setCart] = useState(() => {
    const saved = localStorage.getItem("cart");
    return saved ? JSON.parse(saved) : [];
  });

  const [isOpen, setIsOpen] = useState(false);

  // SAVE TO LOCAL STORAGE
  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cart));
  }, [cart]);

  // ADD TO CART (NO DUPLICATE, USE QTY)
 const addToCart = (item) => {
  setCart((prev) => {
    const existing = prev.find((i) => i.name === item.name);

    if (existing) {
      return prev.map((i) =>
        i.name === item.name
          ? { ...i, qty: i.qty + 1 }
          : i
      );
    }

    return [...prev, { ...item, qty: 1 }];
  });

  setIsOpen(true);
};

  // INCREASE QTY
  const increaseQty = (name) => {
    setCart((prev) =>
      prev.map((i) =>
        i.name === name ? { ...i, qty: i.qty + 1 } : i
      )
    );
  };

  // DECREASE QTY
  const decreaseQty = (name) => {
    setCart((prev) =>
      prev
        .map((i) =>
          i.name === name ? { ...i, qty: i.qty - 1 } : i
        )
        .filter((i) => i.qty > 0)
    );
  };

  // REMOVE ITEM
  const removeFromCart = (name) => {
    setCart((prev) => prev.filter((i) => i.name !== name));
  };

  // TOGGLE CART PANEL
  const toggleCart = () => setIsOpen((prev) => !prev);

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQty,
        decreaseQty,
        isOpen,
        toggleCart
      }}
    >
      {children}
    </CartContext.Provider>
  );
}