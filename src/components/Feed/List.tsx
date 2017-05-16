import * as React from 'react'
import axios from 'axios';
import { IReduxStoreComponent, IListItem, IResponseGetData, IResponseGetSingleData } from '../../types';

class List extends React.Component<IReduxStoreComponent, {}>{

    changeCurrentFeed(feed: string, feedIndex: number){
        let that = this;
        axios.get('https://inloop-webproject.herokuapp.com/api/feeds/' + feed)
            .then((response: IResponseGetSingleData) => {
                that.props.redux.setSelectedFeed(feedIndex);
                that.props.redux.setCurrentFeed(response.data);
            })
    }

    componentDidMount(){
        let that = this;
        axios.get('https://inloop-webproject.herokuapp.com/api/feeds')
            .then((response: IResponseGetData) => {
                that.props.redux.loadFeeds(response.data);
            })
    }

    render(){
        let that = this;

        return (
            <div className="feed-list">
                {that.props.redux.feeds.map((item: IListItem,i:number) =>
                    <div className={'feed-item row ' + ( i == that.props.redux.selectedFeed ? 'feed-active' : '' ) } key={ i }>
                        <div className="feed-item__picture column-3">
                            <img src={ item.person.avatar } />
                        </div>
                        <div className="feed-item__information column-9">
                            <div className="row">
                                <div className="column-8">
                                    <h3 className="feed-item__person-name">{ item.person.firstName } { item.person.lastName }</h3>
                                </div>
                                <div className="column-4">
                                    <a className="feed-item__detail-btn btn btn--primary" onClick={ () => that.changeCurrentFeed(item._id,i ) } >
                                        DETAIL
                                    </a>
                                </div>
                            </div>
                            <div className="row">
                                <div className="feed-item__timestamp">{ item.date }</div>
                            </div>
                            <p className="feed-item__text small">
                                { item.text }
                            </p>
                        </div>
                    </div>
                )}
            </div>
        )
    }
}

export default List;