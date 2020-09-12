import React, { useState } from "react";
import "./Register.scss";
import logo from "./../../media/images/logo-registro.png";
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

const Register = () => {
  const history = useHistory();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUserName] = useState("");

  //tengo que enviar estos datos a firestore no al store local ,
  //de esa manera los usuarios podran en un
  //nuevo componente userInfo actualizar sus
  // datos si lo necesitan (esto se haria actualizando
  //   los docuementos buscandolos por id )
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [adress, setAdress] = useState("");
  // const [phone, setPhone] = useState("");
  // const [city, setCity] = useState("");
  // const [country, setCountry] = useState("");

  const register = (e) => {
    e.preventDefault();

    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        //aqui mandaria los datos(documentos) (direccion,telefono,etc) a firestore
        if (auth) {
          history.push("/");
        }
        return auth.user.updateProfile({
          displayName: username,
        });
      })
      .catch(() => MySwal.fire("", "Error al registrar el usuario", "error"));
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
            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Usuario
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={username}
                onChange={(e) => setUserName(e.target.value)}
              />
            </div>
{/* 
            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Nombres
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            <div className="signup__container__form__style">
              <h5 className="signup__container__form__lastname__label">
                Apellidos
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
              />
            </div>

            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Dirección
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={adress}
                onChange={(e) => setAdress(e.target.value)}
              />
            </div>


            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Telefono
              </h5>
              <input
                required
                className="signup__container__form__phone__input"
                type="text"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>

            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Ciudad
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={city}
                onChange={(e) => setCity(e.target.value)}
              />
            </div>


            <div className="signup__container__form__style">
              <h5 className="signup__container__form__style__label">
                Ciudad
              </h5>
              <input
                required
                className="signup__container__form__style__input"
                type="text"
                value={country}
                onChange={(e) => setCountry(e.target.value)}
              />
            </div> */}

            <div className="signup__container__form__email">
              <h5 className="signup__container__form__email__label">Email</h5>
              <input
                required
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
                required
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
