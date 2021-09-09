import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import store from './app/store';
import { Provider } from 'react-redux';
import App from './App';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronUp, faChevronDown);

ReactDOM.render(
	<Provider store={store}>
		<App />
	</Provider>,
	document.getElementById('root')
);
