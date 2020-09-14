import React, { useState, useEffect } from "react";
import CurrencyFormat from "react-currency-format";
import { useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider/Provider";
import { motion } from "framer-motion";
import "./Subtotal.scss";
import { getBasketTotal } from "../../StateProvider/Reducer";

const Subtotal = () => {
  const history = useHistory();

  const [{ basket }, dispatch] = useStateValue();

  return (
    <div className="subtotal">
      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="subtotal__title">
              Subtotal ({basket?.length} items) :
              <strong>{`${value}`}</strong>
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
        prefix={"$"}
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
