import { createStore, applyMiddleware } from "redux";
import rootReducers from "./reducer/reducer";
import thunk from 'redux-thunk'
import {composeWithDevTools} from 'redux-devtools-extension'

const initialValue = {

}

const middleware = [thunk]

export const store = createStore(rootReducers, initialValue, composeWithDevTools(applyMiddleware(...middleware)));

export default store;
