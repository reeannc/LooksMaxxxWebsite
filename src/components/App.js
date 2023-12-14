import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import beautyguide from "../beautyguide";
import Beauty from "./Beauty";

class App extends React.Component {
  state = {
    beauty: {},
  };
  loadBeautyGuide = () => {
    this.setState({ beauty: beautyguide });
  };
  render() {
    return (
      <div>
        <Header tagline="Looks MAxxxing 101" />
        <ul className="fishes">
          {Object.keys(this.state.beauty).map((key) => (
            <Beauty key={key} index={key} />
          ))}
        </ul>
        <Inventory loadBeautyGuide={this.loadBeautyGuide} />
      </div>
    );
  }
}

export default App;
