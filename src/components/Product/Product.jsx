import React from "react";
import "./Product.scss";

const Product = (props) => {
  const { titulo, precio, imagen, rating } = props;
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
              <span index={i} role="img" aria-label="star">
                ⭐
              </span>
            ))}
        </div>
      </div>
      <img className="product__image" src={imagen} alt="producto" />
      <button className="product__button">Agregar al carrito</button>
    </div>
  );
};

export default Product;
