import React from "react";

import Bitcoin from "../assets/bitcoin.png";
import Ethereum from "../assets/IconEth.png";
import Litecoin from "../assets/simple-icons_litecoin.png";
import ArrowRight from "../assets/Arrow Right.png";

const CryptocurrenciesData = [
  {
    id: "crypto1",
    icon: <img src={Bitcoin} alt="" />,
    heading: "Bitcoin",
    code: "btc",
    description:
      "Digital currency in which a record of transactions is maintained.",
    button: "Start mining",
    buttonNotHover: <img className="arrow-right" src={ArrowRight} alt="" />,
  },

  {
    id: "crypto2",
    icon: <img src={Ethereum} alt="" />,
    heading: "Ethereum",
    code: "eth",
    description:
      "Blockchain technology to create and run decentralized digital applications.",
    button: "Start mining",
    buttonNotHover: <img className="arrow-right" src={ArrowRight} alt="" />,
  },
  {
    id: "crypto3",
    icon: <img src={Litecoin} alt="" />,
    heading: "Litecoin",
    code: "ltc",
    description:
      "Cryptocurrency that enables instant payments to anyone in the world.",
    button: "Start mining",
    buttonNotHover: <img className="arrow-right" src={ArrowRight} alt="" />,
  },
];

export default CryptocurrenciesData;
