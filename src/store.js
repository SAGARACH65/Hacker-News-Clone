import { createStore } from "redux";
import reducersagar from "./reducers";

const initialState = {};
export const store = createStore(reducersagar, initialState, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());
