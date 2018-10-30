import { ADD_ITEM } from "../../constants";

export const addItem = (payload: string) => ({
  type: ADD_ITEM,
  payload: payload
});
