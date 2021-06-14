import React, { useState, useEffect } from 'react';

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
			<span onClick={unitOnClickEvent}>{isFahrenheit ? 'F' : '℃'}</span>
		</header>
	);
}
