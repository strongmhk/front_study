const API_KEY = "d342d8ddf709a5b382f3a1120dfdd448";



function onGeoOk(position){
  const lat =position.coords.latitude;
  const lon =position.coords.longitude;
  const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
  fetch(url)
  .then(response => response.json())
  .then(data => {
    const weather = document.querySelector("#weather div:first-child");
    const city = document.querySelector("#weather div:nth-child(2)");
    const temperature = document.querySelector("#weather div:last-child");
    weather.innerText = `weather : ${data.weather[0].main}`;
    city.innerText = `city : ${data.name}`;
    temperature.innerText = `temp : ${data.main.temp}`;
  }); 
}
function onGeoError(){
  alert("Can't find you. No weather for you.")
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);