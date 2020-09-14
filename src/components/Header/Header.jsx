import React, { useState, useEffect } from "react";
import "./Header.scss";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./../../media/images/logo.png";
import { Link, useHistory } from "react-router-dom";
import { useStateValue } from "../../StateProvider/Provider";
import { auth } from "./../../firebaseConfig";
import { motion } from "framer-motion";

const Header = () => {
  const history = useHistory();

  // eslint-disable-next-line no-unused-vars
  const [{ basket, user }, dispatch] = useStateValue();
  const [route, setRoute] = useState("");

  const handleAuth = () => {
    if (user) {
      auth.signOut();
    }
  };

  useEffect(() => {
    if (!user) {
      setRoute("/login");
    } else {
      setRoute("/");
    }
  }, [user]);

  return (
    <div className="header">
      <img
        className="header__logo"
        src={logo}
        alt="logo"
        onClick={() => history.push("/")}
      />
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <Link to={route} className="header__link">
          <motion.div
            whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255)" }}
            onClick={handleAuth}
            className="header__nav__option"
          >
            {user ? (
              <>
                {user.displayName ? (
                  <span className="header__nav__option__one">
                    {`${"Hola " + user.displayName}`}
                  </span>
                ) : (
                  <span className="header__nav__option__one">
                    {`${"Bienvenido(a)"}`}
                  </span>
                )}
                <span className="header__nav__option__two">Salir</span>
              </>
            ) : (
              <>
                <center>
                  <span className="title">Acceder</span>
                </center>
              </>
            )}
          </motion.div>
        </Link>

        <Link to="/orders" className="header__nav__option__basket header__link">
          <motion.div
            className="header__nav__option"
            whileHover={{ textShadow: "0px 0px 8px rgba(255,255,255)" }}
          >
            <span className="title">Pedidos</span>
          </motion.div>
        </Link>
        <Link
          className="header__nav__option__basket header__link"
          to="/checkout"
        >
          <motion.div
            initial={{ y: -150 }}
            animate={{ y: 0 }}
            transition={{ delay: 0.2, type: "spring", stiffness: 60 }}
          >
            <Badge badgeContent={basket?.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </motion.div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
