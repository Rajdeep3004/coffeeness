import React, { useState, useRef, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../../store/CartContext";

const Card = (props) => {
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  const [amountIsValid, setAmountIsValid] = useState(true);
  const amountInputRef = useRef();

  const routeHandler = (event) => {
    event.preventDefault();
    navigate("/login", { replace: true });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    if (
      +amountInputRef.current.value < 1 ||
      +amountInputRef.current.value > 15
    ) {
      setAmountIsValid(false);
      return;
    }
    ctx.addItem({
      id: props.id,
      name: props.name,
      price: props.price,
      amount: +amountInputRef.current.value,
      url: props.url,
    });
  };
  return (
    <div key={props.id} className="card-div">
      <img alt={props.alt} src={props.url} className="w-full" />
      <div className="mx-4 mt-4">
        <h1 className="text-2xl font-bold inline-block">{props.name}</h1>
        <p className="my-6 text-sm">{props.desc}</p>
        <div className="flex justify-between items-center my-6 font-bold">
          <p>Servings:</p>
          <input
            ref={amountInputRef}
            id={`amount_${props.id}`}
            type="number"
            min="1"
            max="15"
            step="1"
            defaultValue="1"
            className="w-16"
          />
        </div>
        <div className="flex justify-between items-center py-6">
          <p className="font-bold">Price: ₹{props.price}</p>
          <button
            onClick={ctx.isLoggedin ? submitHandler : routeHandler}
            className="card-btn"
          >
            Add to order
          </button>
        </div>
      </div>
      {!amountIsValid && <p className="p-4 text-xs">Allowed amount (1-15).</p>}
    </div>
  );
};

export default Card;
