import React from "react";

class ToDoList extends React.Component {
  render() {
    const listIds = Object.keys(this.props.list);
    return (
      <div className="order-wrap">
        <h3>Tasks Done:</h3>
        <ul>
          {listIds.map((key, index) => (
            <li key={index}>{key}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;
