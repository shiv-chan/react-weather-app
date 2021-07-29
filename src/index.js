import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import Weather from './components/Weather';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';
import { WeatherContextProvider } from './context.js';

library.add(faChevronUp, faChevronDown);

ReactDOM.render(
	<WeatherContextProvider>
		<Weather />
	</WeatherContextProvider>,
	document.getElementById('root')
);
