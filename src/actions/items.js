export const ADD_ITEM = "ADD_ITEM";
export const TOGGLE_CHECK = "TOGGLE_CHECK";
export const LOAD_ITEMS = "LOAD_ITEMS";

export const addItem = itemProps => ({
  type: ADD_ITEM,
  payload: {
    id: Date.now(),
    date: new Date(),
    title: "New item",
    ...itemProps
  }
});

export const toggleCheck = payload => ({
  type: TOGGLE_CHECK,
  payload
});

export const addItems = payload => ({
  type: LOAD_ITEMS,
  payload
});
