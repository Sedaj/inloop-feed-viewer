import * as React from 'react';
import { Provider, Store } from 'react-redux';
import ReduxDistributor from './components/ReduxDistributor';

class Director extends React.Component<{ store: Store<{}> }, {}> {
    render() {
        return (
            <Provider store={ this.props.store }>
                <ReduxDistributor />
            </Provider>
        )
    }
}

export default Director;