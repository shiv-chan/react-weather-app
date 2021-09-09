export default function iconClassName(iconCode) {
	switch (iconCode) {
		case '01d':
			return 'sunny';
		case '02d':
			return 'few-clouds';
		case '03d':
		case '04d':
			return 'clouds';
		case '09d':
		case '10d':
			return 'rain';
		case '11d':
		case '11n':
			return 'thunder';
		case '13d':
			return 'snow';
		case '50d':
		case '50n':
			return 'mist';
		case '01n':
		case '02n':
		case '03n':
		case '04n':
		case '09n':
		case '10n':
		case '13n':
			return 'night';
		default:
			return 'sunny';
	}
}
