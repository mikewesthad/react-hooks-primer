/**
 * A demo of how to use the useEffect hook to subscribe (and unsubscribe) a resize listener on
 * mount/unmount.
 */

import React, { useState, useEffect } from "react";

const WindowSize = () => {
  const [width, setWidth] = useState(0);
  const [height, setHeight] = useState(0);

  const onResize = () => {
    setWidth(window.innerWidth);
    setHeight(window.innerHeight);
  };

  // Because we pass in an empty array of dependencies, this will only run when mounting and the
  // unsubscribe function will only run when unmounting.
  useEffect(() => {
    onResize();
    window.addEventListener("resize", onResize);

    const unsubscribe = () => {
      window.removeEventListener("resize", onResize);
    };

    return unsubscribe;
  }, []);

  return (
    <div>
      <h1>Window Info (Use Effect Demo)</h1>
      <div>
        {width}px by {height}px
      </div>
    </div>
  );
};

export default WindowSize;
