//key

function displayTemperature (response) {
  console.log(response.data);
  let temperatureElement=document.querySelector("#temperature-change");
  temperatureElement.innerHTML=Math.round(response.data.main.temp);
  let cityElement=document.querySelector("#place-weather");
  cityElement.innerHTML=response.data.name;
  let descriptionElement=document.querySelector("#description");
  descriptionElement.innerHTML=response.data.weather[0].description;
  let humidityElement=document.querySelector("#humidity");
  humidityElement.innerHTML=response.data.main.humidity;
  let windElement=document.querySelector("#wind");
  windElement.innerHTML=Math.round(response.data.wind.speed);
}

let apiKey = "6ec780629b6faed9d539966bf949a6fb";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Madrid&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
//JS