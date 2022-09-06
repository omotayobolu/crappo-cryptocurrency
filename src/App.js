import React, { useState } from "react";
import Calculate from "./components/Calculate";
import Earn from "./components/Earn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mining from "./components/Mining";
import Trade from "./components/Trade";
import WhyCrappo from "./components/WhyCrappo.jsx";

export default function App() {
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };

  return (
    <div>
      <Home />
      <WhyCrappo />
      <Earn />
      <Calculate />
      <Trade
        isHovering={isHovering}
        handleMouseOver={handleMouseOver}
        handleMouseOut={handleMouseOut}
      />
      <Features />
      <Mining />
      <Footer />
    </div>
  );
}
