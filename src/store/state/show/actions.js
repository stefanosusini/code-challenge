export const types = {
  SEARCH_START: "SEARCH-START",
  SEARCH_SUCCESS: "SEARCH-SUCCESS",
  SEARCH_ERROR: "SEARCH-ERROR"
};

export const searchStart = query => ({
  type: types.SEARCH_START,
  payload: query
});
export const searchSuccess = results => ({
  type: types.SEARCH_SUCCESS,
  payload: results
});
export const searchError = error => ({
  type: types.SEARCH_ERROR,
  payload: error
});

export const actions = { searchStart, searchSuccess, searchError };
