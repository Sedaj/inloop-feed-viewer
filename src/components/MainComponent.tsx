import * as React from 'react';
import Header from './Header/Header';
import Detail from './Feed/Detail';
import List from './Feed/List';
import { IReduxStore, IStatelessComponent } from '../types';

const MainComponent: IStatelessComponent = (redux: IReduxStore) => {
    return (
        <div className="container">
            <Header />
            <div className="row main-wrapper">
                <div className="column-6">
                    <List redux={redux} />
                </div>
                <div className="column-6">
                    <Detail redux={redux} />
                </div>
            </div>
        </div>
    );
};

export default MainComponent