const defaultCreatures = [
  { name: "Goblin", hp: 10 },
  { name: "Dragon", hp: 20 },
  { name: "Giant", hp: 40 },
];

const creaturesReducer = (state, action) => {
  const { type } = action;
  switch (type) {
    case "attack": {
      const { name, damage } = action.payload;
      const newState = [];
      state.forEach((creature) => {
        if (creature.name === name) {
          const hp = creature.hp - damage;
          if (hp > 0) {
            newState.push({ ...creature, hp });
          }
        } else {
          newState.push(creature);
        }
      });
      return newState;
    }
    case "add": {
      const { name, hp } = action.payload;
      return [...state, { name, hp }];
    }
    case "remove": {
      const { name } = action.payload;
      return state.filter((creature) => creature.name !== name);
    }
    default: {
      throw new Error(`Unhandled action: ${type}`);
    }
  }
};

const attack = (dispatch, name, damage) => {
  dispatch({ type: "attack", payload: { name, damage } });
};

const add = (dispatch, name, hp) => {
  dispatch({ type: "add", payload: { name, hp } });
};

const remove = (dispatch, name) => {
  dispatch({ type: "remove", payload: { name } });
};

export { defaultCreatures, creaturesReducer, attack, add, remove };
