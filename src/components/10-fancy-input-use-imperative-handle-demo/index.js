/**
 * An example of how to use the useImperativeHandle hook in order to expose a custom object as a
 * reference, e.g. in this case to expose a ref with a "focus" method.
 */

import React, { useRef } from "react";
import FancyTextInput from "./fancy-text-input";

const ExampleFancyInputUsage = () => {
  const ref = useRef();
  const focusInput = () => ref.current.focus();

  return (
    <div>
      <FancyTextInput
        ref={ref}
        name="username"
        placeholder="Enter a username..."
      />
      <button onClick={focusInput}>Focus on Input</button>
    </div>
  );
};

export default ExampleFancyInputUsage;
