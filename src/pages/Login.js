import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import CartContext from "../store/CartContext";
import LoginPage from "./login/LoginPage";
import { app } from "../firebaseConfig";
import {
  getAuth,
  onAuthStateChanged,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";

const Login = () => {
  let auth = getAuth();
  const ctx = useContext(CartContext);
  const [inputData, setInputData] = useState({ email: "", pass: "" });
  const [msg, setMsg] = useState({ msg: "", show: false });

  const navigate = useNavigate();
  const [change, setChange] = useState(false);

  const changeHandler = (event) => {
    setInputData({ ...inputData, [event.target.name]: event.target.value });
  };

  const loginHandler = (event) => {
    event.preventDefault();
    signInWithEmailAndPassword(auth, inputData.email, inputData.pass)
      .then((res) => {
        if (res.user) {
          ctx.setLoggedin(true);
          localStorage.setItem("isLoggedin", "1");
          navigate("home", { replace: true });

          onAuthStateChanged(auth, (data) => {
            localStorage.setItem("uID", data.uid);
            localStorage.setItem("email", data.email);
            ctx.setEmail(data.email);
          });
        }
      })
      .catch((err) => setMsg({ ...msg, msg: err.message, show: true }));
  };

  const signupHandler = (event) => {
    event.preventDefault();
    createUserWithEmailAndPassword(auth, inputData.email, inputData.pass)
      .then((res) => {
        if (res.user) {
          ctx.setLoggedin(true);
          localStorage.setItem("isLoggedin", "1");
          navigate("home", { replace: true });

          onAuthStateChanged(auth, (data) => {
            localStorage.setItem("uID", data.uid);
            localStorage.setItem("email", data.email);
            ctx.setEmail(data.email);
          });
        }
      })
      .catch((err) => setMsg({ ...msg, msg: err.message, show: true }));
  };

  return (
    <LoginPage
      inputData={inputData}
      change={change}
      setChange={setChange}
      changeHandler={changeHandler}
      loginHandler={loginHandler}
      signupHandler={signupHandler}
      msg={msg}
    />
  );
};

export default Login;
