import React from "react";
import Calculate from "./components/Calculate";
import Earn from "./components/Earn";
import Features from "./components/Features";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Mining from "./components/Mining";
import Trade from "./components/Trade";
import WhyCrappo from "./components/WhyCrappo.jsx";

export default function App() {
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
