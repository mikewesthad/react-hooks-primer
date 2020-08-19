import React from "react";
import Counter from "./01-counter-use-state-demo/";
import LightSwitch from "./02-lightswitch-use-state-demo/";
import FocusedInput from "./03-focus-use-ref-demo";
import ThemedApp from "./04-theme-use-context-demo";

function App() {
  return (
    <div className="app-container">
      <h1>Hooks Demos</h1>
      <Counter />
      <LightSwitch />
      <FocusedInput />
      <ThemedApp />
    </div>
  );
}

export default App;
