import React from "react";
import Header from "./Header";
import Inventory from "./Inventory";
import beautyguide from "../beautyguide";
import Beauty from "./Beauty";
import ToDoList from "./ToDoList";

class App extends React.Component {
  state = {
    beauty: {},
    list: {},
  };
  loadBeautyGuide = () => {
    this.setState({ beauty: beautyguide });
  };
  loadSomething = () => {
    console.log("loaded");
  };
  render() {
    return (
      <div>
        <Header tagline="Looks Maxxxing 101" />
        <ul className="fishes">
          {Object.keys(this.state.beauty).map((key) => (
            <Beauty key={key} index={key} details={this.state.beauty[key]} />
            //keys used like literal keys so that u can access the object and change state
          ))}
        </ul>
        <Inventory loadBeautyGuide={this.loadBeautyGuide} />
        <ToDoList
          beauty={this.state.beauty}
          list={this.state.list}
          loadSomething={this.loadSomething}
        />
      </div>
    );
  }
}

export default App;
