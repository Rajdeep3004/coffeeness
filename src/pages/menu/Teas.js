import React, { Fragment } from "react";
import Card from "./Card";

const Menu = [
  {
    id: "t1",
    alt: "Tea",
    url: require("../../assets/images/tea.jpg"),
    name: "Tea",
    desc: "Black tea infused with cardamom and warm spices is combined with steamed milk. An iconic chai cup.",
    price: 30,
  },
  {
    id: "t2",
    alt: "Green Tea",
    url: require("../../assets/images/green tea.jpg"),
    name: "Green tea",
    desc: "A refreshing cup of a tea made from green leaves of Camellia sinensis.Highly rich in anti-oxidants ",
    price: 50,
  },
];

const Teas = () => {
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

export default Teas;
