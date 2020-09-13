import { Link, useHistory } from "react-router-dom";
import React, { useState, useEffect } from "react";
import { useStateValue } from "../../StateProvider/Provider";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import "./Payment.scss";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "../../StateProvider/Reducer";
import axios from "./../../Request/axios"

const Payment = () => {

  const history = useHistory();

  const [{ basket, user }, dispatch] = useStateValue();

  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);

  const [succeded, setSucceded] = useState(false);
  const [processing, setProcessing] = useState("");

  const [clientSecret, setClientSecret] = useState(true);

  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    const getClientSecret = async () => {
      const response = await axios({
        method: "POST",
        url: `/payment/create?total=${getBasketTotal(basket)* 100}`,
        // por defecto en dolares($) , ahjustar dinamicamente , par que cobre en soles ?
        // hacer esto en el reducer , usar una libreria de conversion de moneda? o hacer 
        //el calculo manual con un precio fijo de 3.15 soles x dolar?
        //ACEPTARLA EN DOLARES PORQUE STRIPE NO FUNCIONA PARA PERU , VER EL TEMA DE MOSTARR EL S/. EN LUGAR DEL SIMBOLO DE DOLAR EN EL RENDER 
        // DE CHECKOUT
        //100 SIGNIFICA   la subunidad de la moneda , en este caso significa monedas(1pennie)
      });
      setClientSecret(response.data.clientSecret)
    };
    getClientSecret();
  }, [basket]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setProcessing(true);

    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method : {
        card:elements.getElement(CardElement)
      }
    }).then(({paymentIntent})=>{
      //paymentIntent es la confirmacion
      setSucceded(true)
      setError(null)
      setProcessing(false)

      history.replace("/orders")
    })
  };
  const handleChange = (e) => {
    setDisabled(e.empty);
    setError(e.error ? e.error.message : "");
  };

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
                key={item.id}
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
        <div className="payment__section__details">
          <form onSubmit={handleSubmit}>
            <CardElement onChange={handleChange} />
            <div className="payment__section__price">
              <CurrencyFormat
                renderText={(value) => (
                  <>
                    <p className="subtotal__title">
                      Precio total :<strong>{`${value}`}</strong>
                    </p>
                  </>
                )}
                decimalScale={2}
                value={getBasketTotal(basket)}
                displayType={"text"}
                thousandSeparator={true}
                prefix={"$"}
              />
              <button
                className="payment__section__button"
                disabled={processing || disabled || succeded}
              >
                <span>
                  {processing ? <p>Procesando...</p> : "Comprar ahora "}
                </span>
              </button>
            </div>
            {error && <div>{error}</div>}
          </form>
        </div>
      </div>
    </div>
  );
};

export default Payment;
