import React, { Fragment } from "react";

const CheckoutForm = (props) => {
  return (
    <Fragment>
      <div className="order-div my-2 flex flex-col lg:inline lg:text-center">
        <label htmlFor="name">Name</label>
        <input
          id="name"
          type="text"
          className={`checkoutForm-input ${
            props.borderName ? "border-red-600" : "border-yellow-500"
          }`}
          ref={props.nameRef}
          onChange={props.changeHandler}
        />

        <label htmlFor="address">Address</label>
        <input
          id="address"
          type="text"
          className={`checkoutForm-input ${
            props.borderAdd ? "border-red-600" : "border-yellow-500"
          }`}
          ref={props.addRef}
          onChange={props.changeHandler}
        />

        <label htmlFor="contact">Contact No.</label>
        <input
          id="contact"
          type="number"
          className={`checkoutForm-input ${
            props.borderCno ? "border-red-600" : "border-yellow-500"
          }`}
          ref={props.c_noRef}
          onChange={props.changeHandler}
        />

        {props.msg.showMsg && (
          <p className="text-yellow-700 font-bold">{props.msg.msg}</p>
        )}
      </div>
      <hr />

      <div className="flex justify-end px-4">
        <button
          className="bg-yellow-700 hover:bg-yellow-600 text-white rounded-[34px] px-5 py-4 hover:scale-110 duration-500"
          onClick={props.submitHandler}
        >
          Confirm
        </button>
        <br />
      </div>
    </Fragment>
  );
};

export default CheckoutForm;
