import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useStateValue } from "../../StateProvider/Provider";
import "./Subtotal.scss";

const Subtotal = () => {
  const [{ basket }, dispatch] = useStateValue();

  const getBasketTotal = () => {
    return basket
      ?.map((item) => +item.price)
      .reduce((prev, curr) => prev + curr, 0);
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={() => (
          <>
            <p className="subtotal__title">
              Subtotal ({basket?.length} items) :
              <strong>{` S/.${getBasketTotal()}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Esta orden contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal()}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"S/. "}
      />
      <button className="subtotal__button">Procecer al pago</button>
    </div>
  );
};

export default Subtotal;
