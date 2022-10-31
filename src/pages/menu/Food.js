import React, { Fragment } from "react";
import Card from "./Card";

const Menu = [
  {
    id: "f1",
    alt: "Sandwich",
    url: require("../../assets/images/sandwich.jpg"),
    name: "Sandwich",
    desc: "Grilled breads with a patty of potatoes, onions and corns alongside coriander and mayonnaise.",
    price: 40,
  },
  {
    id: "f2",
    alt: "Pasta",
    url: require("../../assets/images/pasta.jpg"),
    name: "Pasta",
    desc: "Nothing beats a good pasta dish. This one uses a veg-packed tomato sauce as a base, with loads of extra diced veg.",
    price: 70,
  },
  {
    id: "f3",
    alt: "Fruit Salad",
    url: require("../../assets/images/fruit salad.jpg"),
    name: "Fruit Salad",
    desc: "Their is nothing healthier than a bowl full of fresh fruits.With oats and honey foor more goodness",
    price: 60,
  },
];

const Food = () => {
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

export default Food;
