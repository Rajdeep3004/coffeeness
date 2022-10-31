import React, { useState, useContext } from "react";
import Checkout from "./order/Checkout";
import Received from "./order/Received";
import CartContext from "../store/CartContext";

const Order = () => {
  const ctx = useContext(CartContext);
  const [showCheckout, setShowCheckout] = useState(false);

  return (
    <div className="order-div">
      <h1 className="p-4 font-bold">Cart: {ctx.email}</h1>
      <p className="px-4 text-xs"></p>
      {ctx.items.map((item) => (
        <div key={item.id} className="p-4 grid grid-cols-3 shadow-md">
          <div className="flex justify-start items-center">
            <img alt={item.alt} src={item.url} className="order-img" />
            <h1 className="inline-block ml-2">{item.name}</h1>
          </div>
          <div className="flex justify-center items-center">
            <p className="">₹{item.price}</p>
          </div>
          <div className="flex justify-end items-center">
            <p className="mr-8">x{item.amount}</p>
            <button
              onClick={ctx.removeItem.bind(null, item.id)}
              className="mr-8 order-btn"
            >
              −
            </button>
            <button
              onClick={ctx.addItem.bind(null, { ...item, amount: 1 })}
              className="order-btn"
            >
              +
            </button>
          </div>
        </div>
      ))}
      {showCheckout && ctx.items.length > 0 && <Checkout />}
      <div className="flex justify-between items-center m-4">
        <p className="font-bold ">Total Price: ₹{ctx.totalPrice}</p>
        <button
          className="home-btn"
          onClick={() => {
            setShowCheckout((pv) => !pv);
          }}
        >
          {showCheckout && ctx.items.length > 0 ? "Cancel" : "Order"}
        </button>
      </div>
      <Received />
    </div>
  );
};

export default Order;
