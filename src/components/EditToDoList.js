import React from "react";

class EditToDoList extends React.Component {
  handleChange = (event) => {
    console.log(event.currentTarget.value);
    const updatedList = {
      ...this.props.beauty,
    };
    this.props.updateList(this.props.index, updatedList);
  };

  render() {
    return (
      <div className="fish-edit">
        <select
          type="text"
          name="status"
          onChange={this.handleChange}
          value={this.props.beauty.status}
        >
          <option value="done">Doneee</option>
          <option value="not done">Not Doneee!</option>
        </select>
      </div>
    );
  }
}
export default EditToDoList;

//status doesnt need to be changed
//when button clicked, add that red square
