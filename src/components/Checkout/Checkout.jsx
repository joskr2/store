import React from "react";
import "./Checkout.scss";
import banner from "./../../media/images/banner.png";
import Subtotal from "../Subtotal/Subtotal";
const Checkout = () => {
  return (
    <div className="checkout">
      <div className="checkout__side__left">
        <img
          className="checkout__side__left__banner"
          src={banner}
          alt="banner"
        />
        <div>
          <h2 className="checkout__side__left__title">
            Tu carrito de compras
          </h2>
        </div>
      </div>
      <div className="checkout__side__right">
       
       <Subtotal/>
        
      </div>
    </div>
  );
};

export default Checkout;
