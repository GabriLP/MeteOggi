import {get} from 'lodash';
import {requestCity, requestGeolocation} from './request.js'


const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const displayCard = document.querySelector('.back-card');
const errorMessage = document.getElementById('error-message');

const kelvinToCelsius = (kelvin) => Math.round(kelvin - 273.15);

function updateWeatherApp(cityData) {
    // Safely access properties using _.get() from lodash library
    const weatherDescription = get(cityData, 'weather[0].description', '');
    const icon = get(cityData, 'weather[0].icon', '');
    const iconSrc = `./src/images/${icon}.png`;
    const temp = kelvinToCelsius(get(cityData, 'main.temp', 0));
    const tempMax = kelvinToCelsius(get(cityData, 'main.temp_max', 0));
    const tempMin = kelvinToCelsius(get(cityData, 'main.temp_min', 0));
    const feelsLike = kelvinToCelsius(get(cityData, 'main.feels_like', 0));
    const humidity = get(cityData, 'main.humidity', 0);

    cardBody.innerHTML = `
        <div class="card-mid row">
            <div class="col-6 text-center temp">
                <span>${temp}&deg;C</span>
            </div>

            <div class="col-3 condition-temp">    
                <p class="condition">${weatherDescription}</p>
                <p class="high">&#8679; ${tempMax}&deg;C</p>
                <p class="low">&#8681; ${tempMin}&deg;C</p>
            </div>

            <div class="icon-temp col-3">
                <div class="icon-container card shadow mx-auto">
                    <img src="${iconSrc}" class="weather-icon">
                </div>
            </div>
        </div>
    <div id='bottom-wrap'>
        <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
                <p>${feelsLike}&deg;C</p>
                <span>Temperatura percepita</span>
            </div>
        </div>

        <div class="card-bottom px-5 py-4 row">
            <div class="col text-center">
                <p>${humidity}%</p>
                <span>Umidità</span>
            </div>
        </div>
    </div>
    `;

    cityName.textContent = cityData.name;
    displayCard.classList.remove('d-none');
};


searchForm.addEventListener('submit', async (event) => {
    event.preventDefault();

    try {
        const citySearched = cityValue.value.trim();
        searchForm.reset();
        
        const data = await requestCity(citySearched);
        
        updateWeatherApp(data);
        
            errorMessage.textContent = '';
            errorMessage.classList.add('d-none');

        displayCard.classList.remove('animate-slide-in');

        setTimeout(() => {
            displayCard.classList.add('animate-slide-in');
        }, 10);

    } catch (error) {
        console.error('Error fetching city data:', error);
        errorMessage.textContent = 'Si è verificato un errore. Controlla la query di ricerca e riprova.';
        errorMessage.classList.remove('d-none');
    }
});

window.addEventListener('load', () => {
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const lat = get(position, 'coords.latitude', 0);
            const lon = get(position, 'coords.longitude', 0);

            try {
                const data = await requestGeolocation(lat, lon);
                updateWeatherApp(data);
            } catch (error) {
                console.error('Error fetching geolocation data:', error);
            }
        });
    }
});