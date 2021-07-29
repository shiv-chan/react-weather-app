import React, { useState, useEffect } from 'react';
import iconClassName from './iconClassName';

export const WeatherContext = React.createContext();

export function WeatherContextProvider({ children }) {
	const [status, setStatus] = useState('pending');
	const [weather, setWeather] = useState(null);
	const [city, setCity] = useState('Vancouver');
	const [isFahrenheit, setFahrenheit] = useState(false);
	const [iconName, setIconName] = useState(null);

	// fetch weather api
	const fetchWeather = async () => {
		return (
			await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
		).json();
	};

	// first fetch after dom loaded
	useEffect(() => {
		setNewWeather();
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, []);

	// set new data
	const setNewWeather = () => {
		try {
			setStatus('pending');
			fetchWeather()
				.then((result) => {
					setWeather(result);
					return result;
				})
				.then((result) =>
					result.cod !== 200 ? setStatus('rejected') : setStatus('resolved')
				);
		} catch (e) {
			console.error(`Failed to fetch Weather API: ${e}`);
			setStatus('rejected');
		}
	};

	// set icon code
	useEffect(() => {
		status === 'resolved' &&
			setIconName(iconClassName(weather.weather[0].icon));
		// eslint-disable-next-line react-hooks/exhaustive-deps
	}, [status]);

	// press enter event handler
	function pressEnter(e) {
		if (e.code === 'Enter') {
			setNewWeather();
		}
	}

	// switch fahrenheit flag
	function switchFahrenheit() {
		setFahrenheit(!isFahrenheit);
	}

	return (
		<WeatherContext.Provider
			value={{
				setNewWeather,
				setFahrenheit,
				setCity,
				status,
				weather,
				city,
				isFahrenheit,
				pressEnter,
				iconName,
				switchFahrenheit,
			}}
		>
			{children}
		</WeatherContext.Provider>
	);
}
