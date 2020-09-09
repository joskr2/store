// reducer es como enviamos una accion a la store(donde se guardan los datos globalemnte )
import { initialState } from "./State";
import { ADD_TO_BASKET } from "./ActionTypes";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_BASKET:
      return {
        ...state.basket,
        basket: [...state.basket, action.item],
      };
    default:
      return state;
  }
};

export default reducer;
