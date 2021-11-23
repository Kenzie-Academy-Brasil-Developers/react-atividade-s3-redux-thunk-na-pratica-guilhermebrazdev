import { ADD_COMMENT } from "./actionTypes";

const initialState = { name: "kenzie", comments: [] };

const useReducer = (state = initialState, action) => {
  // console.log(action);
  switch (action.type) {
    case ADD_COMMENT:
      return action.updateUser;

    default:
      return state;
  }
};

export default useReducer;
