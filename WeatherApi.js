const apiKey = "d65bca732b304e9787475557252705";
const city = "Lahore";

// DOM elements
const loading = document.getElementById("loading");
const card = document.getElementById("weatherCard");
const cityName = document.getElementById("cityName");
const weatherIcon = document.getElementById("weatherIcon");
const temperature = document.getElementById("temperature");
const conditionText = document.getElementById("conditionText");

fetch(`https://api.weatherapi.com/v1/current.json?key=${apiKey}&q=${city}&aqi=no`)
  .then(res => {
    if (!res.ok) throw new Error("Invalid response from API");
    return res.json();
  })
  .then(data => {
    console.log("Received data from API:", data);
    // safe access
    const weather = data.current;
    const location = data.location;
    if (!weather || !location) throw new Error("Invalid data structure");

    // update DOM
    cityName.textContent = `${location.name}, ${location.country}`;
    weatherIcon.src = `https:${weather.condition.icon}`;
    temperature.textContent = `${weather.temp_c}°C`;
    conditionText.textContent = weather.condition.text;

    loading.style.display = "none";
    card.style.display = "block";
  })
  .catch(err => {
    console.error("Failed to load weather:", err);
    loading.textContent = "❌ Weather API failed. Check your API key or network.";
  });

