import { currentUser } from "../redux/reducers/currentUser";
import counter from "../redux/reducers/counter";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  currentUser,
  counter,
});

export default rootReducer;
