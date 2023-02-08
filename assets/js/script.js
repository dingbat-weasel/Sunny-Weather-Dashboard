const searchBtn = document.querySelector(".searchBtn");
const userInput = document.querySelector("#cityGet").value;
const dateEl = document.querySelector(".dateToday");
const iconEl = document.querySelector(".icon");
const temperatureEl = document.querySelector(".temperature");
const windSpeedEl = document.querySelector(".windSpeed");

let lat;
let lon;

const getCoordinates = function (userInput) {
  //s9tfgSkphL1BZu8odgY8Urm2XijdrfYbEPglLjZ9
  var requestUrl = `http://api.openweathermap.org/geo/1.0/direct?q=${userInput}&limit=1&appid=9tfgSkphL1BZu8odgY8Urm2XijdrfYbEPglLjZ9`;

  fetch(requestUrl).then(function (response) {
    console.log(response.status);
    console.log(response);
    lat = response.lat;
    lon = response.lon;
    return response.json();
  });
};

const checkWeather = function (lat, lon) {};

searchBtn.addEventListener("click", (event) => {
  event.preventDefault();
  getCoordinates(document.querySelector("#cityGet").value);
  console.log(lat, lon);
});
