import { getCurrentCity } from "../js/getCurrentCity.js";

const h3 = document.querySelectorAll(".card h3");
const temperature = document.querySelectorAll(".card .temp");
const windSpeed = document.querySelectorAll(".card .wind");
const humidity = document.querySelectorAll(".card .humidity");
const currentCity = document.getElementById("current-city");

export async function fiveDaysFocast() {
  let cityName = document.getElementById("city-input").value;
  cityName = cityName[0].toUpperCase() + cityName.slice(1);

  let waitingData = document.getElementById("loading-data");
  waitingData.innerText = "Loading weather data...Please wait...";

  // const cityName = await getCurrentCity();
  const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  const response = await fetch(queryURL);
  const data = await response.json();
  currentCity.textContent = cityName;

  for (let i = 0; i < 5; i++) {
    h3[i].innerText = data.list[i].dt_txt;
    temperature[i].innerText = Math.round(data.list[i].main.temp - 273);
    windSpeed[i].innerText = data.list[i].wind.speed;
    humidity[i].innerText = data.list[i].main.humidity;
    waitingData.innerText = "";
    console.log("yes");
  }
}
