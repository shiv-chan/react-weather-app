// get current date 'day, date month'
export function currentDate() {
	const currentDate = new Date();
	const formatOptions = { weekday: 'short', month: 'long', day: 'numeric' };
	return new Intl.DateTimeFormat('en-US', formatOptions).format(currentDate);
}

// format time
export function formatTime(time) {
	const millisecondTime = time * 1000;
	const timeObj = new Date(millisecondTime);
	return timeObj.toLocaleTimeString('en-US', {
		hour: '2-digit',
		minute: '2-digit',
	});
}

// get country name
export function countryName(country) {
	const countryNameInEnglish = new Intl.DisplayNames(['en'], {
		type: 'region',
	});
	return countryNameInEnglish.of(country);
}
