import { Type } from "./actionType";
export const initialState = { basket: [], user: null };

export const reducer = (state, action) => {
  switch (action.type) {
    case Type.ADD_TO_BASKET:
      const existingItem = state.basket.find(
        (item) => item.id === action.item.id
      );
      if (!existingItem) {
        return {
          ...state,
          basket: [...state.basket, { ...action.item, amount: 1 }],
        };
      } else {
        const updatedBasket = state.basket.map((item) => {
          return item.id === action.item.id
            ? { ...item, amount: item.amount + 1 }
            : item;
        });
        return { ...state, basket: updatedBasket }; // Return updated basket
      }

    case Type.REMOVE_FROM_BASKET: {
      const index = state.basket.findIndex((item) => item.id === action.id);
      let newBasket = [...state.basket];

      if (index >= 0) {
        if (newBasket[index].amount > 1) {
          // Decrease
          newBasket[index] = {
            ...newBasket[index],
            amount: newBasket[index].amount - 1,
          };
        } else {
          // Remove the item from the basket
          newBasket.splice(index, 1);
        }
      }
      return { ...state, basket: newBasket };
    }
    case Type.SET_USER:
      return { ...state, user: action.user };

    default: 
      return state;
  }
};
