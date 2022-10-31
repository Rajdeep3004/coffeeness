import React, { Fragment } from "react";
import { NavLink, Outlet } from "react-router-dom";

const Menu = () => {
  const Links = [
    {
      link: "hotcoffees",
      name: "Hot Coffees",
    },
    {
      link: "coldcoffees",
      name: "Cold Coffees",
    },
    {
      link: "teas",
      name: "Teas",
    },
    {
      link: "food",
      name: "Food",
    },
    {
      link: "bakery",
      name: "Bakery",
    },
  ];
  return (
    <Fragment>
      <nav className="menu-nav-div">
        {Links.map((item) => (
          <NavLink
          key={item.link}
            to={item.link}
            
            className={({ isActive }) =>
              isActive
                ? "bg-white text-yellow-500 rounded-[34px] py-4 my-8 login-label hover:scale-110 duration-500"
                : "bg-yellow-500 text-yellow-900 rounded-[34px] py-4 my-8 login-label hover:scale-110 duration-500"
            }
          >
            {item.name}
          </NavLink>
        ))}
      </nav>
      <Outlet />
    </Fragment>
  );
};

export default Menu;
