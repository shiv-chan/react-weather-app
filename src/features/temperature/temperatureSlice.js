import { createSlice } from '@reduxjs/toolkit';

const initialState = false;

const temperatureSlice = createSlice({
	name: 'temperature',
	initialState,
	reducers: {
		toggleUnit(state) {
			return !state;
		},
	},
});

export const { toggleUnit } = temperatureSlice.actions;

export default temperatureSlice.reducer;
