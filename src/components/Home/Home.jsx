import React from "react";
import shopping from "./../../media/images/market.jpg";
import "./Home.scss";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={shopping} alt="shopping_market" />
        <div className="home__row"></div>
        <div className="home__row"></div>
        <div className="home__row"></div>
      </div>
    </div>
  );
};

export default Home;
