import { LOAD_FEEDS, SET_CURRENT, SET_COMMENTS, REMOVE_COMMENT, SET_SELECTED } from '../constants';
import { IFeedDetail, IComment, IListItem } from '../types';

export function loadFeeds(data: Array<IListItem>) {
    return {
        type: LOAD_FEEDS,
        payload: data
    };
}

export function setCurrentFeed(feed: IFeedDetail) {
    return {
        type: SET_CURRENT,
        payload: feed
    };
}

export function setFeedComments(comments: Array<IComment>){
    return {
        type: SET_COMMENTS,
        payload: comments
    }
}

export function removeFeedComment(commentId: string){
    return {
        type: REMOVE_COMMENT,
        payload: commentId
    }
}

export function setSelectedFeed(feedIndex: number){
    return {
        type: SET_SELECTED,
        payload: feedIndex
    }
}