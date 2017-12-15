import { ADD_ITEM, TOGGLE_CHECK, LOAD_ITEMS } from "../actions/items";

const DEFAULT_STATE = [];

const items = (state = DEFAULT_STATE, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [...state, action.payload];
    case LOAD_ITEMS:
      return [...state, ...action.payload];
    case TOGGLE_CHECK:
      return state.map(
        item =>
          item.id !== action.payload
            ? item
            : {
                ...item,
                done: !item.done
              }
      );
    default:
      return state;
  }
};

export default items;
