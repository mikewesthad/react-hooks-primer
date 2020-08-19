/**
 * An example of how to use the useReducer hook to maintain more complex state in an application.
 */

import React, { useReducer, useState } from "react";
import {
  creaturesReducer,
  defaultCreatures,
  attack,
  remove,
  add,
} from "./creatures-reducer";

export default function Creatures() {
  const [state, dispatch] = useReducer(creaturesReducer, defaultCreatures);
  const [newCreature, setNewCreature] = useState({ name: "", hp: 0 });
  const setNewName = (name) => setNewCreature({ ...newCreature, name });
  const setNewHp = (hp) => setNewCreature({ ...newCreature, hp });
  const onNewNameChange = (e) => setNewName(e.target.value);
  const onNewHpChange = (e) => setNewHp(e.target.value);
  const createCreature = () => {
    if (newCreature.name !== "" && newCreature.hp > 0) {
      add(dispatch, newCreature.name, newCreature.hp);
      setNewCreature({ name: "", hp: 0 });
    }
  };

  return (
    <div>
      <h1>Creatures (Use Reducer Demo)</h1>
      <div>
        <input
          type="text"
          value={newCreature.name}
          onChange={onNewNameChange}
        />
        <input type="number" value={newCreature.hp} onChange={onNewHpChange} />
        <button onClick={createCreature}>Create Creature</button>
      </div>
      {state.map(({ name, hp }, i) => (
        <div key={i}>
          <div>
            {name}: {hp}
          </div>
          <div>
            <button onClick={() => attack(dispatch, name, 1)}>Damage 1</button>
            <button onClick={() => attack(dispatch, name, 5)}>Damage 5</button>
            <button onClick={() => attack(dispatch, name, 10)}>
              Damage 10
            </button>
            <button onClick={() => remove(dispatch, name)}>Remove</button>
          </div>
        </div>
      ))}
    </div>
  );
}
