import React, { useContext } from 'react';
import { WiCelsius, WiFahrenheit } from 'weather-icons-react';
import { WeatherContext } from '../context';

export default function Header({ onChangeEvent }) {
	const { pressEnter, isFahrenheit, switchFahrenheit } =
		useContext(WeatherContext);
	return (
		<header>
			<input
				type="text"
				placeholder="Search by City"
				onChange={onChangeEvent}
				onKeyUp={pressEnter}
			/>
			<span onClick={switchFahrenheit}>
				{isFahrenheit ? <WiCelsius size={50} /> : <WiFahrenheit size={50} />}
			</span>
		</header>
	);
}
