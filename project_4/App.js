import React, { useState } from "react";
import { DataGraph } from "../DataGraph.js";
import { DataList } from "../DataList.js";
import { DataInput } from "../DataInput.js";
import "./styles.css";

export default function App() {
  return (
    <div className="grid-container">
      <h1 className="title">Weekly Hi-Lo Temperatures</h1>
      <div className="DataList">
        <DataList id="data" />
      </div>
      <div className="DataInput">
        <DataInput />
      </div>
      <div className="DataGraph">
        <hr />
        <DataGraph />
      </div>
    </div>
  );
}
