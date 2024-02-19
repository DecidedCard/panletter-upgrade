import { createStore, combineReducers } from "redux";
import letters from "../modules/letters";
import { devToolsEnhancer } from "redux-devtools-extension";

const rootReducer = combineReducers({
  letters,
});

const store = createStore(rootReducer, devToolsEnhancer());

export default store;
