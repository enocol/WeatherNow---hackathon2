import { getCurrentCity } from "../js/getCurrentCity.js";

const h3 = document.querySelectorAll(".card h3");
const temperature = document.querySelectorAll(".card .temp");
const windSpeed = document.querySelectorAll(".card .wind");
const humidity = document.querySelectorAll(".card .humidity");
const currentCity = document.getElementById("current-city");

export async function fiveDaysFocast() {
  const cityName = await getCurrentCity();
  const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";
  const queryURL = `https://api.openweathermap.org/data/2.5/forecast?q=${cityName}&appid=${apiKey}`;
  const response = await fetch(queryURL);
  const data = await response.json();
  currentCity.textContent = cityName;
  console.log(data);
  for (let i = 0; i < 5; i++) {
    if (!data) {
      h3[i].innerText = "loding...";
      temperature[i].innerText = "loding...";
      wind[i].innerText = "loding...";
      humidity[i].innerText = "loding...";
    } else {
      h3[i].innerText = data.list[i].dt_txt;
      temperature[i].innerText = Math.round(data.list[i].main.temp - 273);
      windSpeed[i].innerText = data.list[i].wind.speed;
      humidity[i].innerText = data.list[i].main.humidity;
    }
  }
}
