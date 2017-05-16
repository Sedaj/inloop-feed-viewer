import { LOAD_FEEDS, SET_COMMENTS, SET_CURRENT, REMOVE_COMMENT, SET_SELECTED } from '../constants';
import { IFeedReducer } from '../types';

const INITIAL_STATE: IFeedReducer = {
    feeds: [ ],
    selectedFeed: -1,
    currentFeed: {
        _id: "",
        id: "",
        person: {
            id: "",
            firstName: "",
            lastName: "",
            avatar: "",
            username: ""
        },
        text: "",
        likesCount: 0,
        commentsCount: 0,
        date: "",
        comments: [
            {
                person: {
                    firstName: "",
                    lastName: "",
                    date: "",
                    avatar: ""
                },
                _id: "",
                text: ""
            }
        ]
    }
};

function feedReducer(state = INITIAL_STATE, action = { type: '', payload: {} }) {

    switch(action.type){
        case LOAD_FEEDS:
            return (<any>Object).assign({}, state, {
                feeds: action.payload
            });
        case SET_CURRENT:
            return (<any>Object).assign({}, state, {
                currentFeed: action.payload
            });
        case SET_COMMENTS:
            return (<any>Object).assign({}, state, {
                currentFeed: (<any>Object).assign({}, state.currentFeed, {
                    comments: action.payload
                })
            });
        case REMOVE_COMMENT:
            let comments = state.currentFeed.comments.filter((comment: any) => {
                return comment._id != action.payload;
            });

            return (<any>Object).assign({}, state, {
                currentFeed: (<any>Object).assign({}, state.currentFeed, {
                    comments: comments
                })
            });
        case SET_SELECTED:
            return (<any>Object).assign({}, state, {
                selectedFeed: action.payload
            });
        default:
            return state;
    }
}

export default feedReducer;