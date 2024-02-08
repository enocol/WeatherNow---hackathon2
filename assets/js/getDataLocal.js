import { getCurrentCity } from "../js/getCurrentCity.js";
import displaydata from "../js/displayData.js";

export async function getDataLocal() {
  const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";
  const cityName = await getCurrentCity();
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      displaydata(data);
      console.log(data);
      //   fiveDaysFocast();
    });
}
