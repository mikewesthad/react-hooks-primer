/**
 * A demo of how to use the useState hook to keep track of the number of times the user can clicked
 * a button.
 */

import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const incrementCount = () => setCount(count + 1);

  return (
    <div>
      <h1>Counter (Use State Demo)</h1>
      <p>You {count === 0 ? "haven't clicked" : `clicked ${count} times`}</p>
      <button onClick={incrementCount}>Click me</button>
    </div>
  );
}
