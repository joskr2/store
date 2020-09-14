import React from "react";
import "./Order.scss";
import moment from "moment";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import CurrencyFormat from "react-currency-format";


const Order = (props) => {
  const { order } = props;
  return (
    <div className="order">
      <h2 className="order__title">Order</h2>
      <p className="order__content">
        {moment.unix(order.data.created).format("LLL")}
      </p>
      <p className="order__id">{order.id}</p>

      {order.data.basket?.map((item) => (
        <CheckoutProduct
          id={item.id}
          title={item.title}
          image={item.title}
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
    </div>
  );
};

export default Order;
