import React, { useContext } from "react";
import themes from "./themes";
import ThemeContext from "./theme-context";

const ThemedButton = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <button {...props} style={themes[theme]}>
      {children}
    </button>
  );
};

export default ThemedButton;
