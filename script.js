let currentDate = new Date();
let h4 = document.querySelector("h4");

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
let weekDay = days[currentDate.getDay()];
let minutes = currentDate.getMinutes();

let months = [
  "Jan",
  "Feb",
  "Mar",
  "Apr",
  "May",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec"
];
let month = months[currentDate.getMonth()];

let date = currentDate.getDate();
let hour = currentDate.getHours();
h4.innerHTML = `<p>Today,  ${weekDay} ${month} ${date} </p> <p>${hour}:${minutes}</p>`;


function displayWeather(response){

  document.querySelector("#place-weather").innerHTML=response.data.name;
  document.querySelector("#temperature-change").innerHTML=Math.round(response.data.main.temp);
  document.querySelector("#wind").innerHTML=Math.round(response.data.wind.speed);
 document.querySelector("#humidity").innerHTML=response.data.main.humidity;
 document.querySelector("#pressure").innerHTML=response.data.main.pressure;
 document.querySelector("#description").innerHTML=response.data.weather[0].main;
}

function searchCity(city){
  let apiKey = "6ec780629b6faed9d539966bf949a6fb";
  let unit = "imperial";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=${unit}`;
    axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

function handleSubmit(event) {
event.preventDefault();
let city=document.querySelector("#city-input").value;
 searchCity(city);
}

function searchLocation(position){
  let lat =position.coords.latitude;
  let lon=position.coords.longitude;
  let unit = "imperial";
  let apiKey = "6ec780629b6faed9d539966bf949a6fb";
  let apiUrl=`https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&units=${unit}`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(displayWeather);
}

function getCurrentLocation(event){
  event.preventDefault();
  navigator.geolocation.getCurrentPosition(searchLocation);
  }

searchCity("Madrid");

let weatherSearch = document.querySelector("#search-city");
weatherSearch.addEventListener("click", handleSubmit);

let currentLocationButton=document.querySelector("#current-location-button");
currentLocationButton.addEventListener("click", getCurrentLocation);