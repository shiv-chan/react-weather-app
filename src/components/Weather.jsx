import React, { useContext } from 'react';
import { WeatherContext } from '../context';

import Header from './Header';
import NotFound from './NotFound';
import Loading from './Loading';
import Temperature from './Temperature';
import WeatherIcon from './WeatherIcon';

export default function WeatherApp() {
	const { setCity, status, weather, iconName } = useContext(WeatherContext);

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
		return countryNameInEnglish.of(weather.sys.country);
	}

	if (status === 'pending') {
		return <Loading />;
	}

	if (status === 'resolved') {
		return (
			<main className={iconName}>
				<h1>Weather App</h1>
				<Header onChangeEvent={(e) => setCity(e.target.value)} />
				<article>
					<p>{currentDate()}</p>
					<h2>
						{weather.name}, {countryName()}
					</h2>
					<WeatherIcon iconCode={weather.weather[0].icon} />
					<Temperature />
					<div className="weather">
						<h3>{weather.weather[0].main}</h3>
						<span>{weather.weather[0].description}</span>
					</div>
					<div className="others">
						<section className="others-item">
							<h4>Sunrise</h4>
							<p>{formatTime(weather.sys.sunrise)}</p>
						</section>
						<section className="others-item">
							<h4>Sunset</h4>
							<p>{formatTime(weather.sys.sunset)}</p>
						</section>
						<section className="others-item">
							<h4>Humidity</h4>
							<p>{weather.main.humidity} %</p>
						</section>
						<section className="others-item">
							<h4>Wind</h4>
							<p>{((weather.wind.speed * 18) / 5).toFixed(2)} km/h</p>
						</section>
						<section className="others-item">
							<h4>Pressure</h4>
							<p>{weather.main.pressure} hPa</p>
						</section>
					</div>
				</article>
			</main>
		);
	}

	if (status === 'rejected') {
		return <NotFound />;
	}
}
