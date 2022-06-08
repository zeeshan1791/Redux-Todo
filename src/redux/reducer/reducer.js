import  todoReducer  from "./todoReducer";
import { combineReducers } from "redux";

const rootReducers = combineReducers({
    todo: todoReducer
});

export default rootReducers;
