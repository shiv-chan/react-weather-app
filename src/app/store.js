import { configureStore } from '@reduxjs/toolkit';
import weatherReducer from '../features/weather/weatherSlice';
import temperatureReducer from '../features/temperature/temperatureSlice';

export default configureStore({
	reducer: {
		weather: weatherReducer,
		isFahrenheit: temperatureReducer,
	},
});
