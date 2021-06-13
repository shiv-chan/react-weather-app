import React, { useState, useEffect } from 'react';

export default function Header({ onChangeEvent, onKeyUpEvent }) {
	return (
		<header>
			<input
				type="text"
				placeholder="Search by City"
				onChange={onChangeEvent}
				onKeyUp={onKeyUpEvent}
			/>
			<span>℃</span>
		</header>
	);
}
