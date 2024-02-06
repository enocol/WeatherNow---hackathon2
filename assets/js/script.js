const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search.btn");

const API_KEY = "afef0a4b6a2c5afed7f5da4a756f41d9";

const getWeatherDetails = (cityName, lat, lon) => {
    const WEATHER_API_URL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;
}

const getCityCoordinates = () => {
const cityName = cityInput.value.trim();
if(!cityName) return;
const GEOCODING_API_URL = `http://api.openweathermap.org/geo/1.0/direct?q=${cityName}&limit=5&appid=${API_KEY}`

fetch(GEOCODING_API_URL).then(res => res.json()).then(data => {
    if(!data.length) return alert(`No coodinates found for ${cityName}`);
    const { name, lat, lon } = data[0];
    getWeatherDetails();
  }).catch(() => {
    alert("An error occured while fetching the coordinates!");

  });
}

searchButton.addEventListener("click", getCityCoordinates);