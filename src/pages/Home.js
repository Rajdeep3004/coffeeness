import React, { Fragment } from "react";

import homesand from "../assets/images/home sand.jpg";
import sberry from "../assets/images/strawberry latte.jpg";
import juices from "../assets/images/Home juices.jpg";
import phones from "../assets/images/home phones.jpg";
import fb from "../assets/icons/facebook.svg";
import ig from "../assets/icons/instagram.svg";
import pt from "../assets/icons/pinterest.svg";
import tw from "../assets/icons/twitter.svg";

import { useNavigate } from "react-router-dom";

const Home = () => {
  const navigate = useNavigate();

  return (
    <Fragment>
      <div className="home-outerDiv">
        <img alt="sandwich" src={homesand} className="w-full h-full" />
        <div className="home-innerDiv">
          <p>This weekend, buy your friends a lunch</p>

          <button
            className="home-btn-btn"
            onClick={(event) => {
              event.preventDefault();
              navigate("/menu/food", { replace: true });
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="home-outerDivtwo">
        <img
          alt="milkshake"
          src={sberry}
          className="w-full h-full lg:order-2"
        />
        <div className="home-innerDiv">
          <p>Newly added</p>

          <button
            className="home-btn-btn"
            onClick={(event) => {
              event.preventDefault();
              navigate("/menu/coldcoffees", { replace: true });
            }}
          >
            Order Now
          </button>
        </div>
      </div>

      <div className="home-outerDivtwo">
        <img alt="juices" src={juices} className="w-full h-full" />
        <div className="home-innerDiv">
          <p>Fruit Jucies</p>

          <button className="home-btn-btn">Adding soon...</button>
        </div>
      </div>

      <div className="home-outerDivtwo">
        <img alt="phones" src={phones} className="w-full h-full lg:order-2" />
        <div className="home-innerDiv">
          <p>Android & iOS apps coming soon...</p>
          <button className="home-btn-btn">Sign up for beta</button>
        </div>
      </div>

      <div className="w-full bg-white text-black text-center mt-14 pt-16 pb-28 lg:pt-20 login-label">
        <p>Follow Us</p>
        <div className="pt-10 lg:pt-24">
          <img alt="" src={fb} className="home-icons" />
          <img alt="" src={ig} className="home-icons" />
          <img alt="" src={pt} className="home-icons" />
          <img alt="" src={tw} className="home-icons" />
        </div>
      </div>
    </Fragment>
  );
};

export default Home;
