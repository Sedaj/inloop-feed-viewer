declare let module: any;
declare let require: any;

import * as React from 'react';
import { render } from 'react-dom';
import { createStore } from 'redux';
import rootReducer from './reducers/rootReducer';
import { persistStore, autoRehydrate } from 'redux-persist'
import Director from './Director';

let store = createStore(rootReducer, {}, autoRehydrate() );
persistStore(store);

require('../style/main.scss');

module.hot && module.hot.accept();

render(
	<Director store={store} />
	,
	document.getElementById("react")
);
