import React from "react";
import "./Header.scss";
import Badge from "@material-ui/core/Badge";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./../../media/images/logo.png";
import { Link } from "react-router-dom";
import { useStateValue } from "../../StateProvider/Provider";

const Header = () => {
  const [{ basket }, dispatch] = useStateValue();
  return (
    <div className="header">
      <Link to="/" >
        <img className="header__logo" src={logo} alt="logo" />
      </Link>
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <Link to="/login" className="header__link">
          <div className="header__nav__option">
            <span className="header__nav__option__one">Hola</span>
            <span className="header__nav__option__two">Acceder</span>
          </div>
        </Link>
        <div className="header__nav__option">
          <span className="header__nav__option__three">Devoluciones</span>
          <span className="header__nav__option__four">& Pedidos</span>
        </div>
        <div className="header__nav__option">
          <span className="header__nav__option__five">Tus</span>
          <span className="header__nav__option__six">Cupones</span>
        </div>
        <Link className="header__nav__option__basket header__link" to="/checkout">
          <div>
            <Badge badgeContent={basket?.length} color="primary">
              <ShoppingCartIcon />
            </Badge>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Header;
