let cityEl = document.querySelector(".city");
let iconEl = document.querySelector(".icon");
let descriptionEl = document.querySelector(".description");
let temperatureEl = document.querySelector(".temp");
let humidityEl = document.querySelector(".humidity");
let windEl = document.querySelector(".wind");
let searchBar = document.querySelector(".search-bar");
let searchEl = document.querySelector(".search button");
let weatherEl = document.querySelector(".weather");

let weather = {
 "apikey": "a6f6fef1470f473cb0694459230605",

 fetchWeather: function (city) {
  fetch("https://api.weatherapi.com/v1/current.json?key=a6f6fef1470f473cb0694459230605&q=" + city + "&aqi=no")
    .then((response) => response.json())
    .then((data) => this.displayWeather(data));
 },

 displayWeather: function (data) {
  const { name } = data.location;
  const { icon, text } = data.current.condition;
  const { temp_c, humidity } = data.current;
  const { wind_kph } = data.current;

  cityEl.innerText = `Clima em ${name}`;
  iconEl.src = icon;
  descriptionEl.innerText = text;
  temperatureEl.innerText = `${temp_c}°C`;
  humidityEl.innerText = `Úmidade: ${humidity}%`;
  windEl.innerText = `Velocidade do Vento: ${wind_kph} km/hr`;

  weatherEl.classList.remove("loading");
 },

 search: function () {
  this.fetchWeather(searchBar.value);
 }
};

searchEl.addEventListener("click", () => {
 console.log("Clicked!");
 weather.search();
});

searchBar.addEventListener("keyup", (event) => {
 if (event.key === "Enter") {
  weather.search();
 }
});

weather.fetchWeather("Lagos");