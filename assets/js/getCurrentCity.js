export async function getCurrentCity() {
  try {
    if ("geolocation" in navigator) {
      const position = await new Promise((resolve, reject) => {
        navigator.geolocation.getCurrentPosition(resolve, reject);
      });

      const latitude = position.coords.latitude;
      const longitude = position.coords.longitude;

      const apiUrl = `https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latitude}&lon=${longitude}`;

      const response = await fetch(apiUrl);
      const data = await response.json();

      const cityName = data.address.city;
      return cityName;
    } else {
      throw new Error("Geolocation is not supported by this browser.");
    }
  } catch (error) {
    console.error("Error:", error.message);
    return null;
  }
}
