import React from "react";

import WhyCrappoData from "../data/WhyCrappoData";
import Illustrations from "../assets/Illustrations.png";

const WhyCrappo = () => {
  return (
    <main className="why-crappo">
      <div className="crappo-numbers">
        {WhyCrappoData.map((why) => (
          <div className="numbers" key={why.id}>
            {why.image}
            <div className="description">
              <h2 className="counter">{why.number}</h2>
              <p>{why.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="content">
        <img src={Illustrations} alt="" />
        <div className="content-description">
          <h2>Why you should choose CRAPPO</h2>
          <p>
            Experience the next generation cryptocurrency platform. No financial
            borders, extra fees, and fake reviews.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </main>
  );
};

export default WhyCrappo;
