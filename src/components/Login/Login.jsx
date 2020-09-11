import React, { useState } from "react";
import "./Login.scss";
import logo from "./../../media/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { auth } from "../../firebaseConfig";
import { motion } from "framer-motion";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

const MySwal = withReactContent(Swal);

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

const Login = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const signin = (e) => {
    e.preventDefault();
    auth
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        history.push("/");
      })
      .catch(() => MySwal.fire("", "Error al iniciar sesión", "error"));
  };
  const register = (e) => {
    e.preventDefault();

    history.push("/register");
  };

  return (
    <>
      <motion.div
        variants={containerVariants}
        initial="hidden"
        animate="visible"
        exit="exit"
        className="login"
      >
        <Link to="/">
          <img className="login__logo" src={logo} alt="logo" />
        </Link>
        <div className="login__container">
          <center>
            <h1 className="login__container__title">Iniciar sesión </h1>
          </center>
          <form className="login__container__form">
            <div className="login__container__form__email">
              <h5 className="login__container__form__email__label">Email</h5>
              <input
                className="login__container__form__email__input"
                type="text"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className="login__container__form__password">
              <h5 className="login__container__form__password__label">
                Contraseña
              </h5>
              <input
                className="login__container__form__password__input"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={signin}
              type="submit"
              className="login__button__signin"
            >
              Iniciar sesión
            </motion.button>
            <center>
              <h4 className="login__container__question">
                ¿Aún sin cuenta? Create una aqui{" "}
              </h4>
            </center>
            <motion.button
              whileHover={{ scale: 1.1 }}
              onClick={register}
              type="submit"
              className="login__button__register"
            >
              Crear cuenta nueva
            </motion.button>
          </form>
        </div>
      </motion.div>
    </>
  );
};

export default Login;
