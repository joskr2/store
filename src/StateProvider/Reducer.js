// reducer es como enviamos una accion a la store(donde se guardan los datos globalemnte )
import { initialState } from "./State";
import { ADD_TO_BASKET, REMOVE_FROM_BASKET, SET_USER } from "./ActionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state.basket,
        basket: [...state.basket, action.item],
        user: action.user
      };
    case REMOVE_FROM_BASKET:
      const index = state.basket.findIndex(
        (basketIndex) => basketIndex.id === action.id
      );
      let newBasket = [...state.basket];
      if (index >= 0) {
        newBasket.splice(index, 1);
      } else {
        console.warn(
          "Cant remove product ",
          action.id,
          "as its not in the basket"
        );
      }
      return {
        ...state,
        basket: newBasket,
      };
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    default:
      return state;
  }
};

export default reducer;
