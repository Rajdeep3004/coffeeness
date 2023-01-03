import { Fragment, useContext } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import "./index.css";

import Home from "./pages/Home";
import Menu from "./pages/Menu";
import HotCoffees from "./pages/menu/HotCoffees";
import ColdCoffees from "./pages/menu/ColdCoffees";
import Teas from "./pages/menu/Teas";
import Food from "./pages/menu/Food";
import Bakery from "./pages/menu/Bakery";
import Order from "./pages/Order";
import Login from "./pages/Login";
import CartContext from "./store/CartContext";

function App() {
  const ctx = useContext(CartContext);
  return (
    <Fragment>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path="*" element={<Navigate to="home" replace={true} />} />

        <Route path="home" element={<Home />} />

        <Route path="menu" element={<Menu />}>
          <Route
            path="*"
            element={<Navigate to="hotcoffees" replace={true} />}
          />
          <Route path="hotcoffees" element={<HotCoffees />} />
          <Route path="coldcoffees" element={<ColdCoffees />} />
          <Route path="teas" element={<Teas />} />
          <Route path="food" element={<Food />} />
          <Route path="bakery" element={<Bakery />} />
        </Route>

        <Route path="order" element={<Order />} />
        {ctx.isLoggedin === false && <Route path="login" element={<Login />} />}
      </Routes>
    </Fragment>
  );
}

export default App;
