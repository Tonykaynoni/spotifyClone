import React from "react";
import ReactDOM from "react-dom";
import "./Styles/index.css";
import App from "./App";
import { DataLayer } from "./StateManager/DataLayer";
import reducer, { initialState } from "./Utils/reducer";

ReactDOM.render(
  <React.StrictMode>
    <DataLayer initialStateProps={initialState} reducer={reducer}>
      <App />
    </DataLayer>
  </React.StrictMode>,
  document.getElementById("root")
);
