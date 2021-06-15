import React from 'react';
import ReactDOM from 'react-dom';
import './index.scss';
import WeatherApp from './components/WeatherApp';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faChevronUp, faChevronDown } from '@fortawesome/free-solid-svg-icons';

library.add(faChevronUp, faChevronDown);

ReactDOM.render(<WeatherApp />, document.getElementById('root'));
