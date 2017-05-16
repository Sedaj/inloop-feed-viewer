export interface IPostComment {
    data: Array<IComment>,
    status: number,
    statusText: string,
    headers: {
        'content-type': string
    },
    config: {
        data: string,
        headers: {
            Accept: string,
            'Content-Type': string
        },
        maxContentLength: number,
        method: string,
        timeout: number,
        transformRequest: any,
        transformResponse: any,
        url: string,
        validateStatus: any,
        xsrfCookieName: string,
        xsrfHeaderName: string
    }
}

export interface ICommentFormState {
    buttonLabel: string
}

export interface IComment {
    _id: string,
    person: {
        avatar: string,
        date: string,
        firstName: string,
        lastName: string
    },
    text: string
}

export interface ICommentSubmit {
    text: string,
    person: {
        firstName: string,
        lastName: string
    }
}

export interface IFeedDetail {
    _id: string,
    id: string,
    person: {
        avatar: string,
        firstName: string,
        lastName: string,
        id: string,
        username: string
    },
    likesCount: number,
    commentsCount: number,
    text: string,
    date: string,
    comments: Array<IComment>
}

interface IResponseBase {
    status: number,
    statusText: string,
    headers: {},
    config: {
        headers: { Accept: string },
        maxContentLength: number,
        method: string,
        timeout: number,
        transformRequest: any,
        transformResponse: any,
        url: string,
        validateStatus: any,
        xsrfCookieName: string,
        xsrfHeaderName: string
    }
    request: XMLHttpRequest
}

export interface IResponseGetData extends IResponseBase {
    data: Array<IListItem>
}

export interface IResponseGetSingleData extends IResponseBase {
    data: IFeedDetail
}

export interface IListItem {
    _id: string,
    date: string,
    person: {
        avatar: string,
        firstName: string,
        id: string,
        lastName: string,
        username: string
    }
    text: string
}

export interface IDispatchEvent {
    (event: { type: string }): { type: string };
}

export interface ICommentForm {
    comment: IComment,
    forms: {
        $form: {
            errors: {},
            focus: boolean,
            initialValue: {
                comment: IComment
            },
            intents: {},
            model: string,
            pending: boolean,
            pristine: boolean,
            retouched: boolean,
            submitFailed: boolean,
            submitted: boolean,
            touched: boolean,
            valid: boolean,
            validated: boolean,
            validating: boolean,
            validity: {},
            value: {
                comment: IComment
            }
        },
        comment: IComment
    }
}

export interface IFeedReducer {
    currentFeed: IFeedDetail,
    feeds: Array<IListItem>,
    selectedFeed: number
}

export interface IStore {
    feedReducer: IFeedReducer,
    commentForm: ICommentForm
}

export interface IStoreDispatchReturn {
    setCurrentFeed : (currentFeed: IFeedDetail) => void,
    loadFeeds: (feeds: Array<IListItem>) => void,
    removeFeedComment: (commendId: string) => void,
    setFeedComments: (comments: Array<IComment>) => void,
    setSelectedFeed: (feedIndex: number) => void
}

export interface IStoreDispatch {
    ( event: IDispatchEvent ): IStoreDispatchReturn;
}

export interface IReduxStore extends IStoreDispatchReturn, IFeedReducer {}

export interface IReduxStoreComponent {
    redux: IReduxStore
}

export interface IStatelessComponent extends React.StatelessComponent<React.HTMLProps<JSX.Element>> { }

export interface IStatelessComponentProps {
    props: React.HTMLProps<JSX.Element>
}