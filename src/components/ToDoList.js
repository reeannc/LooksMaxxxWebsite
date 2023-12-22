import React from "react";

class ToDoList extends React.Component {
  render() {
    const listIds = Object.keys(this.props.beauty);

    console.log(listIds);

    return (
      <div className="order-wrap">
        <h3>Tasks Done:</h3>
        <ul>
          {listIds.map((key) => (
            <li key={key}>{listIds}</li>
          ))}
        </ul>
      </div>
    );
  }
}

export default ToDoList;

//display name of tip not index
