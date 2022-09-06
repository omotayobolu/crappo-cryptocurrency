import React from "react";

const Mining = () => {
  return (
    <section className="mining">
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
      </div>
    </section>
  );
};

export default Mining;
