import React, { useEffect } from "react";
import Calculate from "./components/Calculate";
import Earn from "./components/Earn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mining from "./components/Mining";
import Trade from "./components/Trade";
import WhyCrappo from "./components/WhyCrappo.jsx";

import AOS from "aos";
import "aos/dist/aos.css";

export default function App() {
  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <div>
      <Home />
      <WhyCrappo />
      <Earn />
      <Calculate />
      <Trade />
      <Features />
      <Mining />
      <Footer />
    </div>
  );
}
