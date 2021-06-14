export default function switchBackground(icon) {
	switch (icon) {
		case '01d':
		case '01n':
			return 'sunny';
		case '02d':
		case '02n':
			return 'few-clouds';
		case '03d':
		case '03n':
		case '04d':
		case '04n':
			return 'clouds';
		case '09d':
		case '09n':
		case '10d':
		case '10n':
			return 'rain';
		case '11d':
		case '11n':
			return 'thunder';
		case '13d':
		case '13n':
			return 'snow';
		case '50d':
		case '50n':
			return 'mist';
		default:
			return 'sunny';
	}
}
