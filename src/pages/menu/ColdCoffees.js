import React, { Fragment } from "react";
import Card from "./Card";

const Menu = [
  {
    id: "cc1",
    alt: "Iced Coffee",
    url: require("../../assets/images/iced coffee.jpg"),
    name: "Iced Coffee",
    desc: "Super-smooth cold brew, sweetened with a touch of caramel and topped with a salted, rich cold foam.",
    price: 70,
  },
  {
    id: "cc2",
    alt: "Strawberry Latte",
    url: require("../../assets/images/strawberry latte.jpg"),
    name: "Strawberry Latte",
    desc: "Sweet strawberry flavors, delightful zing of buttermilk, served over ice with freeze-dried strawberry pieces.",
    price: 80,
  },
];

const ColdCoffees = () => {
  return (
    <Fragment>
      <form className="menu-form-div">
        {Menu.map((item) => (
          <Card
            key={item.id}
            id={item.id}
            alt={item.alt}
            url={item.url}
            name={item.name}
            desc={item.desc}
            price={item.price}
          />
        ))}
      </form>
    </Fragment>
  );
};

export default ColdCoffees;
