import Chart from "../assets/Chart.png";
import Statistics from "../assets/Statistic.png";
import Table from "../assets/Table.png";

const FeaturesData = [
  {
    id: 1,
    heading: "Invest Smart",
    description:
      "Get full statistic information about the behaviour of buyers and sellers will help you to make the decision. ",
    button: "Learn More",
    image: <img src={Chart} alt="" />,
  },
  {
    id: 2,
    heading: "Detailed Statistics",
    description:
      "View all mining related information in realtime, at any point at any location and decide which polls you want to mine in. ",
    button: "Learn More",
    image: <img src={Statistics} alt="" />,
  },
  {
    id: 3,
    heading: "Grow your profit and track your investments",
    description:
      "Use advanced analytical tools. Clear TradingView charts let you track current and historical profit investments. ",
    button: "Learn More",
    image: <img src={Table} alt="" />,
  },
];

export default FeaturesData;
