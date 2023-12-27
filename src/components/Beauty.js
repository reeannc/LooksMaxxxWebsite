import React from "react";

class Beauty extends React.Component {
  handleClick = () => {
    this.props.addToList(this.props.index); //not needed
    //add function to change status
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

//if "done" clicked, change status to done
//use props, upstream to change
//where to look
//add logo 'done'
