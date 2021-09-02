import React from "react";
import "./styles.css";

export default class CanvasAnimation extends React.Component {
  constructor(props) {
    super(props);
    this.myCanvas = React.createRef();
    this.handleStart = this.handleStart.bind(this);
    this.handleStop = this.handleStop.bind(this);
    this.handleCheck = this.handleCheck.bind(this);
    this.paint = this.paint.bind(this);
    this.components = [
      new rotatingSquare(30, 30, "red", 80, 75),
      new rotatingSquare(30, 30, "green", 200, 275, 5)
    ];
  }
  componentDidMount() {
    this.canvas = this.myCanvas.current;
  }
  handleStart() {
    if (!this.isChecked) {
      this.interval = window.setInterval(this.paint, 20);
    } else {
      this.paint();
    }
  }
  handleStop() {
    if (!this.isChecked) {
      window.clearInterval(this.interval);
    } else {
      window.cancelAnimationFrame(this.requestID);
    }
  }
  handleCheck(e) {
    this.handleStop();
    this.isChecked = e.target.checked;
  }
  paint() {
    const { canvas } = this;
    const context = canvas.getContext("2d");
    // Use canvas context to clear the entire canvas
    context.clearRect(0, 0, canvas.width, canvas.height);
    // Call each drawing component update
    this.components.forEach((component) => component.update(context));
    if (this.isChecked) {
      this.requestID = window.requestAnimationFrame(this.paint);
    }
  }
  render() {
    return (
      <div className="App">
        <h1>Animation</h1>
        <canvas
          ref={this.myCanvas}
          style={{ border: "1px solid red" }}
          width="400"
          height="300"
        >
          Canvas not supported
        </canvas>
        <br />
        <button onClick={this.handleStart}>Start</button>&nbsp;
        <button onClick={this.handleStop}>Stop</button>
        <br />
        <input
          type="checkbox"
          onChange={this.handleCheck}
          checked={this.isChecked}
        />
        Use Request Animation Frame
      </div>
    );
  }
}

// Rotating square class
class rotatingSquare {
  constructor(width, height, color, x, y, rate = 1) {
    this.width = width;
    this.height = height;
    this.color = color;
    this.x = x;
    this.y = y;
    this.rate = rate;
    this.angle = 0;
  }
  update(context) {
    context.save();
    context.translate(this.x, this.y);
    context.rotate(this.angle);
    context.fillStyle = this.color;
    context.fillRect(
      this.width / -2,
      this.height / -2,
      this.width,
      this.height
    );
    context.restore();
    this.angle += (this.rate * Math.PI) / 180; // Uses radians for the angle
  }
}
