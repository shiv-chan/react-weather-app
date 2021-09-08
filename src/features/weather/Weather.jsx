import React from 'react';
import { useSelector } from 'react-redux';
import { currentDate, formatTime, countryName } from '../../convertFunctions';
import Loading from '../../app/Loading';
import Temperature from '../temperature/Temperature';
import WeatherIcon from './WeatherIcon';

export default function Weather() {
	const weather = useSelector((state) => state.weather.weather);
	const status = useSelector((state) => state.weather.status);

	if (status === 'loading' || status === 'idle') {
		return <Loading />;
	}

	if (status === 'succeeded') {
		return (
			<main>
				<article>
					<div className="weather-top">
						<p>{currentDate()}</p>
						<h2>
							{weather.name}, {countryName(weather.sys.country)}
						</h2>
						<WeatherIcon iconCode={weather.weather[0].icon} />
						<Temperature />
						<div className="weather">
							<h3>{weather.weather[0].main}</h3>
							<span>{weather.weather[0].description}</span>
						</div>
					</div>
					<div className="others-background-wrapper">
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
					</div>
				</article>
			</main>
		);
	}

	if (status === 'failed') {
		return null;
	}
}
