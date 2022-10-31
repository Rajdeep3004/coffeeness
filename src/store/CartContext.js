import React from "react";

const CartContext = React.createContext({
  email: "",
  setEmail: () => {},
  isLoggedin: false,
  setLoggedin: () => {},
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
  clearItem: () => {},
});

export default CartContext;
