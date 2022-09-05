import React from "react";
import Calculate from "./components/Calculate";
import Earn from "./components/Earn";
import Home from "./components/Home";
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
    </div>
  );
}
