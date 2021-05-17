
function formatDate (timestamp){
let date = new Date(timestamp);
let hours = date.getHours();
if (hours < 10){
  hours =`0${hours}`;
}
let minutes = date.getMinutes();
if (minutes < 10){
  minutes =`0${minutes}`;
}
let days =["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
let months =["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
let month=months[date.getMonth()];
let day = days[date.getDay()];
let dayMonth =date.getDate();
return `Last update, ${day} ${month} ${dayMonth} at ${hours}:${minutes}</p>`;
}

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
  let dateElement=document.querySelector("#date-information");
  dateElement.innerHTML= formatDate(response.data.dt * 1000);
  let iconElement=document.querySelector("#icon");
  iconElement.setAttribute("src", `http://openweathermap.org/img/wn/${response.data.weather[0].icon}@2x.png`);
  iconElement.setAttribute("alt", response.data.weather[0].icon);
}

function search(city){
  let apiKey = "6ec780629b6faed9d539966bf949a6fb";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=imperial`;
  axios.get(apiUrl).then(displayTemperature);
}

function handleSubmit(event){
  event.preventDefault();
  let cityInputElement=document.querySelector("#city-input");
  search(cityInputElement.value);
}

search("Madrid");

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

//id="city-input"
//id="search-form"
//id="search-city"