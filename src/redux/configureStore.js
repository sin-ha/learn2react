import {combineReducers, createStore ,applyMiddleware,} from "redux";
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";

export const confiureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments :Comments,
            leaders :Leaders,
            promotions : Promotions
        }),
        applyMiddleware(thunk,logger)
    );
    return store
}