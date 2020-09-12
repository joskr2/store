import { Link } from "react-router-dom";
import React from "react";
import { useStateValue } from "../../StateProvider/Provider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.scss";

const Payment = () => {
  const [{ basket, user }, dispatch] = useStateValue();
  return (
    <div className="payment">
      <div className="payment__container">
        <h1 className="payment__container__title">
          Revisar{" "}
          <Link className="payment__container__title__tag" to="/checkout">
            {basket?.length}
          </Link>{" "}
          items
        </h1>
        <div className="payment__section">
          <h3 className="payment__section__title">Dirección de entrega</h3>
          <div className="payment__section__address">
            <p>{user?.displayName || user?.email}</p>
            <p>direccion de entrega</p>
            <p>ciudad y pais a entregar</p>
          </div>
        </div>

        <div className="payment__section">
          <h3 className="payment__section__title">Revisa tu compra</h3>
          <div className="payment__section__items">
            {basket?.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        <div className="payment__section">
          <h3 className="payment__section__title">Metodo de pago</h3>
        </div>
      </div>
    </div>
  );
};

export default Payment;
