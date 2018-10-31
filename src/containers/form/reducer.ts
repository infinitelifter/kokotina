import { Reducer } from "redux";
import { ADD_ITEM, REMOVE_ITEM } from "../../constants";

export interface FormReducerState {
  items: string[];
}

export const initialState = {
  items: []
};

export const formReducer: Reducer<FormReducerState> = (
  state = initialState,
  action
): FormReducerState => {
  switch (action.type) {
    case ADD_ITEM:
      return {
        ...state,
        items: [...state.items, action.payload].sort(function(x, y) {
          if (x < y) {
            return -1;
          }
          if (x > y) {
            return 1;
          }
          return 0;
        })
      };
    case REMOVE_ITEM:
      return {
        ...state,
        items: state.items.filter(item => item !== action.payload)
      };

    default:
      return state;
  }
};
