import React from "react";
import "./CheckoutProduct.scss";
import { useStateValue } from "../../StateProvider/Provider";
import { REMOVE_FROM_BASKET } from "../../StateProvider/ActionTypes";


const CheckoutProduct = (props) => {
  const { id, image, title, price, rating } = props;

  const [{}, dispatch] = useStateValue();

  const removeFromBasket = () => {
    dispatch({
      type: REMOVE_FROM_BASKET,
      id: id,
    });
  };

  return (
    <div className="checkoutProduct">
      <img className="checkoutProduct__image" src={image} alt="imagen" />
      <div className="checkoutProduct__info">
        <p className="checkoutProduct__info__title">{title}</p>
        <p className="checkoutProduct__info__price">
          <small className="checkoutProduct__info__price__currency">S/.</small>
          <strong className="checkoutProduct__info__price__amount">
            {price}
          </strong>
        </p>
        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
        <button onClick={removeFromBasket} className="checkoutProduct__button">
          Remover del carrito
        </button>
      </div>
    </div>
  );
};

export default CheckoutProduct;
