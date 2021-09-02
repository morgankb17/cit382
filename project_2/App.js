import { Component } from "react";
import "./styles.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      inputText: "Hello World!"
    };
  }
  onClearButtonClick = (evt) => {
    this.setState({ inputText: "" });
  };
  render() {
    return (
      <div className="App">
        <div id="input">
          Cleartext: <input
            id="inputText"
            value={this.state.inputText}
            onChange={(evt) => this.setState({ inputText: evt.target.value })}
            type="input" />&nbsp;
        <button
            id="ClearButton"
            onClick={this.onClearButtonClick}>
            Clear
          </button>
        </div>
        <hr id="topLine" />
        <div id="output">
          Caesar Ciphertext: <input type="input" id="outputText" value={this.state.inputText} />
        </div>
        <form>
          <div id="adjust">
            <input id="shiftValue" type="number" value="2" min="0" max="30" onkeydown="return false"
              oninput="slider.value=shiftValue.value" />&nbsp;
            <input id="slider" type="range" min="0" max="30" value="2"
              oninput="shiftValue.value=slider.value" />
            &nbsp;&nbsp;Shift Left:&nbsp;<input id="checkbox" type="checkbox" checked />
          </div>
        </form>
        <hr id="bottomLine" />
        <div id="container"></div>
      </div>
    );
  }
}

