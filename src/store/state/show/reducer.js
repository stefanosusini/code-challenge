import { types } from "./actions";

export const initialValue = {
  results: null
};

export default (state = initialValue, action) => {
  switch (action.type) {
    case types.SEARCH_SUCCESS:
      return {
        ...state,
        results: action.payload
      };
  }
  return state;
};
