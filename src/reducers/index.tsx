// import { addItem } from "../containers/form/actions";
// import { ADD_ITEM } from "../constants/index";
// import { ApplicationState } from "../types";

import { combineReducers } from "redux";
import { formReducer, FormReducerState } from "../containers/form/reducer";

export interface ApplicationState {
  formReducer: FormReducerState;
}

export const appReducers = combineReducers<ApplicationState>({
  formReducer
});

export default appReducers;
