import React, { Fragment } from "react";
import Card from "./Card";

const Menu = [
  {
    id: "b1",
    alt: "Red Velvet Cake",
    url: require("../../assets/images/red velvet.jpg"),
    name: "Red Velvet Cake",
    desc: "Red velvet cake is much more than vanilla cake tinted red. This cake is tangy and buttery with cream cheese frosting",
    price: 70,
  },
  {
    id: "b2",
    alt: "Blueberry Muffin",
    url: require("../../assets/images/bb muffin.jpg"),
    name: "Blueberry Muffin",
    desc: "Soft muffin with sweet, juicy blueberries and a hint of lemon, finished with a crunchy sugar topping.",
    price: 60,
  },
  {
    id: "b3",
    alt: "Butterscotch Cookies",
    url: require("../../assets/images/banana bread.jpg"),
    name: "Banana Bread",
    desc: "Delicious bread with loads of banana flavor. Eggless and made with whole grains of wheat & dry fruits.",
    price: 70,
  },
  {
    id: "b4",
    alt: "Butterscotch Cookies",
    url: require("../../assets/images/bs cookies.jpg"),
    name: "Butterscotch Cookies",
    desc: "Semisweet chocolate chips mixed with butter and brown sugar, soft on the inside and crunchy on the outside.",
    price: 60,
  },
];

const Bakery = () => {
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

export default Bakery;
