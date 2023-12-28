import React from "react";

class Beauty extends React.Component {
  handleClick = () => {
    this.setState({ ...this.props.beauty, status: "completed" });
  };
  render() {
    const { image, name, status } = this.props.details;
    const isDone = status === "done";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <button disabled={!isDone} onClick={this.handleClick}>
          {isDone ? "done?" : "do this now!"}
        </button>
      </li>
    );
  }
}

export default Beauty;

//2.//update status upstream (completed)

//steps: 1. when done button clicked, handle Click, that changes props upstream
//2. when status is completed / button clicked , 1. add it to tasks done 2. also add css style logo that says 'completed'

//LEARN THIS CONCEPT until you MASTER
//next, persist when refreshed
