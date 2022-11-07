import { createContext, useState, useEffect } from "react";

const addItemCart = (cartItems, product) => {
  const exists = cartItems.find((item) => item.id === product.id);

  if (exists) {
    return cartItems.map((item) =>
      item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
    );
  }

  if (!exists) {
    return [...cartItems, { ...product, quantity: 1 }];
  }
};

const deleteItemCart = function (cartItems, product) {
  return cartItems.filter((item) => item.id !== product.id);
};

const removeItemCart = function (cartItems, product) {
  return cartItems.map((item) =>
    item.id === product.id
      ? {
          ...item,
          quantity: item.quantity > 1 ? item.quantity - 1 : item.quantity,
        }
      : item
  );
};

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartitems: [],
  addItem: () => {},
  removeItem: () => {},
  deleteItem: () => {},
  cartTotal: 0,
  priceTotal: 0,
});

export const CartProvider = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setCartItem] = useState([]);
  const [priceTotal, setPriceTotal] = useState(0);

  useEffect(() => {
    const total = cartItems.reduce((sum, curr) => {
      return sum + curr.price * curr.quantity;
    }, 0);

    setPriceTotal(total);
  }, [cartItems]);

  const addItem = (product) => setCartItem(addItemCart(cartItems, product));

  const removeItem = (product) =>
    setCartItem(removeItemCart(cartItems, product));

  const deleteItem = (product) =>
    setCartItem(deleteItemCart(cartItems, product));

  const cartTotal = cartItems.reduce((prev, curr) => {
    return prev + curr.quantity;
  }, 0);
  console.log(cartTotal);

  const value = {
    isCartOpen,
    setIsCartOpen,
    cartItems,
    addItem,
    cartTotal,
    removeItem,
    deleteItem,
    priceTotal,
  };

  return (
    <CartContext.Provider value={value}>{props.children}</CartContext.Provider>
  );
};
