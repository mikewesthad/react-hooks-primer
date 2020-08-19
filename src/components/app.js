import React from "react";
import Counter from "./01-counter-use-state-demo/";
import LightSwitch from "./02-lightswitch-use-state-demo/";
import FocusedInput from "./03-focus-use-ref-demo";
import AutoFocusedInput from "./04-autofocus-use-effect-demo";
import ThemedApp from "./05-theme-use-context-demo";
import WindowSize from "./06-window-size-use-effect-demo";
import PokemonDemo from "./07-pokemon-api-custom-hook-demo";

function App() {
  return (
    <div className="app-container">
      <h1>Hooks Demos</h1>
      <Counter />
      <LightSwitch />
      <FocusedInput />
      <AutoFocusedInput />
      <ThemedApp />
      <WindowSize />
      <PokemonDemo />
    </div>
  );
}

export default App;
