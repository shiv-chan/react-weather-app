import React, { useContext } from 'react';
import Header from './Header';
import { WeatherContext } from '../context';

export default function NotFound() {
	const { iconName, setCity } = useContext(WeatherContext);

	return (
		<main className={`not-found-popup ${iconName}`}>
			<p>City Not Found! Please Try Again.</p>
			<Header onChangeEvent={(e) => setCity(e.target.value)} />
		</main>
	);
}
