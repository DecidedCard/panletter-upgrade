// import { createStore, combineReducers } from "redux";
import letters from "../modules/letterSlice";
// import { devToolsEnhancer } from "redux-devtools-extension";
import { configureStore } from "@reduxjs/toolkit";
import user from "../modules/userSlice";

// const rootReducer = combineReducers({
//   letters,
// });

// const store = createStore(rootReducer, devToolsEnhancer());
const store = configureStore({
  reducer: {
    letters,
    user,
  },
});

export default store;
