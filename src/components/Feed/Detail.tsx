import * as React from 'react';
import axios from 'axios';
import CommentForm from "./CommentForm";
import { IReduxStoreComponent, IFeedDetail } from '../../types';

class Detail extends React.Component<IReduxStoreComponent, {}>{

    removeComment(feedId: string, commentId: string){
        let that = this;

        that.props.redux.removeFeedComment(commentId);
        axios.delete('https://inloop-webproject.herokuapp.com/api/feeds/' + feedId + '/comments/' + commentId );
    }

    render(){
        let that = this;
        const currentFeed:IFeedDetail = that.props.redux.currentFeed;

        return (
            <div className="item-detail-wrapper">
                { currentFeed.person.firstName.length > 0 &&
                    <div className="item-detail">
                        <div className="item-detail__avatar">
                            { currentFeed.person && currentFeed.person.avatar ? <img src={ currentFeed.person.avatar } /> : null }
                        </div>
                        <div className="item-detail__name">
                            <h2>
                                { currentFeed.person.firstName + " " + currentFeed.person.lastName }
                            </h2>
                        </div>
                        <div className="item-detail__username">
                            { currentFeed.person.username }
                        </div>
                        <p className="item-detail__text small">
                            { currentFeed.text }
                        </p>
                        <div className="item-detail__lac">
                            <div className="item-detail__social item-detail__social--likes">
                                Likes: { currentFeed.likesCount }
                            </div>
                            <div className="item-detail__social item-detail__social--comments">
                                Comments: { currentFeed.commentsCount }
                            </div>
                        </div>
                        <CommentForm redux={that.props.redux} />
                        <div className="item-detail__comments">
                            {currentFeed.comments.map((comment,i) =>
                                <div className="item-detail__single-comment" key={i}>
                                    <div className="row">
                                        <div className="column-2 item-detail__single-comment-avatar">
                                            <img src={ comment.person.avatar } />
                                        </div>
                                        <div className="column-10">
                                            <div className="row">
                                                <div className="column-10 item-detail__single-comment-person">
                                                    <div className="item-detail__single-comment-name">
                                                        <h4>{ comment.person.firstName } { comment.person.lastName }</h4>
                                                    </div>
                                                    <div className="item-detail__single-comment-date">
                                                        { comment.person.date }
                                                    </div>
                                                </div>
                                                <div className="column-2">
                                                    <a className="item-detail__single-comment-delete btn btn--primary btn--primary--remove-comment" onClick={() => { that.removeComment(currentFeed._id, comment._id) } }>
                                                        x
                                                    </a>
                                                </div>
                                            </div>
                                            <div className="item-detail__single-comment-text row small">
                                                { comment.text }
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                }
            </div>
        )
    }
}

export default Detail;