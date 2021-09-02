import React from "react";

export default class MemeList extends React.Component {
  render() {
    return (
      <div>
        <h2 className="viewMeme">Your Memes</h2>
        <div className="listedMemes"></div>
        <div className="userEdit">
          <button id="editButton">Edit</button>
          <button id="deleteButton">Delete</button>
        </div>
      </div>
    );
  }
}
