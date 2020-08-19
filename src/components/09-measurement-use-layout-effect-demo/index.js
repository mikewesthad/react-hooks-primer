/**
 * An example of how to use the useLayoutEffect hook to measure a DOM element. useLayoutEffect and
 * useEffect are similar:
 * - useEffect: runs after render (after layout and paint), so that it doesn't block the browser
 *   from rendering.
 * - useLayoutEffect: runs after layout but before painting, so it gives you a chance to read the
 *   DOM and trigger re-renders/mutations.
 */

import React, { useState } from "react";
import { useRef } from "react";
import { useLayoutEffect } from "react";

const MeasurementBox = () => {
  const ref = useRef();
  const [bounds, setBounds] = useState({
    top: 0,
    left: 0,
    width: 0,
    height: 0,
  });

  const updateBounds = () => {
    const box = ref.current.getBoundingClientRect();
    setBounds(box);
  };

  useLayoutEffect(() => {
    updateBounds();
    window.addEventListener("resize", updateBounds);
    const unsubscribe = () => {
      window.removeEventListener("resize", updateBounds);
    };
    return unsubscribe;
  }, [ref]);

  const { top, left, width, height } = bounds;
  const wrapperStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
  };
  const boxStyle = {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    flexDirection: "column",
    padding: "1rem",
    border: "1px solid black",
    width: 200,
    height: 200,
  };

  return (
    <div style={wrapperStyle}>
      <h2>Measured Box (useLayoutEffect Demo)</h2>
      <div ref={ref} style={boxStyle}>
        <div>
          Position: {left.toFixed(1)}px, {top.toFixed(1)}px
        </div>
        <div>
          Size: {width.toFixed(1)}px, {height.toFixed(1)}px
        </div>
      </div>
    </div>
  );
};

export default MeasurementBox;
