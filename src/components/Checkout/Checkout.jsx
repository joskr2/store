import React from "react";
import "./Checkout.scss";
import banner from "./../../media/images/banner.png";
import Subtotal from "../Subtotal/Subtotal";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../../StateProvider/Provider";
import { motion, AnimatePresence } from "framer-motion";

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

const Checkout = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="exit"
      className="checkout"
    >
      <div className="checkout__side__left">
        <img
          className="checkout__side__left__banner"
          src={banner}
          alt="banner"
        />
        <div>
          <h2 className="checkout__side__left__title">Tu carrito de compras</h2>
          <AnimatePresence>
            {basket?.map((item, index) => (
              <motion.div exit={{ y: -1000 }} key={index}>
                <CheckoutProduct
                  id={item.id}
                  image={item.image}
                  title={item.title}
                  price={item.price}
                  rating={item.rating}
                />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <div className="checkout__side__right">
        <Subtotal />
      </div>
    </motion.div>
  );
};

export default Checkout;
