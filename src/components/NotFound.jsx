import React, { useContext } from 'react';
import Header from './Header';
import { currentWeather } from './WeatherApp';

export default function NotFound() {
	const { pressEnter, switchFahrenheit, fahrenheit, icon, setCity } =
		useContext(currentWeather);

	return (
		<main className={`not-found-popup ${icon}`}>
			<p>City Not Found! Please Try Again.</p>
			<Header
				onChangeEvent={(e) => setCity(e.target.value)}
				onKeyUpEvent={pressEnter}
				unitOnClickEvent={switchFahrenheit}
				isFahrenheit={fahrenheit}
			/>
		</main>
	);
}
