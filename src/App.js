import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchWeather } from './features/weather/weatherSlice';
import SearchBar from './app/SearchBar';
import Weather from './features/weather/Weather';
import iconClassName from './iconClassName';

export default function App() {
	const dispatch = useDispatch();

	useEffect(() => {
		dispatch(fetchWeather({ city: 'vancouver' }));
	}, []);

	const weather = useSelector((state) => state.weather.weather);

	return (
		<div
			className={`container ${
				weather !== null ? iconClassName(weather.weather[0].icon) : ''
			}`}
		>
			<article>
				<h1>Weather App</h1>
				<SearchBar />
				<Weather />
			</article>
		</div>
	);
}
