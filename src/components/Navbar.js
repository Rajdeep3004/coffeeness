import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/CartContext";
import { NavLink } from "react-router-dom";
import menu from "../assets/nav-icons/menu.svg";
import close from "../assets/nav-icons/close.svg";

import { app } from "../firebaseConfig";
import { getAuth, signOut } from "firebase/auth";

const Links = [
  {
    link: "home",
    name: "Home",
  },
  {
    link: "menu",
    name: "Menu",
  },
];

const Navbar = () => {
  const auth = getAuth();
  const ctx = useContext(CartContext);
  const navigate = useNavigate();
  const [open, setOpen] = useState(false);

  const numberOfCartItems = ctx.items.reduce((curNumber, item) => {
    return curNumber + item.amount;
  }, 0);

  const signOutHandler = (event) => {
    event.preventDefault();
    signOut(auth);
    setOpen((prev) => !prev);
    ctx.setLoggedin(false);
    ctx.setEmail("");
    localStorage.removeItem("isLoggedin");
    localStorage.removeItem("uID");
    navigate("home", { replace: true });
  };

  return (
    <nav className="flex justify-between z-10  lg:pb-2 bg-yellow-700 sticky top-0">
      <NavLink to="home" className="nav">
        Coffeeness
      </NavLink>
      <img
        alt=""
        src={open ? close : menu}
        className="visible lg:hidden w-20 h-10 my-5 "
        onClick={() => {
          setOpen((prev) => !prev);
        }}
      />
      <ul className={`nav-ul ${open ? "left-0" : "-left-[80rem]"}`}>
        {Links.map((item) => (
          <NavLink
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            key={item.link}
            to={item.link}
            className={({ isActive }) =>
              isActive ? "nav-li-active" : "nav-li-inactive"
            }
          >
            {item.name}
          </NavLink>
        ))}

        {ctx.isLoggedin && (
          <NavLink
            onClick={() => {
              setOpen((prev) => !prev);
            }}
            to="order"
            className={({ isActive }) =>
              isActive ? "nav-li-active " : "nav-li-inactive"
            }
          >
            Order
            <span className="text-base align-super bg-yellow-500 text-yellow-700 rounded-full p-1">
              {numberOfCartItems}
            </span>
          </NavLink>
        )}

        <NavLink
          onClick={
            ctx.isLoggedin
              ? signOutHandler
              : () => {
                  setOpen((prev) => !prev);
                }
          }
          to={ctx.isLoggedin ? "" : "login"}
          className="nav-li-extra"
        >
          {ctx.isLoggedin ? "Sign Out" : "Login"}
        </NavLink>
      </ul>
    </nav>
  );
};

export default Navbar;
