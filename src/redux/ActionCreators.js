import * as ActionTypes from "./ActionTypes"
import {serverUrl} from "../shared/serverUrl";


export const addComment =(comment) =>(

    {
        type:ActionTypes.ADD_COMMENT,
        payload:{
            comment:comment
        }
    })
export const postComment =  (dishId,rating,author,comment) => (dispatch)=>{
    const newComment = {
        dishId: dishId,
        rating: rating,
        author: author,
        comment: comment
    };
    newComment.date = new Date().toISOString();

    return fetch(serverUrl + 'comments', {
        method: "POST",
        body: JSON.stringify(newComment),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
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
                throw error;
            })
        .then(response => response.json())
        .then(response => dispatch(addComment(response)))
        .catch(error =>  { console.log('post comments', error.message); alert('Your comment could not be posted\nError: '+error.message); });
};

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

export const fetchLeaders= ()=>(dispatch)=>{

    dispatch(leadersLoading(true));

    return fetch(serverUrl+"leaders")
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
        .then(leaders => dispatch(addLeaders(leaders)))
        .catch(errMess => dispatch(leadersFailed(errMess.message)))

}

export const leadersLoading = () =>({
    type :ActionTypes.LEADERS_LOADING
})
export const leadersFailed = (errMess) =>({
    type : ActionTypes.LEADERS_FAILED,
    payload:errMess
})

export const addLeaders = (leaders) => ({
    type :ActionTypes.ADD_LEADERS,
    payload : leaders
})

export const postFeedback = (value)=> (dispatch) =>{
    const newFeedback = {
        firstname: value.firstname,
        lastname: value.lastname,
        telnum: value.telnum,
        email: value.email,
        agree: value.age,
        contactType: value.contactType,
        message: value.message,
    }
    newFeedback.date = new Date().toISOString();
    return fetch(serverUrl + 'feedback', {
        method: "POST",
        body: JSON.stringify(newFeedback),
        headers: {
            "Content-Type": "application/json"
        },
        credentials: "same-origin"
    })
        .then(response => {
                if (response.ok) {
                    return response;
                } else {
                    let error = new Error('Error ' + response.status + ': ' + response.statusText);
                    error.response = response;
                    throw error;
                }
            },
            error => {
                throw error;
            })
        .then(response => response.json())
        .then(response=> alert(JSON.stringify(response)))
        .catch(error =>  { console.log('Form Feedback', error.message); alert('Your ffeedback could not be submitted\nError: '+error.message); });
}