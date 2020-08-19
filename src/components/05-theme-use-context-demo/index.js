/**
 * useContext to keep track of the current theme in nested components.
 */

import React, { useState } from "react";
import ThemedHeader from "./themed-header";
import ThemedButton from "./themed-button";
import ThemeContext from "./theme-context";

const ThemedApp = () => {
  const [theme, setTheme] = useState("light");
  const toggleTheme = () => setTheme(theme === "light" ? "dark" : "light");

  return (
    <ThemeContext.Provider value={theme}>
      <ThemedHeader>Theming (useContext demo)</ThemedHeader>
      <ThemedButton onClick={toggleTheme}>Toggle Theme</ThemedButton>
    </ThemeContext.Provider>
  );
};

export default ThemedApp;
