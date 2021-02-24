import { combineReducers } from "redux";
import owners from "./owners.reducer"
import pets from "./pets.reducer"

const rootReducer = combineReducers({
  owners,
  pets,
});

export default rootReducer;