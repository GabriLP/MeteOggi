const searchForm = document.querySelector('.search-location');
const cityValue = document.querySelector('.search-location input');
const cityName = document.querySelector('.city-name p');
const cardBody = document.querySelector('.card-body');
const displayCard = document.querySelector('.back-card');
const slideAnimation = document.querySelector('.card-rounded')

const kelvinToCelsius = (kelvin) => {
    celsius = Math.round(kelvin-273.15);
    return celsius;
}

updateWeatherApp = (city) => {
    console.log(city);
    const iconSrc = `./images/${city.weather[0].icon}.png`;
    
    cityName.textContent = city.name;
    cardBody.innerHTML = `
                <div class="card-mid row">
                    <div class="col-6 text-center temp">
                        <span>${kelvinToCelsius(city.main.temp)}&deg;C</span>
                    </div>

                   
                    <div class="col-3 condition-temp">    
                        <p class="condition">${city.weather[0].description}</p>
                        <p class="high">&#8679; ${kelvinToCelsius(city.main.temp_max)}&deg;C</p>
                        <p class="low">&#8681; ${kelvinToCelsius(city.main.temp_min)}&deg;C</p>
                    </div>

                    <div class="icon-temp col-3">

                        <div class="icon-container card shadow mx-auto">
                            <img src = "${iconSrc}" class = "weather-icon">
                        </div>
                    </div>
                
                    


                        <div class="card-bottom px-5 py-4 row">
                            <div class="col text-center">
                                <p>${kelvinToCelsius(
                                  city.main.feels_like
                                )}&deg;C</p>
                                <span>Temperatura percepita</span>
                            </div>
                        </div>

                        <div class="card-bottom px-5 py-4 row">
                            <div class="col text-center">
                                <p>${city.main.humidity}%</p>
                                <span>Umidità</span>
                            </div>
                        </div>
                    </div>

    `;
    displayCard.classList.remove('d-none')
}


         searchForm.addEventListener('submit', event => {
             event.preventDefault();
             const citySearched = cityValue.value.trim();
             console.log(citySearched);
             searchForm.reset();

             requestCity(citySearched)
                 .then((data) => {
                     updateWeatherApp(data);
                 })
                 .catch((error => {
                     console.log(error)
                 }))
                })