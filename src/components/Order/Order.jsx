import React from "react";
import "./Order.scss";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
  exit: {
    x: "-100vw",
    transition: {
      ease: "easeInOut",
    },
  },
};

const Order = (props) => {
  const { order } = props;
  return (
    <motion.div
      className="order"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
    >
      <div className="order__container">
        <div className="order__container__order">
          <h2 className="order__container__title">Pedido</h2>
         
        </div>
         <h3 className="order__container__id order__container__title">{ order.id}</h3>
        <p className="order__container__content">
          {moment.unix(order.data.created).format("LLL")}
        </p>
      </div>
      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.image}
          price={item.price}
          rating={item.rating}
          hiddenButton
        />
      ))}

      <CurrencyFormat
        renderText={(value) => (
          <>
            <p className="order__total">
              Precio total :<strong>{`${value}`}</strong>
            </p>
          </>
        )}
        decimalScale={2}
        value={order.data.amount / 100}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
    </motion.div>
  );
};

export default Order;
