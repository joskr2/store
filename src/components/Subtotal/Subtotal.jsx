import React, { useState } from "react";
import CurrencyFormat from "react-currency-format";
import "./Subtotal.scss";

const Subtotal = () => {
  const [basket, setBasket] = useState([]);

  const getBasketTotal = (basket) => {
    return basket.lenght;
  };

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__title">
              Subtotal ({basket.lenght} items) :<strong>{`${value}`}</strong>
            </p>
            <small className="subtotal__gift">
              <input type="checkbox" /> Esta orden contiene un regalo
            </small>
          </>
        )}
        decimalScale={2}
        value={getBasketTotal(basket)}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"S/."}
      />
      <button className="subtotal__button">Procecer al pago</button>
    </div>
  );
};

export default Subtotal;
