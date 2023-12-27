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
  updateList = (key, updatedList) => {
    const beauty = { ...this.state.beauty };
    beauty[key] = updatedList;
    this.setState({ beauty });
  };

  addToList = (key) => {
    const list = { ...this.state.list };
    list[key] = list[key] + 1 || 1;
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
        <Inventory
          loadBeautyGuide={this.loadBeautyGuide}
          updateList={this.updateList}
        />
        <div>
          <ToDoList beauty={this.state.beauty} list={this.state.list} />
        </div>
      </div>
    );
  }
}

export default App;
