import React, { useState, useContext, useRef } from "react";
import CheckoutForm from "./CheckoutForm";
import CartContext from "../../store/CartContext";

const Checkout = () => {
  const ctx = useContext(CartContext);

  const nameRef = useRef();
  const addRef = useRef();
  const c_noRef = useRef();
  const [borderName, setBorderName] = useState(false);
  const [borderAdd, setBorderAdd] = useState(false);
  const [borderCno, setBorderCno] = useState(false);
  const [msg, setMsg] = useState({ msg: "", showMsg: false });

  const changeHandler = () => {
    setMsg({ ...msg, msg: "", showMsg: false });

    setBorderName(false);
    setBorderAdd(false);
    setBorderCno(false);
  };

  const submitHandler = (event) => {
    event.preventDefault();

    const name = nameRef.current.value;
    const add = addRef.current.value;
    const c_no = c_noRef.current.value;

    if (
      name.trim().length > 0 &&
      add.trim().length > 0 &&
      c_no.length > 9 &&
      c_no.length < 14
    ) {
      setMsg({ ...msg, msg: "Brewing......", showMsg: true });

      fetch(
        `https://coffeeness-d24a9-default-rtdb.firebaseio.com/${localStorage.getItem("uID")}.json`,
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            formData: {
              name: name,
              add: add,
              c_no: c_no,
            },
            cartItems: ctx.items,
            cartTotal: ctx.totalPrice,
          }),
        }
      )
        .then((res) => {
          if (res.json) {
            setMsg({ ...msg, msg: "Order placed.", showMsg: true });

            setTimeout(() => {
              nameRef.current.value = "";
              addRef.current.value = "";
              c_noRef.current.value = "";
              ctx.clearItem();
              console.log(ctx.uID);
            }, 2000);
          } else {
            setMsg({
              ...msg,
              msg: "Something went wrong.",
              showMsg: true,
            });
          }
        })
        .catch((err) => alert(`Sending order --- ${err.message}`));
    } else {
      if (name.trim().length < 1) {
        setBorderName(true);
      }
      if (add.trim().length < 1) {
        setBorderAdd(true);
      }
      if (c_no.length < 9 || c_no.length > 14) {
        setBorderCno(true);
      }

      setMsg({ ...msg, msg: "Invalid fields", showMsg: true });
    }
  };

  return (
    <CheckoutForm
      nameRef={nameRef}
      addRef={addRef}
      c_noRef={c_noRef}
      borderName={borderName}
      borderAdd={borderAdd}
      borderCno={borderCno}
      msg={msg}
      changeHandler={changeHandler}
      submitHandler={submitHandler}
    />
  );
};

export default Checkout;
