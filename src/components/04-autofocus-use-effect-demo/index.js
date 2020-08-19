/**
 * A demo of how to use the useEffect hook (combined with useRef) to autofocus a text input when the
 * component is mounted.
 */

import React, { useRef, useState, useEffect } from "react";

const AutoFocusedInput = () => {
  const textInput = useRef(null);
  const [text, setText] = useState("");
  const onTextChange = (e) => setText(e.target.value);

  // This depends on textInput and will only re-run when textInput changes, which only happens on
  // mount in this example.
  useEffect(() => {
    textInput.current.focus();
  }, [textInput]);

  return (
    <div>
      <h1>Auto-focused Input</h1>
      <input type="text" value={text} onChange={onTextChange} ref={textInput} />
    </div>
  );
};

export default AutoFocusedInput;
