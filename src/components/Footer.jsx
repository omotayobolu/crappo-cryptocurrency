import React from "react";
import { Link } from "react-scroll";

import Logo from "../assets/Logo.png";
import Visa from "../assets/Visa.png";
import MasterCard from "../assets/Mastercard.png";
import Bitcoin from "../assets/Bitcoinfooter.png";
import Facebook from "../assets/facebook-f 1.png";
import Instagram from "../assets/instagram 1.png";
import YouTube from "../assets/youtube 1.png";
import Twitter from "../assets/twitter 1.png";
import LinkedIn from "../assets/linkedin 1.png";

const Footer = () => {
  return (
    <footer>
      <div className="footer-contents" id="Contact">
        <div className="footer1">
          <img className="logo" src={Logo} alt="" />
        </div>
        <div className="footer2">
          <div className="footer-header">Quick Link</div>
          <ul>
            <li>
              <Link className="nav-link" to="Home" spy={true} smooth={true}>
                Home
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="Trade" spy={true} smooth={true}>
                Products
              </Link>
            </li>
            <li>About</li>
            <li>
              <Link className="nav-link" to="Features" spy={true} smooth={true}>
                Features
              </Link>
            </li>
            <li>
              <Link className="nav-link" to="Contact" spy={true} smooth={true}>
                Contact
              </Link>
            </li>
          </ul>
        </div>
        <div className="footer3">
          <div className="footer-header">Resources</div>
          <ul>
            <li>Download Whitepaper</li>
            <li>Smart Token</li>
            <li>Blockchain Explorer</li>
            <li>Crypto API</li>
            <li>Interest</li>
          </ul>
        </div>
        <div className="footer4">
          <h3>We accept following payment systems</h3>
          <div className="payment-systems">
            <img src={Visa} alt="" />
            <img src={MasterCard} alt="" />
            <img src={Bitcoin} alt="" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>??2022 CRAPPO. All rights reserved</p>
        <div className="social-links">
          <img src={Facebook} alt="" />
          <img src={Instagram} alt="" />
          <img src={YouTube} alt="" />
          <img src={Twitter} alt="" />
          <img src={LinkedIn} alt="" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
