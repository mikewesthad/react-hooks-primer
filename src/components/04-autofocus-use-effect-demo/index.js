/**
 * useEffect (and useRef) to autofocus a text input on mount.
 */

import React, { useRef, useState, useEffect } from "react";

const AutoFocusedInput = () => {
  const textInput = useRef(null);
  const [text, setText] = useState("");

  // This depends on textInput and will only re-run when textInput changes, which only happens on
  // mount in this example.
  useEffect(() => {
    textInput.current.focus();
  }, [textInput]);

  return (
    <div>
      <h2>Auto-focused Input</h2>
      <input
        type="text"
        value={text}
        onChange={(e) => setText(e.target.value)}
        ref={textInput}
      />
    </div>
  );
};

export default AutoFocusedInput;
