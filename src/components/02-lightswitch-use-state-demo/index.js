/**
 * A demo of how to use the useState hook to keep of a boolean value (controlled via a form input
 * element).
 */

import React, { useState } from "react";
import "./index.css";

export default function LightSwitch() {
  const [isSwitchOn, setIsSwitchOn] = useState(false);

  const toggleSwitch = (e) => {
    setIsSwitchOn(!isSwitchOn);
  };

  const className = `lightswitch-container--${isSwitchOn ? "on" : "off"}`;

  return (
    <div className={className}>
      <h1>Lightswitch (Use State Demo)</h1>
      <label>
        <input
          type="checkbox"
          name="lightswitch"
          value={isSwitchOn}
          onChange={toggleSwitch}
        />
        Switch Me
      </label>
    </div>
  );
}
