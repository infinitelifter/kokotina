import { ADD_ITEM, REMOVE_ITEM } from "../../constants";

export const addItem = (payload: string) => ({
  type: ADD_ITEM,
  payload: payload
});

export const removeItem = (payload: string) => ({
  type: REMOVE_ITEM,
  payload: payload
});
