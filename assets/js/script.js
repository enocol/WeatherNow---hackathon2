import displaydata from "../js/displayData.js";
import { resetInput } from "../js/resetInput.js";
import onLoad from "../js/loadWindow.js";
import { fiveDaysFocast } from "../js/fiveDaysFocast.js";
import { toggleBackground } from "../js/toggleBackground.js";
import { currentCityWeather } from "../js/currentLocationWeather.js";
import { fiveDaysFocastCurrentWeather } from "./fiveDaysFocastCurrentWeather.js";

const searchButton = document.querySelector(".search-btn");
const currentCity = document.getElementById("location-btn");
const toggleButton = document.getElementById("toggle-background");

function getWeatherData() {
  const cityInput = document.querySelector(".city-input");
  // const API_KEY = "afef0a4b6a2c5afed7f5da4a756f41d9";
  const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";
  const cityName = cityInput.value.trim().toLowerCase();
  if (cityName === "") {
    const error = document.getElementById("error");
    error.textContent = "Please enter a city name";
    error.style.backgroundColor = "#ee2e14";
    setTimeout(() => {
      error.textContent = "";
      error.style.backgroundColor = "transparent";
    }, 2000);
    return;
  }
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod >= "404" && data.cod < "500") {
        const error = document.getElementById("error");
        error.textContent = "City not found";
        error.style.backgroundColor = "#ee2e14";
        setTimeout(() => {
          error.textContent = "";
          error.style.backgroundColor = "transparent";
        }, 2000);
        return;
      }
      displaydata(data);
      fiveDaysFocast();
      resetInput();
    });
}

searchButton.addEventListener("click", () => {
  getWeatherData();
});

window.addEventListener("load", onLoad);
currentCity.addEventListener("click", fiveDaysFocastCurrentWeather);
window.addEventListener("load", fiveDaysFocastCurrentWeather);
toggleButton.addEventListener("click", toggleBackground);
