import * as React from 'react';
import { Control, Form } from 'react-redux-form';
import axios from 'axios';
import { IReduxStoreComponent, ICommentFormState, IPostComment, ICommentSubmit } from '../../types';

const BUTTON_LABEL_ADD = "ADD COMMENT";
const BUTTON_LABEL_ADDING = "...";
const BUTTON_LABEL_ADDED = "ADDED";

class CommentForm extends React.Component<IReduxStoreComponent, ICommentFormState> {

    public state: ICommentFormState;

    constructor(props: IReduxStoreComponent){
        super(props);
        this.state = {
            buttonLabel: BUTTON_LABEL_ADD
        }
    }

    handleCommentFormSubmit(commentForm: any){
        let that = this;

        that.setState({ buttonLabel: BUTTON_LABEL_ADDING});
        let { firstName, lastName, commentText } = commentForm.comment;

        let config = {
            headers: {
                'Content-Type': 'application/json'
            }
        };

        let data: ICommentSubmit = {
            text: commentText,
            person: {
                firstName: firstName,
                lastName: lastName
            }
        };

        axios.post('https://inloop-webproject.herokuapp.com/api/feeds/' + this.props.redux.currentFeed._id + '/comments', JSON.stringify(data), config )
            .then((response: IPostComment) => {
                 let comments = response.data;
                 that.props.redux.setFeedComments(comments);
                 that.setState({ buttonLabel: BUTTON_LABEL_ADDED});
                 setTimeout(() => that.setState({ buttonLabel: BUTTON_LABEL_ADD }), 1000 );
             })
    }

    render(){
        let that = this;

        return (
            <Form model="commentForm"
                  onSubmit={(commentForm) => this.handleCommentFormSubmit(commentForm) }
                  className="item-detail__submit-comment">
                <Control.text
                    model="commentForm.comment.firstName"
                    className="input input--text"
                    placeholder="First Name"
                    required
                />
                <Control.text
                    model="commentForm.comment.lastName"
                    className="input input--text"
                    placeholder="Last Name"
                    required
                />
                <Control.textarea
                    model="commentForm.comment.commentText"
                    className="input input--textarea"
                    placeholder="Text of a comment"
                    required
                />
                <button className="btn btn--primary" type="submit">
                    { that.state.buttonLabel }
                </button>
            </Form>
        )
    }
}

export default CommentForm;