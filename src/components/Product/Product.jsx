import React from "react";
import "./Product.scss";
import { useStateValue } from "../../StateProvider/Provider";
import { ADD_TO_BASKET } from "../../StateProvider/ActionTypes";
import { motion } from "framer-motion";

const Product = (props) => {
  const { id, titulo, precio, imagen, rating } = props;
  const [{ user }, dispatch] = useStateValue();

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
      userName: user.displayName
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
      <motion.img  whileHover={{ scale: 1.5 }} className="product__image" src={imagen} alt="producto" />
      <motion.button
        whileHover={{ scale: 1.1 }}
        onClick={addToBasket}
        className="product__button"
      >
        Agregar al carrito 
      </motion.button>
    </div>
  );
};

export default Product;
