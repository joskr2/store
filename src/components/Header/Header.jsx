import React from "react";
import "./Header.scss";
import SearchIcon from "@material-ui/icons/Search";
import ShoppingCartIcon from "@material-ui/icons/ShoppingCart";
import logo from "./../../media/images/logo.png";
const Header = () => {
  return (
    <div className="header">
      <img className="header__logo" src={logo} alt="logo" />
      <div className="header__search">
        <input type="text" className="header__search__input" />
        <SearchIcon className="header__search__icon" />
      </div>
      <div className="header__nav">
        <div className="header__nav__option">
          <span className="header__nav__option__one">Hello Guest</span>
          <span className="header__nav__option__two">Sign In</span>
        </div>
        <div className="header__nav__option">
          <span className="header__nav__option__three">Returns</span>
          <span className="header__nav__option__four">& Orders</span>
        </div>
        <div className="header__nav__option">
          <span className="header__nav__option__five">Your</span>
          <span className="header__nav__option__six">Prime</span>
        </div>
        <div className="header__nav__option__basket">
          <ShoppingCartIcon />
          <span className="header__nav__option__basket-count">1</span>
        </div>
      </div>
    </div>
  );
};

export default Header;
