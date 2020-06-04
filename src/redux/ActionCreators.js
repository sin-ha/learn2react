import * as ActionTypes from "./ActionTypes"
import {DISHES} from "../shared/dishes";
import {serverUrl} from "../shared/serverUrl";


export const addComment =(dishId,rating,author,comment) =>(
    {
        type:ActionTypes.ADD_COMMENT,
        payload:{
            dishId:dishId,
            rating:rating,
            author:author,
            comment:comment
        }
    })

export const fetchDishes= ()=>(dispatch)=>{

    dispatch(dishesLoading(true));

    return fetch(serverUrl+"dishes")
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(dishes => dispatch(addDishes(dishes)))
        .catch(errMess => dispatch(dishesFailed(errMess.message)))
}

export const dishesLoading = () =>({
    type :ActionTypes.DISHES_LOADING
})
export const dishesFailed = (errMess) =>({
    type : ActionTypes.DISHES_FAILED,
    payload:errMess
})

export const addDishes = (dishes) => ({
    type :ActionTypes.ADD_DISHES,
    payload : dishes
})

export const fetchPromos= ()=>(dispatch)=>{

    dispatch(promosLoading(true));

    return fetch(serverUrl+"promotions")
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(promos => dispatch(addPromos(promos)))
        .catch(errMess => dispatch(promosFailed(errMess.message)))

}

export const promosLoading = () =>({
    type :ActionTypes.PROMOS_LOADING
})
export const promosFailed = (errMess) =>({
    type : ActionTypes.PROMOS_FAILED,
    payload:errMess
})

export const addPromos = (promos) => ({
    type :ActionTypes.ADD_PROMOS,
    payload : promos
})
export const fetchComments= ()=>(dispatch)=>{

    return fetch(serverUrl+"comments")
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    var error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                var errmess = new Error(error.message);
                throw errmess;
            })
        .then(response => response.json())
        .then(comments => dispatch(addComments(comments)))
        .catch(errMess => dispatch(commentsFailed(errMess.messages)))

}
export const commentsFailed = (errMess) =>({
    type : ActionTypes.COMMENTS_FAILED,
    payload:errMess
})

export const addComments = (comments) => ({
    type :ActionTypes.ADD_COMMENTS,
    payload : comments
})