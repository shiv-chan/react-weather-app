import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';

const initialState = {
	weather: null,
	status: 'idle',
};

export const fetchWeather = createAsyncThunk(
	'weather/fetchWeather',
	async ({ city }) => {
		const response = await fetch(
			`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
		);

		if (response.status !== 200) {
			const data = await response.json();
			console.error(`Failed to fetch data: ${data.message}`);
			throw new Error(data.message);
		} else {
			return response.json();
		}
	}
);

const weatherSlice = createSlice({
	name: 'weather',
	initialState,
	reducers: {},
	extraReducers: {
		[fetchWeather.pending]: (state) => {
			state.status = 'loading';
		},
		[fetchWeather.fulfilled]: (state, action) => {
			state.status = 'succeeded';
			state.weather = action.payload;
		},
		[fetchWeather.rejected]: (state, action) => {
			state.status = 'failed';
		},
	},
});

export default weatherSlice.reducer;
