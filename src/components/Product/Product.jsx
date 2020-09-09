import React from "react";
import "./Product.scss";
import { useStateValue } from "../../StateProvider/Provider";
import { ADD_TO_BASKET } from "../../StateProvider/ActionTypes";

const Product = (props) => {
  const { id, titulo, precio, imagen, rating } = props;
  const [{ basket }, dispatch] = useStateValue();

  const addToBasket = () => {
    // aqui envio el item a la store
    dispatch({
      //que estoy haciendo-> estoy Agregando al carrito
      type: ADD_TO_BASKET,
      //que cosa estoy enviando al carrito?, el objeto de abajo(item)
      item: {
        id: id,
        title: titulo,
        image: imagen,
        price: precio,
        rating: rating,
      },
    });
  };

  return (
    <div className="product">
      <div className="product__info">
        <p>{titulo}</p>
        <p className="product__price">
          <small>S/. </small>
          <strong>{precio}</strong>
        </p>
        <div className="product__rating">
          {Array(rating)
            .fill()
            .map((_, i) => (
              <span key={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img className="product__image" src={imagen} alt="producto" />
      <button onClick={addToBasket} className="product__button">
        Agregar al carrito
      </button>
    </div>
  );
};

export default Product;
