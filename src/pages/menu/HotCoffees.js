import React, { Fragment } from "react";
import Card from "./Card";

const Menu = [
  {
    id: "hc1",
    alt:"hot coffee",
    url: require("../../assets/images/vanilla latte.jpg"),
    name: "Vanilla Latte",
    desc: "Extra-smooth,velvety steamed milk and vanilla syrup come together to create a delightful new twist on a beloved latte.",
    price: 50,
  },
  {
    id: "hc2",
    alt:"Hazelnut Latte",
    url: require("../../assets/images/hazelnut latte.jpg"),
    name: "Hazelnut Latte",
    desc: "House-made hazelnut-praline-infused milk combined with our espresso—a true character of sweetly nut love.",
    price: 65,
  },
  {
    id: "hc3",
    alt:"Cappuccino",
    url: require("../../assets/images/Cappuccino.jpg"),
    name: "Cappuccino",
    desc: "Dark,rich espresso lies in wait under a smoothed and stretched layer of thick milk foam. An alchemy of barista artistry and craft.",
    price: 55,
  },
  {
    id: "hc4",
    alt:"Cocoa Cappuccino",
    url: require("../../assets/images/Cocoa Cappuccino.jpg"),
    name: "Cocoa Cappuccino",
    desc: "Smooth espresso lies in wait under a thick milk foam with cocoa sprinkled on the top. An ideal cup of lighter-roasted coffee.",
    price: 65,
  },
  {
    id: "hc5",
    alt:"Caramel Mocha",
    url: require("../../assets/images/caramel mocha.jpg"),
    name: "Caramel Mocha",
    desc: "Freshly steamed milk with vanilla-flavored syrup marked with espresso and topped with a caramel drizzle for an oh-so-sweet finish.",
    price: 65,
  },
  {
    id: "hc6",
    alt:"White Chocolate Mocha",
    url: require("../../assets/images/white chocolate mocha.jpg"),
    name: "White Chocolate Mocha",
    desc: "Our signature espresso meets white chocolate sauce and steamed milk, and then is finished off with sweetened whipped cream.",
    price: 75,
  },
];

const HotCoffees = () => {
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

export default HotCoffees;
