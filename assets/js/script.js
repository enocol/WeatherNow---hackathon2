import displaydata from "../js/displayData.js";

const cityInput = document.querySelector(".city-input");

const searchButton = document.querySelector(".search-btn");
const currentWeatherDiv = document.querySelector(".current-weather");
const weatherCardsDiv = document.querySelector(".weather-cards");

const API_KEY = "afef0a4b6a2c5afed7f5da4a756f41d9";
const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";

function getWeatherData() {
  const cityName = cityInput.value.trim().toLowerCase();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      console.log(displaydata());
    });
}

searchButton.addEventListener("click", getWeatherData);
