const searchBtn = document.querySelector(".searchBtn");
const userInput = document.querySelector("#cityGet").value;
const cityNameEl = document.querySelector(".cityName");
const cityStateEl = document.querySelector(".cityState");
const cityCountryEl = document.querySelector(".cityCountry");
const dateEl = document.querySelector(".dateToday");
const weatherEl = document.querySelector(".weather");
const weatherDescriptionEl = document.querySelector(".weatherDescription");
const iconEl = document.querySelector(".icon");
const temperatureEl = document.querySelector(".temperature");
const humidityEl = document.querySelector(".humidity");
const windSpeedEl = document.querySelector(".windSpeed");

const APIKey = "1f2ae3b57cb7c607e6bdd221bdb7a3b2";

// Generate Weather Data from User Input on Search Click
searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  // Get Coordinates
  fetch(
    `http://api.openweathermap.org/geo/1.0/direct?q=${
      document.querySelector("#cityGet").value
    }&limit=1&appid=${APIKey}`
  )
    .then((response) => response.json())
    .then((data) => {
      console.log(data);
      cityNameEl.textContent = data[0].name;
      cityStateEl.textContent = data[0].state;
      cityCountryEl.textContent = data[0].country;

      // Get Weather from Coordinates
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          weatherEl.textContent = data.weather[0].main;
          weatherDescriptionEl.textContent = data.weather[0].description;
          temperatureEl.textContent = data.main.temp;
          humidityEl.textContent = data.main.humidity;
          windSpeedEl.textContent = data.wind.speed;

          iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

          // document.querySelector(".forecastPresentContent").appendChild(icon);
        });
    });
});
