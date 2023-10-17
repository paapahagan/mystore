import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // State for the cart.
  const [cart, setCart] = useState([]);
  //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if amount already exist
    const cartItem = cart.find((item) => {
      return item.id === id;
    });

    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    } else {
      setCart([...cart, newItem]);
    }
  };

  return (
    <CartContext.Provider value={{ cart, addToCart }}>
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
