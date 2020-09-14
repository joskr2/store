import React, { useEffect } from "react";
import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import { AnimatePresence } from "framer-motion";
import { Switch, Route, useLocation } from "react-router-dom";
import Checkout from "./components/Checkout/Checkout";
import Login from "./components/Login/Login";
import { auth } from "./firebaseConfig";
import { useStateValue } from "./StateProvider/Provider";
import { SET_USER } from "./StateProvider/ActionTypes";
import Register from "./components/Register/Register";
import Payment from "./components/Payment/Payment";
import { loadStripe } from "@stripe/stripe-js";
import { Elements } from "@stripe/react-stripe-js";
import Orders from "./components/Orders/Orders";

const promise = loadStripe(
  "pk_test_51H6qfWKS4AcZSboOVglttRHHZo6dDnXLdrAdL2088l7FW7Ynm04ezWFony6atTzMOPe4qZpSYIeLVKTSGFkreEh500HGDKce1f"
);

const App = () => {
  const location = useLocation();
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    auth.onAuthStateChanged((authUser) => {
      //console.log("el usuario es: ",authUser)
      if (authUser) {
        dispatch({
          type: SET_USER,
          user: authUser,
        });
      } else {
        dispatch({
          type: SET_USER,
          user: null,
        });
      }
    });
  }, [dispatch]);

  return (
    <div className="app">
      <AnimatePresence>
        <Switch location={location} key={location.key}>
          <Route exact path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route exact path="/register">
            <Register />
          </Route>
          <Route exact path="/login">
            <Login />
          </Route>
          <Route exact path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route exact path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route exact path="/">
            <Header />
            <Home />
          </Route>
        </Switch>
      </AnimatePresence>
    </div>
  );
};

export default App;
