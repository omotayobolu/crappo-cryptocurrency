import React from "react";

import WhyCrappoData from "../data/WhyCrappoData";

const WhyCrappo = () => {
  return (
    <main>
      <div className="crappo-numbers">
        {WhyCrappoData.map((why) => (
          <div className="why-details" key={why.id}>
            {why.image}
          </div>
        ))}
      </div>
    </main>
  );
};

export default WhyCrappo;
