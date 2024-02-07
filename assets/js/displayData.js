function displaydata(data) {
  const img = document.getElementById("weather-icon");
  const cityName = document.querySelector(".details h2");
  const weatherType = document.getElementById("weather-type");
  weatherType.innerText = data.weather[0].main;
  const temperature = document.getElementById("temperature");
  cityName.textContent = data.name;
  temperature.textContent = Math.round(data.main.temp - 273);
  const windSpeed = document.getElementById("wind-speed");
  const humidity = document.getElementById("humidity");
  windSpeed.textContent = data.wind.speed;
  humidity.textContent = data.main.humidity;

  if (data.weather[0].main === "Clouds") {
    img.src = "assets/images/Images_Hackathon2/Weather_icons/cloudy.png";
  } else if (data.weather[0].main === "Rain") {
    img.src = "assets/images/Images_Hackathon2/Weather_icons/rain.png";
  } else if (data.weather[0].main === "Clear") {
    img.src = "assets/images/Images_Hackathon2/Weather_icons/clear-sky.png";
  } else if (data.weather[0].main === "Snow") {
    img.src = "assets/images/Images_Hackathon2/Weather_icons/snowflake.png";
    //   } else if (data.weather[0].main === "Mist")
    //     document.getElementById("weather-icon").src = "assets/images/mist.png";
  } else {
    img.src = "";
  }
}

export default displaydata;
