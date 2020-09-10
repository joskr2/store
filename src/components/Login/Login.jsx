import React, { useState } from "react";
import "./Login.scss";
import logo from "./../../media/images/logo.png";
import { Link } from "react-router-dom";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

const signin = (e) => {
    e.preventDefault();
    console.log("inicio de sesion");
}
const register = (e) => {
    e.preventDefault();
    console.log("registro");
}

  return (
    <>
      <div className="login">
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
            <button onClick={signin} type="submit" className="login__button__signin">Iniciar sesión</button>
          </form>
        </div>
        <button onClick={register} type="submit" className="login__button__register">
          Crea una cuenta nueva
        </button>
      </div>
    </>
  );
};

export default Login;
