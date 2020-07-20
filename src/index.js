import React from "react";
import ReactDOM from "react-dom";
import Countdown from "./Countdown";

import "./styles.css";

function App() {
  return (
    <div className="App">
      <Countdown />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
