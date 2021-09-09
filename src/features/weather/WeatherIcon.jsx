import React from 'react';
import { useMediaQuery } from 'react-responsive';
import {
	WiDaySunny,
	WiNightClear,
	WiDaySunnyOvercast,
	WiCloud,
	WiNightAltCloudy,
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

export default function WeatherIcon({ iconCode }) {
	const isSmallMobile = useMediaQuery({ query: '(max-width: 320px)' });
	const isLaptop = useMediaQuery({ query: '(min-width: 1440px)' });
	let iconSize;
	if (isSmallMobile) iconSize = 150;
	if (isLaptop) iconSize = 250;
	return <div className="weather-icon">{pickIcon(iconCode, iconSize)}</div>;
}

function pickIcon(iconCode, iconSize = 200) {
	switch (iconCode) {
		case '01d':
			return <WiDaySunny size={iconSize} />;
		case '01n':
			return <WiNightClear size={iconSize} />;
		case '02d':
			return <WiDaySunnyOvercast size={iconSize} />;
		case '02n':
			return <WiNightAltCloudy size={iconSize} />;
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
