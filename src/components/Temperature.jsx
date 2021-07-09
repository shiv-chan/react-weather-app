import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { currentWeather } from './WeatherApp';

export default function Temperature({ isFahrenheit }) {
	const { weather } = useContext(currentWeather);
	// convert celsius to fahrenheit
	function convertToFahrenheit(celsius) {
		return isFahrenheit
			? Math.round((celsius * 9) / 5 + 32)
			: Math.round(celsius);
	}

	return (
		<div className="temp">
			<h3>{convertToFahrenheit(weather.main.temp)}°</h3>
			<span id="temp-max">
				<FontAwesomeIcon icon="chevron-up" />
				{convertToFahrenheit(weather.main.temp_max)}°
			</span>
			<span id="temp-min">
				<FontAwesomeIcon icon="chevron-down" />
				{convertToFahrenheit(weather.main.temp_min)}°
			</span>
			<p>
				Feels like <span>{convertToFahrenheit(weather.main.feels_like)}°</span>
			</p>
		</div>
	);
}
