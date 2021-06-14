import React from 'react';
import {
	WiDaySunny,
	WiDaySunnyOvercast,
	WiCloud,
	WiCloudy,
	WiRain,
	WiDayRain,
	WiNightAltRain,
	WiDayLightning,
	WiNightAltLightning,
	WiSnowflakeCold,
	WiFog,
	WiNA,
} from 'weather-icons-react';

export default function WeatherIcon({ icon }) {
	return <div className="weather-icon">{pickIcon(icon)}</div>;
}

function pickIcon(icon, iconSize = 250) {
	switch (icon) {
		case '01d':
		case '01n':
			return <WiDaySunny size={iconSize} />;
		case '02d':
		case '02n':
			return <WiDaySunnyOvercast size={iconSize} />;
		case '03d':
		case '03n':
			return <WiCloud size={iconSize} />;
		case '04d':
		case '04n':
			return <WiCloudy size={iconSize} />;
		case '09d':
		case '09n':
			return <WiRain size={iconSize} />;
		case '10d':
			return <WiDayRain size={iconSize} />;
		case '10n':
			return <WiNightAltRain size={iconSize} />;
		case '11d':
			return <WiDayLightning size={iconSize} />;
		case '11n':
			return <WiNightAltLightning size={iconSize} />;
		case '13d':
		case '13n':
			return <WiSnowflakeCold size={iconSize} />;
		case '50d':
		case '50n':
			return <WiFog size={iconSize} />;
		default:
			return <WiNA size={iconSize} />;
	}
}
