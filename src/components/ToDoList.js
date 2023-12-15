import React from "react";

class ToDoList extends React.Component {
  render() {
    return (
      <div>
        <button onClick={this.props.loadSomething}>....</button>
      </div>
    );
  }
}

export default ToDoList;

//connect keys
//get beautyTip to console.log
