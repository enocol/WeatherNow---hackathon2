function displaydata(data) {
  const cityName = document.querySelector(".details h2");
  const temperature = document.getElementById("temperature");
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp - 273);
  const windSpeed = document.getElementById("wind-speed");
  const humidity = document.getElementById("humidity");
  windSpeed.textContent = data.wind.speed;
  humidity.textContent = data.main.humidity;
}

export default displaydata;
