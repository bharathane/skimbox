import { Component } from "react";
import "./index.css";
import Card from "../CardDetails";

import Buttons from "../Buttons";

const cardListDetails = [
  {
    id: "BASIC",
    head: "Basic",
    para: "FOR INDIVIDUAL & SMALL BUSINESS",
    description:
      "Everything you need to create you stor, ship products, and process payments",
    amount: "1,994",

    offer: "Get your first 3 months for ₹20/mo",
    listHead: "What include on Basic",
    listItem1: "Basic report",
    listItem2: "Up to 1,000 inventory locations",
    listItem3: "2 Staff accounts",
  },
  {
    id: "SHOPIFY",
    head: "Shopify",
    para: "FOR SMALL BUSINESS",
    description:
      "Level up your business with professional reporting and more staff accounts",
    amount: "7,447",

    offer: "Get your first 3 months for ₹20/mo",
    listHead: "What include on Basic",
    listItem1: "Professional reports",
    listItem2: "Up to 1,000 inventory locations",
    listItem3: "5 Staff accounts",
  },
  {
    id: "ADVANCED",
    head: "Advanced",
    para: "FOR TO LARGE BUSINESS",
    description:
      "Get the best of Shopify with custom reporting and our lowest transaction fees",
    amount: "30,164",

    offer: "Get your first 3 months for ₹20/mo",
    listHead: "What include on Basic",
    listItem1: "Custom support builder",
    listItem2: "Up to 1,000 inventory locations",
    listItem3: "15 Staff accounts",
  },
];

const buttonsData = [
  { id: "BASIC", context: "Basic" },
  { id: "SHOPIFY", context: "Shopify" },
  { id: "ADVANCED", context: "Advanced" },
];

class Home extends Component {
  state = { id: buttonsData[0].id };

  gettingIdOfButtons = (id) => {
    this.setState({ id });
  };

  render() {
    const { id } = this.state;
    const smallScreenRender = cardListDetails.filter((each) => each.id === id);
    return (
      <div className="home">
        <>
          {buttonsData.map((each) => (
            <Buttons
              single={each}
              gettingIdOfButtons={this.gettingIdOfButtons}
              key={each.id}
            />
          ))}
        </>
        <div className="hide-in-big">
          {smallScreenRender.map((each) => (
            <Card single={each} />
          ))}
        </div>
        <div className="hide-in-small">
          {cardListDetails.map((each) => (
            <Card single={each} />
          ))}
        </div>
      </div>
    );
  }
}

export default Home;
