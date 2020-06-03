import {combineReducers, createStore ,applyMiddleware,} from "redux";
import {Dishes} from "./dishes";
import {Comments} from "./comments";
import {Leaders} from "./leaders";
import {Promotions} from "./promotions";
import thunk from "redux-thunk";
import logger from "redux-logger";
import {createForms} from "react-redux-form";
import {initialFeedback} from "./contactForm";

export const confiureStore = () => {
    const store = createStore(
        combineReducers({
            dishes : Dishes,
            comments :Comments,
            leaders :Leaders,
            promotions : Promotions,
            ...createForms({
                feedback : initialFeedback
            })
        }),
        applyMiddleware(thunk,logger)
    );
    return store
}