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
  addToList = (key) => {
    const list = { ...this.state.list };
    list[key] = list[key] + 1 || 1; //***change so it just populates a todolist */
    this.setState({ list });
  };
  render() {
    return (
      <div>
        <Header tagline="Looks Maxxxing 101" />
        <ul className="fishes">
          {Object.keys(this.state.beauty).map((key) => (
            <Beauty
              key={key}
              index={key}
              details={this.state.beauty[key]}
              addToList={this.addToList}
            />
          ))}
        </ul>
        <Inventory loadBeautyGuide={this.loadBeautyGuide} />
        <div>
          <ToDoList beauty={this.state.beauty} list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;

//todolist should have a written list of things accomplished
