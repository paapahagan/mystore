import { createContext, useState } from "react";

export const CartContext = createContext();

function CartProvider({ children }) {
  // State for the cart.
  const [cart, setCart] = useState([]);
  // //add to cart
  const addToCart = (product, id) => {
    const newItem = { ...product, amount: 1 };
    // check if amount already exist
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    // if item already exists, add another
    if (cartItem) {
      const newCart = [...cart].map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount + 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
      // add new to existing
    } else {
      setCart([...cart, newItem]);
    }
  };

  // //add to cart
  // const addToCart = useCallback((product, id) => {
  //   const newItem = { ...product, amount: 1 };
  //   // check if amount already exist

  //   setCart((cart) => {
  //     const cartItem = cart.find((item) => {
  //       return item.id === id;
  //     });

  //     // if item already exists, add another
  //     if (cartItem) {
  //       const newCart = [...cart].map((item) => {
  //         if (item.id === id) {
  //           return { ...item, amount: cartItem.amount + 1 };
  //         } else {
  //           return item;
  //         }
  //       });
  //       return newCart;
  //       // add new to existing
  //     } else {
  //       return [...cart, newItem];
  //     }
  //   });
  // }, []);

  //delete from cart
  const removeFromCart = (id) => {
    const newCart = cart.filter((item) => {
      return item.id !== id;
    });
    setCart(newCart);
  };

  // increase amount(item)
  const increaseAmount = (id) => {
    const cartItem = cart.find((item) => item.id === id);
    addToCart(cartItem, id);
  };

  //reduce amount(item)
  const decreaseAmount = (id) => {
    const cartItem = cart.find((item) => {
      return item.id === id;
    });
    if (cartItem) {
      const newCart = cart.map((item) => {
        if (item.id === id) {
          return { ...item, amount: cartItem.amount - 1 };
        } else {
          return item;
        }
      });
      setCart(newCart);
    }
    if (cartItem.amount < 2) {
      removeFromCart(id);
    }
  };

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseAmount,
        decreaseAmount,
      }}
    >
      {children}
    </CartContext.Provider>
  );
}

export default CartProvider;
