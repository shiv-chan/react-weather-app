import React from 'react';
import { WiCelsius, WiFahrenheit } from 'weather-icons-react';

export default function Header({
	onChangeEvent,
	onKeyUpEvent,
	unitOnClickEvent,
	isFahrenheit,
}) {
	return (
		<header>
			<input
				type="text"
				placeholder="Search by City"
				onChange={onChangeEvent}
				onKeyUp={onKeyUpEvent}
			/>
			<span onClick={unitOnClickEvent}>
				{isFahrenheit ? <WiCelsius size={50} /> : <WiFahrenheit size={50} />}
			</span>
		</header>
	);
}
