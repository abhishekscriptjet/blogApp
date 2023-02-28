export const userData = (action) => {
  return (dispatch) => {
    dispatch({
      type: "ADD",
      payload: action,
    });
  };
};


export const alert = (action) => {
  return (dispatch) => {
    dispatch({
      type: "ALERT",
      payload: action,
    });
  };
};
