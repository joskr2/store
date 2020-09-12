import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider/Provider";
import { motion } from "framer-motion";
import "./Subtotal.scss";

const Subtotal = () => {
  const history = useHistory();

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
      <motion.button
        whileHover={{ scale: 1.1 }}
        className="subtotal__button"
        onClick={() => history.push("/payment")}
      >
        Procecer al pago
      </motion.button>
    </div>
  );
};

export default Subtotal;
