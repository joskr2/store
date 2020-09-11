import React, { useState } from "react";
import "./Register.scss";
import logo from "./../../media/images/logo-registro.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig";
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

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          history.push("/");
        }
        return auth.user.updateProfile({
          displayName: username,
        });
      })
      .catch((error) => alert(error.message));
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="signup"
      >
        <Link to="/">
          <img className="signup__logo" src={logo} alt="logo" />
        </Link>
        <div className="signup__container">
          <center>
            <h1 className="signup__container__title">Registrate </h1>
          </center>
          <form className="signup__container__form">
            <div className="signup__container__form__username">
              <h5 className="signup__container__form__username__label">
                Usuario
              </h5>
              <input
                className="signup__container__form__username__input"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
            <div className="signup__container__form__email">
              <h5 className="signup__container__form__email__label">Email</h5>
              <input
                className="signup__container__form__email__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="signup__container__form__password">
              <h5 className="signup__container__form__password__label">
                Contraseña
              </h5>
              <input
                className="signup__container__form__password__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={register}
              type="submit"
              className="signup__button__signup"
            >
              Registrate
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Register;
