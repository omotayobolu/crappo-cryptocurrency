import React, { useState } from "react";
import hoverArrow from "../assets/Group 16.png";

import CryptocurrenciesData from "../data/CryptocurrenciesData";

const Trade = () => {
  const [active, setActive] = useState("crypto1");

  const toggleActive = (id) => {
    setActive(id);
  };

  return (
    <div className="trade">
      <div className="trade-header">
        <h2>Trade securely and market the high growth cryptocurrencies.</h2>
      </div>
      <div className="coins">
        {CryptocurrenciesData.map((crypto) => (
          <div
            onClick={() => toggleActive(crypto.id)}
            key={crypto.id}
            className={active === crypto.id ? "coin active" : "coin"}
          >
            {crypto.icon}
            <div
              className={
                active === crypto.id ? "coin-heading active" : "coin-heading"
              }
            >
              <h3>{crypto.heading}</h3>
              <p>{crypto.code}</p>
            </div>
            <div
              className={
                active === crypto.id ? "description active" : "description"
              }
            >
              <p>{crypto.description}</p>
            </div>

            {active === crypto.id ? (
              <button className="btn">
                {crypto.button}
                <img src={hoverArrow} alt="" />
              </button>
            ) : (
              crypto.buttonNotHover
            )}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trade;
