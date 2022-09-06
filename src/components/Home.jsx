import React from "react";

import Logo from "../assets/Logo.png";
import Divider from "../assets/Divider.png";
import Illustration from "../assets/Illustration.png";
import ArrowRight from "../assets/Arrow Right1.png";

const Home = () => {
  return (
    <div className="home">
      <header>
        <img src={Logo} alt="" />
        <div className="nav-items">
          <div className="nav-link">Products</div>
          <div className="nav-link">Features</div>
          <div className="nav-link">About</div>
          <div className="nav-link">Contact</div>
          <div className="nav-items-2">
            <div className="nav-link">Login</div>
            <img src={Divider} alt="" />
            <button className="btn nav-link">Register</button>
          </div>
        </div>
      </header>
      <div className="main">
        <div className="main-left">
          <div className="black-friday">
            <div className="save">75% save</div>
            <span>For the Black Friday Weekend</span>
          </div>
          <h1 className="main-header">
            Fastest & secure platform to invest in crypto
          </h1>
          <p className="main-description">
            Buy and sell cryptocurrencies, trusted by 10M wallets with over $30
            billion in transactions.
          </p>
          <button className="btn main-button">
            Try for FREE
            <img src={ArrowRight} alt="" />
          </button>
        </div>
        <div className="main-right">
          <img src={Illustration} alt="" />
        </div>
      </div>
    </div>
  );
};

export default Home;
