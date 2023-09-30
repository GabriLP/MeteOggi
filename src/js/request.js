//const { config } = require('dotenv');
import axios from "axios";
import {get} from "lodash";
const baseURL = 'https://api.openweathermap.org/data/2.5/weather';
const lang = 'it';
//config();

let apiKey;

if (typeof window === 'undefined' || typeof window.process === 'undefined') {
  apiKey = process.env.API_KEY;
} else {
    apiKey = 'undefined';
}

export async function requestCity(cityData) {
    const query = `?q=${cityData}&appid=${apiKey}&lang=${lang}`;

    axios.get(baseURL + query)
    try {
        const response = await axios.get(baseURL + query);
    
        if (response.status === 200) {
          // Using Lodash to safely access properties in the JSON response
          const jsonData = get(response, 'data', {});
          return jsonData;
        } else {
          console.error('Non-OK response status:', response.status);
        }
      } catch (error) {
        console.error('There was a problem with the request:', error);
      }
    }

export async function requestGeolocation(lat, lon) {
    const queryLocation = `?lat=${lat}&lon=${lon}&appid=${apiKey}&lang=${lang}`;

    try {
        const response = await axios.get(baseURL + queryLocation);
        if (response.data.cod === 200) {
            const jsonData = get(response, 'data', {});
            return jsonData;
        } else {
            console.error('Non-ok response status', response.status);
        }
    } catch (error) {
        console.error('There was a problem with the request:', error);
    }
}