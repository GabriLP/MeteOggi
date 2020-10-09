const key = 'Insert your key here';
const lang = 'it';


async function requestCity(city) {
    const baseURL = 'http://api.openweathermap.org/data/2.5/weather';
    const query = `?q=${city}&appid=${key}&lang=${lang}`;

    const response = await fetch(baseURL + query);

    const data = await response.json();
    return data;
}

window.addEventListener("load", () => {
  let lon;
  let lat;

  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition((position) => {
      lon = position.coords.longitude;
      lat = position.coords.latitude;
      console.log(lon);
      console.log(lat);

      async function requestGeolocation(lat, lon) {
        const defaultURL = `http://api.openweathermap.org/data/2.5/weather`;
        const queryLocation = `?lat=${lat}&lon=${lon}&appid=${key}&lang=${lang}`;
        const result = await fetch(defaultURL + queryLocation);

        console.log(result);

        const info = await result.json();
        return info;
      }
      requestGeolocation(lat, lon)
        .then((data) => {
          updateWeatherApp(data);
        })
        .catch((error) => {
          console.log(error);
        });
    });
  }
});