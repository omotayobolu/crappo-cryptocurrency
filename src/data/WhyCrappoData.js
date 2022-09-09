import BarChart from "../assets/Bar Chart.png";
import Person from "../assets/Person.png";
import Earth from "../assets/Earth.png";

import NumberCounter from "number-counter";

const WhyCrappoData = [
  {
    id: "reason1",
    image: <img src={BarChart} alt="" />,
    number: (
      <NumberCounter
        className="counter"
        end={30}
        start={0}
        delay={3}
        preFix="$"
      />
    ),
    description: "Digital Curency Exchanged",
  },
  {
    id: "reason2",
    image: <img src={Person} alt="" />,
    number: (
      <NumberCounter
        className="counter"
        end={10}
        start={0}
        delay={3}
        postFix="M+"
      />
    ),
    description: "Trusted Wallets Investor",
  },
  {
    id: "reason3",
    image: <img src={Earth} alt="" />,
    number: (
      <NumberCounter className="counter" end={195} start={100} delay={3} />
    ),
    description: "Countries Supported",
  },
];

export default WhyCrappoData;
