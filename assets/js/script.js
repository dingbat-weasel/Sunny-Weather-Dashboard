const searchBtn = document.querySelector(".searchBtn");
const userInput = document.querySelector("#cityGet").value;
const dateEl = document.querySelector(".dateToday");
const iconEl = document.querySelector(".icon");
const temperatureEl = document.querySelector(".temperature");
const windSpeedEl = document.querySelector(".windSpeed");

const APIKey = "1f2ae3b57cb7c607e6bdd221bdb7a3b2";

const userCity = {
  cityName: "",
  latitude: "",
  longitude: "",
  weather: "",
};

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
      userCity.cityName = data[0].name;
      userCity.latitude = data[0].lat;
      userCity.longitude = data[0].lon;
      console.log(userCity);

      // Get Weather from Coordinates
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          userCity.weather = data.weather[0].main;
          console.log(userCity);
        });
    });
});
