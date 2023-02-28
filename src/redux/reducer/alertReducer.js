
export const alertReducer = (state = null, action) => {
  if (action.type === "ALERT") {
    return [...state, action.payload];
  } else {
    return state;
  }
};
