import React, { useState, useContext, useEffect } from "react";
import CartContext from "../../store/CartContext";

const Received = () => {
  const ctx = useContext(CartContext);
  const [recData, setRecData] = useState([]);

  useEffect(() => {
    fetch(
      `https://coffeeness-d24a9-default-rtdb.firebaseio.com/${localStorage.getItem("uID")}.json`
    )
      .then((res) => res.json())
      .then((data) => {
        let tempArr = [];

        for (const key in data) {
          tempArr.push({
            id: key,
            cartItems: data[key].cartItems,
            cartTotal: data[key].cartTotal,
          });
        }
        setRecData(tempArr);
      })
      .catch((err) => alert(`Previous orders --- ${err.message}`));
  }, [ctx.items]);

  return (
    <div>
      <div className=" pb-2 font-bold border-t-[30px]">
        <h1 className="mx-4">Previous Orders:</h1>
        {recData.length < 1 && <p className="mx-4 font-extralight">No items</p>}
      </div>
      {recData.map((items) => (
        <div key={items.id} className="p-4 shadow-md">
          <div className="">
            {items.cartItems.map((item) => (
              <div key={item.name}>
                <h1 className="inline-block ml-2">{item.name}</h1>{" "}
                <p className="inline-block ml-2">₹{item.price}</p>
                <p className="inline-block ml-2">x{item.amount}</p>
              </div>
            ))}
          </div>

          <div className="flex justify-between items-center px-4">
            <p className="font-bold">Paid: ₹{items.cartTotal}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Received;
