/**
 * A demo of the useRef hook that shows how to get a reference to an HTML input and focus on it
 * whenever a button is clicked.
 */

import React, { useRef, useState } from "react";

const FocusedInput = () => {
  const textInput = useRef(null);
  const [text, setText] = useState("");
  const focusOnText = () => textInput.current.focus();
  const onTextChange = (e) => setText(e.target.value);

  return (
    <div>
      <h1>Focused Input (Use Ref Demo)</h1>
      <button onClick={focusOnText}>Focus on the input!</button>
      <input type="text" value={text} onChange={onTextChange} ref={textInput} />
    </div>
  );
};

export default FocusedInput;
