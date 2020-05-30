import {createStore} from "redux";
import {Reducer, initialState} from "./reducer";

export const confiureStore = () => {
    const store = createStore(
        Reducer ,
        initialState
    );
    return store
}