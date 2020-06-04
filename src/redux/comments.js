import * as ActionTypes from "./ActionTypes"

export const Comments =(state = {
    errMess: null,
    comments:[]
    } ,action)=>{
    switch (action.type) {
        case ActionTypes.ADD_COMMENTS:
            return {...state,errMess: null ,comments: action.payload}
        case ActionTypes.COMMENTS_FAILED:
            return {...state,errMess :action.payload, comments: []}

        case ActionTypes.ADD_COMMENT:
            let comment =action.payload;
            console.log(comment)
            return {...state,comments:state.comments.concat(comment.comment)};

        default:
            return state;
    }
}