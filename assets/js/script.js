const cityInput = document.querySelector(".city-input");
const searchButton = document.querySelector(".search-btn");
<<<<<<< HEAD
const API_KEY = "afef0a4b6a2c5afed7f5da4a756f41d9";

// const createWeatherCard = (weatherItem) => {
//   return `  <li class="card">
//     <h3>Monday</h3>
//     <img src="https://openweathermap.org/img/wn/10d@2x.png" alt="weather-icon">
//     <h4>Temp:21.5°C</h4>
//     <h4>Wind: 4.31 M/S</h4>
//     <h4>Humidity: 81%</h4>
// </li>`;
// };
=======
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = "afef0a4b6a2c5afed7f5da4a756f41d9";

const createWeatherCard = (cityName, weatherItem, index) => {
    if (index === 0) {
        return `<div class="details">
                <h2>${cityName}(${weatherItem.dt_txt.split(" ")[0]})</h2>
                <h4>${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
                <h4>${weatherItem.wind.speed} M/S</h4>
                <h4>${weatherItem.main.humidity} %</h4> 
                </div>
                <div class="icon">
                <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@4x.png" alt="weather-icon">
                <h4>${weatherItem.weather[0].description}</h4>
                </div>`
    } else {
    return `  
    <li class="card">
    <h3>${weatherItem.dt_txt.split(" ")[0]}</h3>
    <img src="https://openweathermap.org/img/wn/${weatherItem.weather[0].icon}@2x.png" alt="weather-icon">       
    <h4>${(weatherItem.main.temp - 273.15).toFixed(2)}°C</h4>
    <h4>${weatherItem.wind.speed} M/S</h4>
    <h4>${weatherItem.main.humidity} %</h4>  
    </li>`;
}
}
>>>>>>> 20ece4afa118026d887603c6c24714d872566172

// const getWeatherDetails = (cityName, lat, lon) => {
//   const WEATHER_API_URL = `api.openweathermap.org/data/2.5/forecast?lat=${lat}&lon=${lon}&appid=${API_KEY}`;

<<<<<<< HEAD
//   fetch(WEATHER_API_URL)
//     .then((res) => res.json())
//     .then((data) => {
//       const uniqueForecastDays = [];
//       const fiveDaysForecast = data.list.filter((forecast) => {
//         const forecastDate = new Date(forecast.dt_txt).getDate();
//         if (!uniqueForecastDays.includes(forecastDate)) {
//           return uniqueForecastDays.push(forecastDate);
//         }
//       });

//       fiveDaysForecast.forEach((weatherItem) => {
//         createWeatherCard(weatherItem);
//       });
//     })
//     .catch(() => {
//       alert("An error occured while fetching the weather forecast!");
//     });
// };
=======
    fetch(WEATHER_API_URL).then(res => res.json()).then(data => {
        
        const uniqueForecastDays = [];
        const fiveDaysForecast = data.list.filter(forecast => {
            const forecastDate = new Date(forecast.dt_txt).getDate();
            if(!uniqueForecastDays.includes(forecastDate)) {
               return uniqueForecastDays.push(forecastDate);
            }
        });

        cityInput.value= "";
        currentWeatherDiv.innerHTML = "";
        weatherCardsDiv.innerHTML = "";

        console.log(fiveDaysForecast);
        fiveDaysForecast.forEach((weatherItem, index) => {
            if(index === 0) {
                weatherCardsDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
            } else {
                weatherCardsDiv.insertAdjacentHTML("beforeend", createWeatherCard(cityName, weatherItem, index));
            }
        });
    }).catch(() => {
        alert("An error occured while fetching the weather forecast!");
    });
}
>>>>>>> 20ece4afa118026d887603c6c24714d872566172

const getCityCoordinates = () => {
  const cityName = cityInput.value.trim().toLowerCase();
  const GEOCODING_API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`;
  if (!cityName) return alert("Please enter a city name!");

  fetch(GEOCODING_API_URL)
    .then((res) => res.json())
    .then((data) => {
      console.log(data);
    })
    .catch(() => {
      alert("An error occured while fetching the coordinates!");
    });
};

searchButton.addEventListener("click", getCityCoordinates);
