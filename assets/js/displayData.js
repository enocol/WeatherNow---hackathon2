function displaydata(data) {
  const cityName = document.querySelector(".details h2");
  cityName.textContent = data.name;
}

export default displaydata;
