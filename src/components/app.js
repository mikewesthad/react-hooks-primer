import React from "react";
import Counter from "./01-counter-use-state-demo/";
import LightSwitch from "./02-lightswitch-use-state-demo/";
import FocusedInput from "./03-focus-use-ref-demo";

function App() {
  return (
    <div className="app-container">
      <h1>Hooks Demos</h1>
      <Counter />
      <LightSwitch />
      <FocusedInput />
    </div>
  );
}

export default App;
