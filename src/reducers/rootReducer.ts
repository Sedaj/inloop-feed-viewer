import { combineReducers } from "redux";
import feedReducer from './feedReducer';
import { combineForms } from 'react-redux-form';

let comment = {
    firstName: "",
    lastName: "",
    commentText: ""
};

const rootReducer = combineReducers({
    feedReducer,
    commentForm: combineForms({
        comment: comment
    }, 'commentForm' )
});

export default rootReducer;