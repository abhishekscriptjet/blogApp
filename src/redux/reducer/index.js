import { combineReducers } from "redux";
import userReducer from "./userReducer";
import { alertReducer } from "./alertReducer";

const reducers = combineReducers({
  user: userReducer,
  alert: alertReducer,
});
export default reducers;
