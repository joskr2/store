import React from "react";
import shopping from "./../../media/images/market.jpg";
import product1 from "./../../media/images/product1.jpg";
import camisa from "./../../media/images/camisa.jpg";
import chompa from "./../../media/images/chompa.jpg";
import juguetes from "./../../media/images/juguetes.jpg";
import laptop from "./../../media/images/laptop.jpg";
import libro from "./../../media/images/libro.jpg";
import reloj from "./../../media/images/reloj.jpg";
import "./Home.scss";
import Product from "../Product/Product";

const Home = () => {
  return (
    <div className="home">
      <div className="home__container">
        <img className="home__image" src={shopping} alt="shopping_market" />
        <div className="home__row">
          <Product
            id={1233}
            titulo="Bolsa de tela color blanca , hecha con materiales organicos"
            precio="20.84"
            imagen={product1}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={1233}
            titulo="Camisa deluxe edicion verano 2020 acabados de lujo"
            precio="55.00"
            imagen={camisa}
            rating={4}
          />
          <Product
            id={1233}
            titulo="Chompa con acabados tradicionales edicion limitada"
            precio="46.00"
            imagen={chompa}
            rating={3}
          />
          <Product
            id={1233}
            titulo="Reloj despertador rojo metalico con acabados modernos"
            precio="33.50"
            imagen={reloj}
            rating={4}
          />
        </div>
        <div className="home__row">
          <Product
            id={1233}
            titulo="Set de juguetes de Mario Bros"
            precio="24.0"
            imagen={juguetes}
            rating={5}
          />
          <Product
            id={1233}
            titulo="Laptop marca Asus 16 pulgadas  procesador i7"
            precio="2500.00"
            imagen={laptop}
            rating={5}
          />
        </div>
        <div className="home__row">
          <Product
            id={1233}
            titulo="El amor en los tiempos del Colera , Edicion revisada 2020"
            precio="89.00"
            imagen={libro}
            rating={5}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
