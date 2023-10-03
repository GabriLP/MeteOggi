# MeteOggi Weather App

MeteOggi is a web application that allows you to check the current weather and forecast for any location. 
You can search for a specific location using the search bar or let the app use your geolocation for accurate weather data. 
The app is built using HTML, CSS, JavaScript, Bootstrap, Webpack, Babel, Axios, and Lodash.

## Table of Contents

- [Demo](#demo)
- [Usage](#usage)
  - [Search by Location](#search-by-location)
  - [Geolocation](#geolocation)
  - [Error Handling](#error-handling)
- [Dependencies](#dependencies)
- [Development](#development)

## Demo

You can try out the live demo of the MeteOggi app [here](https://gabrilp.github.io/MeteOggi/).

## Usage

### Search by Location

1. Enter the name of a city or location in the search bar.
2. Press the "Search" button or hit Enter.
3. The app will fetch and display the current weather and forecast for the entered location.

### Geolocation

1. Allow the app to access your geolocation when prompted.
2. The app will automatically detect your current location and display the weather and forecast.

### Error Handling

- If there is an error with the weather data request, the app will display an error message.
- The app handles invalid input and provides feedback to the user.

## Dependencies

The MeteOggi app relies on the following dependencies:

- Axios: For making HTTP requests to the OpenWeather API.
- Lodash: For handling data and object manipulation.
- Bootstrap: For styling and responsive design.
- Webpack: For bundling and managing project assets.
- Babel: For transpiling modern JavaScript code for browser compatibility.
- Dotenv: For securely managing environment variables.
- Browserify: For bundling JavaScript modules for browser usage.

You can install these dependencies using npm. For example:

``bash
npm install axios lodash bootstrap webpack babel-loader dotenv browserify --save ``

## Development

To run the app locally for development purposes, follow these steps:

1. Clone this repository to your local machine.
2. Navigate to the project directory.
3. Install project dependencies using `npm install`.
4. Build the project using `npm run build`.
5. Open the `index.html` file in your web browser.
