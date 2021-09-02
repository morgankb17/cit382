import React, { Component } from "react";
import "./styles.css";
import { caesarEncrypt } from "./CaesarCypher.js";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "",
      outputText: "",
      shiftNum: 2,
      shiftLeft: true
    };
  }
  handleNumChange = (evt) => {
    var shiftNum = evt.target.value;
    var outputText = caesarEncrypt(
      this.state.inputText,
      shiftNum,
      this.state.shiftLeft
    );
    this.setState({ shiftNum, outputText });
  };
  handleBoxChange = (evt) => {
    var shiftLeft = evt.target.checked;
    if (shiftLeft === true) {
      shiftLeft = true;
    } else if (shiftLeft === false) {
      shiftLeft = false;
    }
    var outputText = caesarEncrypt(
      this.state.inputText,
      this.state.shiftNum,
      shiftLeft
    );
    this.setState({ shiftLeft, outputText });
  };
  onClearButtonClick = (evt) => {
    this.setState({ inputText: "" });
    console.log("Textbox cleared");
  };
  onKeyPressed = (evt) => {
    if (evt.keyCode === 8) {
      evt.preventDefault()
    }
  };
  handleClearText = (evt) => {
    var inputText = evt.target.value;
    var outputText = caesarEncrypt(
      inputText,
      this.state.shiftNum,
      this.state.shiftLeft
    );
    this.setState({ outputText, inputText });
  };
  handleAlphabet = () => {
    const arrOG = [...Array(127).keys()];
    const filteredOG = arrOG.filter((key) => key >= 33 && key <= 127);
    const unshifted = filteredOG.map((x) => String.fromCharCode(x));
    const output = unshifted.map((char) => (
      <div key={char}>{`${char} = ${caesarEncrypt(char, this.state.shiftNum, this.state.shiftLeft)}`}</div>
    ));
    return <div>{output}</div>
  }
  render() {
    return (
      <div className="App">
        <div id="input">
          Cleartext:{" "}
          <input
            id="inputText"
            value={this.state.inputText}
            onChange={this.handleClearText.bind(this)}
            type="input"
          />
          &nbsp;
          <button id="ClearButton" onClick={this.onClearButtonClick}>
            Clear
          </button>
        </div>
        <hr id="topLine" />
        <div id="output">
          Caesar Ciphertext:{" "}
          <input type="input" id="outputText" value={this.state.outputText} readOnly />
        </div>
        <form>
          <div id="adjust">
            <input
              id="shiftValue"
              type="number"
              min="0"
              max="30"
              value={this.state.shiftNum}
              onChange={this.handleNumChange}
              onKeyDown={this.onKeyPressed}
            />
            &nbsp;
            <input
              id="slider"
              type="range"
              min="0"
              max="30"
              value={this.state.shiftNum}
              onChange={this.handleNumChange}
              step="1"
            />
            &nbsp;&nbsp;Shift Left:&nbsp;
            <input
              id="checkbox"
              type="checkbox"
              defaultChecked={this.state.shiftLeft}
              onChange={this.handleBoxChange}
            />
          </div>
        </form>
        <hr id="bottomLine" />
        <div id="container">{this.handleAlphabet()}</div>
      </div>
    );
  }
}
