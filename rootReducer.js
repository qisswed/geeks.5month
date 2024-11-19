import { combineReducers } from "redux";
import characterReducer from "./CharacterReducer";

const rootReducer = combineReducers({
    characters: characterReducer,
});

export default rootReducer;