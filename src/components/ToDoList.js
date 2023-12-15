import React from "react";

class ToDoList extends React.Component {
  render() {
    const listIds = Object.keys(this.props.list);

    return (
      <div className="order-wrap">
        <h2>{listIds}</h2>
      </div>
    );
  }
}

export default ToDoList;

//display done ones to this list(done, kinda)
