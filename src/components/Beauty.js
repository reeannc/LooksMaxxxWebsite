import React from "react";

class Beauty extends React.Component {
  render() {
    const { image, name, status } = this.props.details;
    const isDone = status === "done";
    return (
      <li className="menu-fish">
        <img src={image} alt={name} />
        <h3 className="fish-name">{name}</h3>
        <button disabled={!isDone}></button>
      </li>
    );
  }
}

export default Beauty;

//add to List / add to order function
