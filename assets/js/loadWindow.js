import displaydata from "./displayData.js";
import { resetInput } from "./resetInput.js";

function onLoad() {
  const city = "DUBLIN";
  const apiKey = "a87753a0f261d957d6d0e8f464a72ec2";
  const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;
  fetch(apiUrl)
    .then((response) => response.json())
    .then((data) => {
      if (data.cod >= "404" && data.cod < "500") {
        const error = document.getElementById("error");
        error.textContent = "City not found";
        setTimeout(() => {
          error.textContent = "";
        }, 2000);
        return;
      }
      displaydata(data);
      resetInput();
    });
}

export default onLoad;
