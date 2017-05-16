import * as React from 'react';
import { connect } from 'react-redux';
import MainComponent from './MainComponent';
import { IDispatchEvent, IStore, IFeedDetail, IListItem, IComment, IStoreDispatch } from '../types';
import { setCurrentFeed, loadFeeds, setFeedComments, removeFeedComment, setSelectedFeed } from '../actions/feed';

const mapStateToProps = function(state: IStore) {
    return {
               feeds: state.feedReducer.feeds,
         currentFeed: state.feedReducer.currentFeed,
        selectedFeed: state.feedReducer.selectedFeed
	};
};

const mapDispatchToProps: IStoreDispatch = (dispatch: IDispatchEvent) => {
    return {
           setCurrentFeed:  (currentFeed: IFeedDetail) => dispatch(setCurrentFeed(currentFeed)),
                loadFeeds:   (feeds: Array<IListItem>) => dispatch(loadFeeds(feeds)),
        removeFeedComment:         (commendId: string) => dispatch(removeFeedComment(commendId)),
          setFeedComments: (comments: Array<IComment>) => dispatch(setFeedComments(comments)),
          setSelectedFeed:         (feedIndex: number) => dispatch(setSelectedFeed(feedIndex))
    }
};

const ReduxDistributor = connect(mapStateToProps, mapDispatchToProps)(MainComponent);

export default ReduxDistributor