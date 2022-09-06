import React from "react";
// import hoverArrow from "../assets/Group 16.png";

import CryptocurrenciesData from "../data/CryptocurrenciesData";

const Trade = (props) => {
  return (
    <div className="trade">
      <div className="trade-header">
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>
      </div>
      <div className="coins">
        {CryptocurrenciesData.map((crypto) => (
          <div
            key={crypto.id}
            className="coin"
            onMouseOver={props.handleMouseOver}
            onMouseOut={props.handleMouseOut}
          >
            {crypto.icon}
            <div className="coin-heading">
              <h3>{crypto.heading}</h3>
              <p>{crypto.code}</p>
            </div>
            <div className="description">
              <p>{crypto.description}</p>
            </div>

            {/* {props.isHovering && (
              <button className="btn">
                {" "}
                {crypto.button}
                <img src={hoverArrow} alt="" />{" "}
              </button>
            )} */}
            {/* {!props.isHovering && crypto.buttonNotHover} */}
            {crypto.buttonNotHover}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
