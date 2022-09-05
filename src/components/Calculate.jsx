import React from "react";

const Calculate = () => {
  return (
    <div className="calculate">
      <div className="rate">
        <form>
          <input type="text" placeholder="Enter your hash rate" />
          <select>
            <option value="TH/s">TH/s</option>
            <option value="TH/s">H/s</option>
            <option value="TH/s">KH/s</option>
            <option value="TH/s">MH/s</option>
            <option value="TH/s">GH/s</option>
          </select>
          <button className="btn">Calculate</button>
        </form>
      </div>
      <div className="revenue">
        <span className="heading">Estimated 24 hour revenue</span>
        <h3>
          0.055 130 59 ETH<span> ($1275)</span>
        </h3>
        <p>
          Revenue will change based on mining difficulty and Ethereum price.
        </p>
      </div>
    </div>
  );
};

export default Calculate;
