const city = document.querySelector(".city");
const temp = document.querySelector(".temp");
const humidity = document.querySelector(".humidity");
const wind = document.querySelector(".wind");
const weather = document.querySelector(".weather");

const input = document.querySelector(".input-name");
const btn = document.querySelector(".btn");

async function checkWeather(cityName) {
  const response = await fetch(
    `https://api.openweathermap.org/data/2.5/weather?&appid=a88d47c4a7e7f9d418284046308c4964&units=metric&q=${cityName}`
  );
  if (!response.ok) throw new Error("");
  const data = await response.json();

  temp.innerHTML = Math.round(data.main.temp) + `°C`;
  city.innerHTML = data.name;
  humidity.innerHTML = data.main.humidity + "%";
  wind.innerHTML = data.wind.speed + "km/h";

  input.value = "";
}

btn.addEventListener("click", () => {
  checkWeather(input.value);
});
