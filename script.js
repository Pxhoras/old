
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
let dayNumber =date.getDay();
return `Last Updated,  ${day} ${month} ${dayNumber} at ${hours}:${minutes}</p>`;
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
}

let apiKey = "6ec780629b6faed9d539966bf949a6fb";
let city ="Madrid";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);
