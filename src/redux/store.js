import { createStore, applyMiddleware, combineReducers } from "redux";
import { thunk }from "redux-thunk";
import lionReducer from "./reducers/lionReducer";

const rootReducer = combineReducers({
    lionReducer,
});

const store = createStore(rootReducer, (applyMiddleware(thunk)));

export default store;
