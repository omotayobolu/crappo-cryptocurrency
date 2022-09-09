import React, { useEffect, useState } from "react";

import { FaBars, FaTimes } from "react-icons/fa";
import Logo from "../assets/Logo.png";
import Divider from "../assets/Divider.png";
import Illustration from "../assets/Illustration.png";
import ArrowRight from "../assets/Arrow Right1.png";
import BackgroundImage from "../assets/[].png";
import { Link } from "react-scroll";

const Home = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [screenWidth, setScreenWidth] = useState(window.innerWidth);

  useEffect(() => {
    const changeWidth = () => {
      setScreenWidth(window.innerWidth);
    };

    window.addEventListener("resize", changeWidth);

    return () => {
      window.removeEventListener("resize", changeWidth);
    };
  });

  const toggleNav = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <div className="home">
      <header>
        <img className="logo" src={Logo} alt="" />
        {(toggleMenu || screenWidth > 1024) && (
          <ul className="nav-items ">
            <li>
              <Link className="nav-link" to="Trade" spy={true} smooth={true}>
                Products
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="Features" spy={true} smooth={true}>
                Features
              </Link>
            </li>
            <li className="nav-link">About</li>
            <li>
              <Link className="nav-link" to="Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>

            <div className="nav-items-2">
              <div className="nav-link">Login</div>
              <img src={Divider} alt="" />
              <button className="btn nav-link">
                <Link to="Mine" spy={true} smooth={true}>
                  Register
                </Link>
              </button>
            </div>
          </ul>
        )}
        <button onClick={toggleNav} className="toggle">
          <FaBars />
        </button>
      </header>
      <div className="main">
        <div
          className="main-left"
          data-aos="fade-right"
          data-aos-duration="2000"
        >
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
        <div
          data-aos="fade-left"
          data-aos-duration="2000"
          className="main-right"
        >
          <img src={Illustration} alt="" />
        </div>
      </div>
      <img className="background-image-1" src={BackgroundImage} alt="" />
      <img className="background-image-2" src={BackgroundImage} alt="" />
    </div>
  );
};

export default Home;
