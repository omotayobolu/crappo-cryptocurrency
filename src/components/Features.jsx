import React from "react";
import FeatureBackgroundImage from "../assets/o.png";

import FeaturesData from "../data/FeaturesData";

const Features = () => {
  return (
    <section className="features" id="Features">
      <div
        className="features-header"
        data-aos="fade-up"
        data-aos-duration="2000"
      >
        <h2>
          Market sentiments, portfolio, and run the infrastructure of your
          choice
        </h2>
      </div>
      <div className="features-content">
        {FeaturesData.map((item) => (
          <div className="content" key={item.id}>
            <div
              className="content-left"
              data-aos="fade-right"
              data-aos-duration="2000"
            >
              <h3>{item.heading}</h3>
              <p>{item.description}</p>
              <button className="btn">{item.button}</button>
            </div>
            <div
              data-aos="fade-left"
              data-aos-duration="2000"
              className="content-right"
            >
              {item.image}
            </div>
          </div>
        ))}
      </div>
      <img src={FeatureBackgroundImage} className="feature-bg-1" alt="" />
    </section>
  );
};

export default Features;
