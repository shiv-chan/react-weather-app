# Weather App

This is a weather applicaiton built with React, Redux, and SCSS.<br/>
This app fetches the weather data using [Weather API](https://openweathermap.org/api) by OpenWeather.

I built this app in two ways; one is with React `context` and the other one is with Redux to access to a weather data throughout the app.<br/>
There are `context` branch for React `context`, and `main`, `redux` branch for Redux in this repository.

## Design
I referred to [this design](https://dribbble.com/shots/13372672-Weather-app) by [Kostya Sobol](https://dribbble.com/kosobol) published on Dribbble.
![スクリーンショット 2021-09-09 10 57 22](https://user-images.githubusercontent.com/51708229/132738081-a094f65e-6e37-41ca-a016-73edece1a32c.png)

## Project Status
This project is in progress.

<strong>Upcoming Features</strong><br/>
- Autocomplete for name of places (search input)
- Hourly and Weekly forcasts
- Alternative coding for older browsers

## Project Result
### Demo
![weather-app-demo](https://user-images.githubusercontent.com/51708229/132739264-227f90da-f44d-44e4-ab43-2752a6146b23.gif)

### Production Site
https://react-weather-app-peach-mu.vercel.app/

## Installation and Setup Instructions
Clone down `main` repository. You will need `npm` and `node` installed grobally on your local machine.<br/>
Then, get your [Weather API](https://openweathermap.org/api) key and create `.env` file and paste your key there referring to [`.env-sample` file](https://github.com/shiv-chan/react-weather-app/blob/main/.env-sample).

Installation:

`npm install`

To start a server:

`npm start`

To visit the app:

`localhost:3000`


## Reflection

Building a weather app was one of my assignments in college.  First, I built [the one](https://github.com/shiv-chan/WMAP/tree/main/Web%20Development%20II/Midterm%20Project) with vanilla JavaScript.<br/>
As I learned React, I started to convert the project into the one with React.<br/>
At that time, (even now) it's hard for me to tell when to use either React `context` or Redux.

This one is a kind of an experiment project to see how the code would be different between with React `context` and with Redux.
I learned that it's possible to do the same thing in either way, but in this project I felt Redux can make the code more readable and makes it easier to understand the structure for me.

I started this process with by using the `create-react-app` boilerplate, then adding `@reduxjs/toolkit` and `react-redux` for Redux version. Also, I installed `sass` and `node-sass` to utilize SASS for styling.<br/>

Here are obstacles that I ran into through this project.

1. This app gets the name of city from the value of input and passes the string to API as a parameter. I wasn't really comfortable to use `createAsyncThunk` at that time so I got stuck here a bit. I learned that `createAsynThunk`'s second parameter which is `payloadCreator` could have two arguments and the first one is a value passing to the action creator when dispathed.<br/>
Therefore, I had the dispatcher like the following `dispatch(fetchWeather({ city: nameOfCity }));` and the action creator like this `fetchWeather = createAsyncThunk('weather/fetchWeather', async ({ city }) => {...})`.

2. The background of this app changes depends on the weather. First I have no idea how to change CSS style based on the weather data.<br/>
Weather API provides with weather icon code, so I created the function `iconClassName` that can generate a class name based on the icon code. Then, passing the class name to the container wrapper in `App.js` like the following: `container ${weather !== null ? iconClassName(weather.weather[0].icon) : ''}`
Also, created the scss file to style the background based on each class name.
