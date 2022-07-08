const reducer = (state = [], action) => {
  switch (action.type) {
    case "GET_NEWS":
      return { ...state, loading: true };
    case "NEW_RECEIVED":
      return { ...state, payload: action.payload, loading: false };
    case "GET_POST":
      return { ...state, loading: true };
    case "POST_RECEIVED":
      return {...state, payload: action.payload, loading: false};
    default:
      return state;
  }
};
export default reducer;
