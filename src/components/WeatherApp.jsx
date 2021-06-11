import React, { useState, useEffect } from 'react';

// console.log(process.env.REACT_APP_WEATHER_API_KEY);

export default function WeatherApp() {
	const [data, setData] = useState('');
	const [city, setCity] = useState('Vancouver');

	// fetch weather api
	const fetchWeather = async () => {
		return (
			await fetch(
				`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
			)
		).json();
	};

	useEffect(() => {
		try {
			fetchWeather().then((result) => setData(result));
		} catch (e) {
			console.error(`Failed to fetch Weather API: ${e} `);
		}
	}, [city]);

	console.log(`🚀 ~ WeatherApp ~ data`, data);

	return (
		<>
			<h1>Weather App</h1>
			<header>
				<input type="text" placeholder="Search by City" />
				<span>℃</span>
			</header>
			<article>
				<p>Today's Date</p>
				<h2>City Name</h2>
				<div className="temp">
					<h3>28°</h3>
					<span>31°</span>
					<span>19°</span>
					<p>
						Feels like<span>29°</span>
					</p>
				</div>
				<div className="weather">
					<h3>Clear</h3>
					<span>clear sky</span>
				</div>
				<div className="others">
					<section className="others-item">
						<h4>Sunrise</h4>
						<p>3:55 am</p>
					</section>
					<section className="others-item">
						<h4>Sunset</h4>
						<p>9:13 pm</p>
					</section>
					<section className="others-item">
						<h4>Precipitaion</h4>
						<p>10%</p>
					</section>
					<section className="others-item">
						<h4>Humidity</h4>
						<p>42%</p>
					</section>
					<section className="others-item">
						<h4>Wind</h4>
						<p>11 km/h</p>
					</section>
					<section className="others-item">
						<h4>Pressure</h4>
						<p>1009 hPa</p>
					</section>
				</div>
			</article>
		</>
	);
}
