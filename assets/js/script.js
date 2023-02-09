// Elements
// Form
const searchBtn = document.querySelector(".searchBtn");
const userInput = document.querySelector("#cityGet").value;

// Location
const cityNameEl = document.querySelector(".cityName");
const cityStateEl = document.querySelector(".cityState");
const cityCountryEl = document.querySelector(".cityCountry");

// Present Day
const dateEl = document.querySelector(".date");
const weatherEl = document.querySelector(".weather");
const weatherDescriptionEl = document.querySelector(".weatherDescription");
const iconEl = document.querySelector(".icon");
const temperatureEl = document.querySelector(".temperature");
const humidityEl = document.querySelector(".humidity");
const windSpeedEl = document.querySelector(".windSpeed");

// Forecast Day 1
const forecast1_dateEl = document.querySelector(".forecast1_date");
const forecast1_weatherEl = document.querySelector(".forecast1_weather");
const forecast1_weatherDescriptionEl = document.querySelector(
  ".forecast1_weatherDescription"
);
const forecast1_iconEl = document.querySelector(".forecast1_icon");
const forecast1_temperatureEl = document.querySelector(
  ".forecast1_temperature"
);
const forecast1_humidityEl = document.querySelector(".forecast1_humidity");
const forecast1_windSpeedEl = document.querySelector(".forecast1_windSpeed");

// Forecast Day 2
const forecast2_dateEl = document.querySelector(".forecast2_date");
const forecast2_weatherEl = document.querySelector(".forecast2_weather");
const forecast2_weatherDescriptionEl = document.querySelector(
  ".forecast2_weatherDescription"
);
const forecast2_iconEl = document.querySelector(".forecast2_icon");
const forecast2_temperatureEl = document.querySelector(
  ".forecast2_temperature"
);
const forecast2_humidityEl = document.querySelector(".forecast2_humidity");
const forecast2_windSpeedEl = document.querySelector(".forecast2_windSpeed");

// Forecast Day 3
const forecast3_dateEl = document.querySelector(".forecast3_date");
const forecast3_weatherEl = document.querySelector(".forecast3_weather");
const forecast3_weatherDescriptionEl = document.querySelector(
  ".forecast3_weatherDescription"
);
const forecast3_iconEl = document.querySelector(".forecast3_icon");
const forecast3_temperatureEl = document.querySelector(
  ".forecast3_temperature"
);
const forecast3_humidityEl = document.querySelector(".forecast3_humidity");
const forecast3_windSpeedEl = document.querySelector(".forecast3_windSpeed");

// Forecast Day 4
const forecast4_dateEl = document.querySelector(".forecast4_date");
const forecast4_weatherEl = document.querySelector(".forecast4_weather");
const forecast4_weatherDescriptionEl = document.querySelector(
  ".forecast4_weatherDescription"
);
const forecast4_iconEl = document.querySelector(".forecast4_icon");
const forecast4_temperatureEl = document.querySelector(
  ".forecast4_temperature"
);
const forecast4_humidityEl = document.querySelector(".forecast4_humidity");
const forecast4_windSpeedEl = document.querySelector(".forecast4_windSpeed");

// Forecast Day 5
const forecast5_dateEl = document.querySelector(".forecast5_date");
const forecast5_weatherEl = document.querySelector(".forecast5_weather");
const forecast5_weatherDescriptionEl = document.querySelector(
  ".forecast5_weatherDescription"
);
const forecast5_iconEl = document.querySelector(".forecast5_icon");
const forecast5_temperatureEl = document.querySelector(
  ".forecast5_temperature"
);
const forecast5_humidityEl = document.querySelector(".forecast5_humidity");
const forecast5_windSpeedEl = document.querySelector(".forecast5_windSpeed");

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

      // Get Present Day Weather from Coordinates
      return fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${data[0].lat}&lon=${data[0].lon}&appid=${APIKey}&units=imperial`
      )
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          iconEl.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@4x.png`;
          weatherEl.textContent = data.weather[0].main;
          weatherDescriptionEl.textContent = data.weather[0].description;
          temperatureEl.textContent = data.main.temp;
          humidityEl.textContent = data.main.humidity;
          windSpeedEl.textContent = data.wind.speed;

          // Get 5 Day Forecast
          return fetch(
            `https://api.openweathermap.org/data/2.5/forecast?lat=${data.coord.lat}&lon=${data.coord.lon}&appid=${APIKey}&units=imperial`
          )
            .then((response) => response.json())
            .then((data) => {
              console.log(data);
              // Noon: 3, 11, 19, 27, 35
              // Forecast Day 1
              forecast1_iconEl.src = `http://openweathermap.org/img/wn/${data.list[3].weather[0].icon}@4x.png`;
              forecast1_weatherEl.textContent = data.list[3].weather[0].main;
              forecast1_weatherDescriptionEl.textContent =
                data.list[3].weather[0].description;
              forecast1_temperatureEl.textContent = data.list[3].main.temp;
              forecast1_humidityEl.textContent = data.list[3].main.humidity;
              forecast1_windSpeedEl.textContent = data.list[3].wind.speed;

              // Forecast Day 2
              forecast2_iconEl.src = `http://openweathermap.org/img/wn/${data.list[11].weather[0].icon}@4x.png`;
              forecast2_weatherEl.textContent = data.list[11].weather[0].main;
              forecast2_weatherDescriptionEl.textContent =
                data.list[11].weather[0].description;
              forecast2_temperatureEl.textContent = data.list[11].main.temp;
              forecast2_humidityEl.textContent = data.list[11].main.humidity;
              forecast2_windSpeedEl.textContent = data.list[11].wind.speed;

              // Forecast Day 3
              forecast3_iconEl.src = `http://openweathermap.org/img/wn/${data.list[19].weather[0].icon}@4x.png`;
              forecast3_weatherEl.textContent = data.list[19].weather[0].main;
              forecast3_weatherDescriptionEl.textContent =
                data.list[19].weather[0].description;
              forecast3_temperatureEl.textContent = data.list[19].main.temp;
              forecast3_humidityEl.textContent = data.list[19].main.humidity;
              forecast3_windSpeedEl.textContent = data.list[19].wind.speed;

              // Forecast Day 4
              forecast4_iconEl.src = `http://openweathermap.org/img/wn/${data.list[27].weather[0].icon}@4x.png`;
              forecast4_weatherEl.textContent = data.list[27].weather[0].main;
              forecast4_weatherDescriptionEl.textContent =
                data.list[27].weather[0].description;
              forecast4_temperatureEl.textContent = data.list[27].main.temp;
              forecast4_humidityEl.textContent = data.list[27].main.humidity;
              forecast4_windSpeedEl.textContent = data.list[27].wind.speed;

              // Forecast Day 5
              forecast5_iconEl.src = `http://openweathermap.org/img/wn/${data.list[35].weather[0].icon}@4x.png`;
              forecast5_weatherEl.textContent = data.list[35].weather[0].main;
              forecast5_weatherDescriptionEl.textContent =
                data.list[35].weather[0].description;
              forecast5_temperatureEl.textContent = data.list[35].main.temp;
              forecast5_humidityEl.textContent = data.list[35].main.humidity;
              forecast5_windSpeedEl.textContent = data.list[35].wind.speed;
            });
        });
    });
});
