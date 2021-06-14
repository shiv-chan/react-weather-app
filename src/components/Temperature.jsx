import React from 'react';

export default function Temperature({
	temp,
	tempMax,
	tempMin,
	feelsLike,
	isFahrenheit,
}) {
	// convert celsius to fahrenheit
	function convertToFahrenheit(celsius) {
		return isFahrenheit
			? Math.round((celsius * 9) / 5 + 32)
			: Math.round(celsius);
	}

	return (
		<div className="temp">
			<h3>{convertToFahrenheit(temp)}°</h3>
			<span id="temp-max">{convertToFahrenheit(tempMax)}°</span>
			<span id="temp-min">{convertToFahrenheit(tempMin)}°</span>
			<p>
				Feels like <span>{convertToFahrenheit(feelsLike)}°</span>
			</p>
		</div>
	);
}
