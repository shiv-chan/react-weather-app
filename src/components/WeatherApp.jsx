import React, { useState, useEffect } from 'react';
import Header from './Header';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';
import switchBackground from './switchBackground';
const currentWeather = React.createContext();

export default function WeatherApp() {
	const [data, setData] = useState('');
	const [city, setCity] = useState('Vancouver');
	const [fahrenheit, setFahrenheit] = useState(false);
	const [icon, setIcon] = useState('');

	console.log(`🚀 ~ WeatherApp ~ data`, data);

	// fetch weather api
	const fetchWeather = async () => {
		return (
			await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
		).json();
	};

	// set new data
	const setNewData = () => {
		try {
			fetchWeather().then((result) => setData(result));
		} catch (e) {
			console.error(`Failed to fetch Weather API: ${e} `);
		}
	};

	// first fetch after dom loaded
	useEffect(() => {
		setNewData();
	}, []);

	// press enter event handler
	function pressEnter(e) {
		// e.code === 'Enter' ? setNewData() : '';
		if (e.code === 'Enter') {
			setNewData();
			console.log(e.code);
		}
	}

	// get current date 'day, date month'
	function currentDate() {
		const currentDate = new Date();
		const formatOptions = { weekday: 'short', month: 'long', day: 'numeric' };
		return new Intl.DateTimeFormat('en-US', formatOptions).format(currentDate);
	}

	// format time
	function formatTime(time) {
		const millisecondTime = time * 1000;
		const timeObj = new Date(millisecondTime);
		return timeObj.toLocaleTimeString('en-US', {
			hour: '2-digit',
			minute: '2-digit',
		});
	}

	// get country name
	function countryName() {
		const countryNameInEnglish = new Intl.DisplayNames(['en'], {
			type: 'region',
		});
		return countryNameInEnglish.of(data.sys.country);
	}

	// switch fahrenheit flag
	function switchFahrenheit() {
		setFahrenheit(!fahrenheit);
	}

	useEffect(() => {
		data && data.cod === 200 && setIcon(switchBackground(data.weather[0].icon));
	}, [data]);

	return data.cod !== 200 ? (
		<main className={`not-found-popup ${icon}`}>
			<p>City Not Found! Please Try Again.</p>
			<Header
				onChangeEvent={(e) => setCity(e.target.value)}
				onKeyUpEvent={pressEnter}
				unitOnClickEvent={switchFahrenheit}
				isFahrenheit={fahrenheit}
			/>
		</main>
	) : (
		<currentWeather.Provider value={data}>
			<main className={icon}>
				<h1>Weather App</h1>
				<Header
					onChangeEvent={(e) => setCity(e.target.value)}
					onKeyUpEvent={pressEnter}
					unitOnClickEvent={switchFahrenheit}
					isFahrenheit={fahrenheit}
				/>
				<article>
					<p>{currentDate()}</p>
					<h2>
						{data.name}, {countryName()}
					</h2>
					<WeatherIcon icon={data.weather[0].icon} />
					<Temperature isFahrenheit={fahrenheit} />
					<div className="weather">
						<h3>{data.weather[0].main}</h3>
						<span>{data.weather[0].description}</span>
					</div>
					<div className="others">
						<section className="others-item">
							<h4>Sunrise</h4>
							<p>{formatTime(data.sys.sunrise)}</p>
						</section>
						<section className="others-item">
							<h4>Sunset</h4>
							<p>{formatTime(data.sys.sunset)}</p>
						</section>
						<section className="others-item">
							<h4>Humidity</h4>
							<p>{data.main.humidity} %</p>
						</section>
						<section className="others-item">
							<h4>Wind</h4>
							<p>{((data.wind.speed * 18) / 5).toFixed(2)} km/h</p>
						</section>
						<section className="others-item">
							<h4>Pressure</h4>
							<p>{data.main.pressure} hPa</p>
						</section>
					</div>
				</article>
			</main>
		</currentWeather.Provider>
	);
}

export { currentWeather };
