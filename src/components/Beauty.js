import React from "react";

class Beauty extends React.Component {
  handleClick = () => {
    this.props.addToList(this.props.index);
  };
  render() {
    const { image, name, status } = this.props.details;
    const isDone = status === "done";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <button disabled={!isDone} onClick={this.handleClick}>
          {isDone ? "done" : "do this now!"}
        </button>
      </li>
    );
  }
}

export default Beauty;

//populate a list
