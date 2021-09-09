import React, { useState } from 'react';
import { fetchWeather } from '../features/weather/weatherSlice';
import { toggleUnit } from '../features/temperature/temperatureSlice';
import { useSelector, useDispatch } from 'react-redux';
import { WiCelsius, WiFahrenheit } from 'weather-icons-react';

export default function SearchBar() {
	const status = useSelector((state) => state.weather.status);
	const isFahrenheit = useSelector((state) => state.isFahrenheit);
	const dispatch = useDispatch();

	const [nameOfCity, setNameOfCity] = useState('');

	const onChangeHandler = (e) => {
		setNameOfCity(e.currentTarget.value);
	};

	const pressEnterHandler = (e) => {
		if (e.key === 'Enter') {
			dispatch(fetchWeather({ city: nameOfCity }));
			setNameOfCity('');
		}
	};

	return (
		<header>
			{status === 'failed' ? (
				<p className="not-found-message">City Not Found! Please Try Again.</p>
			) : (
				''
			)}
			<input
				type="text"
				placeholder="Search by City"
				value={nameOfCity}
				onChange={onChangeHandler}
				onKeyUp={pressEnterHandler}
			/>
			<span onClick={() => dispatch(toggleUnit())}>
				{isFahrenheit ? <WiCelsius size={50} /> : <WiFahrenheit size={50} />}
			</span>
		</header>
	);
}
