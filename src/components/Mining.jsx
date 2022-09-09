import React from "react";
import VectorMining from "../assets/Vector-mining.png";
import VectorMiningBitcoin from "../assets/Vector-mining-bitcoin.png";

const Mining = () => {
  return (
    <section className="mining" id="Mine">
      <div className="start-mining">
        <div className="mining-left">
          <h3>Start mining now</h3>
          <p>
            Join now with CRAPPO to get the latest news and start mining now
          </p>
        </div>
        <form className="mining-right" onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Enter your email" />
          <button className="btn">Subscribe</button>
        </form>
        <img className="mining-bg-1" src={VectorMining} alt="" />
        <img className="mining-bg-2" src={VectorMiningBitcoin} alt="" />
      </div>
    </section>
  );
};

export default Mining;
