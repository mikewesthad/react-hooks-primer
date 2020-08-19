import React, { useContext } from "react";
import themes from "./themes";
import ThemeContext from "./theme-context";

const ThemedHeader = ({ children, ...props }) => {
  const theme = useContext(ThemeContext);
  return (
    <h1 {...props} style={themes[theme]}>
      {children}
    </h1>
  );
};

export default ThemedHeader;
