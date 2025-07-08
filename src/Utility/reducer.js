import { Type } from "./actionType";
export const intialState = { basket: [] };
export const reducer = (state, action) => {
  switch (action.Type) {
    case Type.ADD_TO_BASKET:
      return { ...state, basket: [...state.basket, action.item] };
    default:
      return state;
  }
};
