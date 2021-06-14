export default function switchBackground(icon) {
	switch (icon) {
		case '01d':
		case '01n':
			main.style.setProperty(
				'background',
				'linear-gradient(to bottom, rgb(255, 165, 0), rgb(237, 116, 1))'
			);
			break;
		case '02d':
		case '02n':
			main.style.setProperty(
				'background',
				'linear-gradient(to top, #d1913c, #ffd194)'
			);
			break;
		case '03d':
		case '03n':
		case '04d':
		case '04n':
			main.style.setProperty(
				'background',
				'linear-gradient(to top, #757f9a, #d7dde8)'
			);
			break;
		case '09d':
		case '09n':
		case '10d':
		case '10n':
			main.style.setProperty(
				'background',
				'linear-gradient(to top, #2c3e50, #3498db)'
			);
			break;
		case '11d':
		case '11n':
			main.style.setProperty(
				'background',
				'linear-gradient(to bottom, #e9d362, #333333)'
			);
			break;
		case '13d':
		case '13n':
			main.style.setProperty(
				'background',
				'linear-gradient(to top, #83a4d4, #b6fbff)'
			);
			break;
		case '50d':
		case '50n':
			main.style.setProperty(
				'background',
				'linear-gradient(to top, #9796f0, #fbc7d4)'
			);
			break;
		default:
			main.style.setProperty(
				'background',
				'linear-gradient(to bottom, rgb(255, 165, 0), rgb(237, 116, 1))'
			);
	}
}
