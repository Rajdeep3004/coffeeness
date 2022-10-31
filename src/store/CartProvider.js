import React, { useState, useReducer, useEffect } from "react";
import CartContext from "./CartContext";

const defaultCart = {
  items:
    JSON.parse(localStorage.getItem(`items_${localStorage.getItem("uID")}`)) ||
    [],
  totalPrice:
    +localStorage.getItem(`price_${localStorage.getItem("uID")}`) || 0,
};

//////

const cartReducer = (state, action) => {
  //////////////////////////////////////////////////////////////

  if (action.type === "ADD_ITEM") {
    const NewTotalPrice =
      state.totalPrice + action.payload.price * action.payload.amount;

    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload.id
    );
    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.payload.amount,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.payload);
    }

    localStorage.setItem(
      `items_${localStorage.getItem("uID")}`,
      JSON.stringify(updatedItems)
    );
    localStorage.setItem(`price_${localStorage.getItem("uID")}`, NewTotalPrice);

    return {
      items: updatedItems,
      totalPrice: NewTotalPrice,
    };
  }

  //////////////////////////////////////////////////////////////

  if (action.type === "REMOVE_ITEM") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.payload
    );
    const existingItem = state.items[existingCartItemIndex];
    const NewTotalPrice = state.totalPrice - existingItem.price;
    let updatedItems;
    if (existingItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.payload);
    } else {
      const updatedItem = {
        ...existingItem,
        amount: existingItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    localStorage.setItem(
      `items_${localStorage.getItem("uID")}`,
      JSON.stringify(updatedItems)
    );
    localStorage.setItem(`price_${localStorage.getItem("uID")}`, NewTotalPrice);

    return {
      items: updatedItems,
      totalPrice: NewTotalPrice,
    };
  }

  //////////////////////////////////////////////////////////////

  if (action.type === "CLEAR_ITEM") {
    localStorage.setItem(
      `items_${localStorage.getItem("uID")}`,
      JSON.stringify([])
    );
    localStorage.setItem(`price_${localStorage.getItem("uID")}`, 0);
    return {
      items: [],
      totalPrice: 0,
    };
  }

  //////////////////////////////////////////////////////////////

  return defaultCart;
};

//////////////////////////////////////////////////////////////

const CartProvider = (props) => {
  const [email, setEmail] = useState(localStorage.getItem("email" || ""));
  const [isLoggedin, setLoggedin] = useState(false);

  useEffect(() => {
    const isLoggedin = localStorage.getItem("isLoggedin");
    if (isLoggedin) {
      setLoggedin(true);
    }
  }, []);

  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCart);

  const addItem = (item) => {
    dispatchCart({ type: "ADD_ITEM", payload: item });
  };

  const removeItem = (id) => {
    dispatchCart({ type: "REMOVE_ITEM", payload: id });
  };

  const clearItem = () => {
    dispatchCart({ type: "CLEAR_ITEM" });
  };

  const cartContext = {
    email: email,
    setEmail: setEmail,
    isLoggedin: isLoggedin,
    setLoggedin: setLoggedin,
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItem,
    removeItem: removeItem,
    clearItem: clearItem,
  };

  //////////////////////////////////////////////////////////////

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
