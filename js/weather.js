const API_KEY = "8b71e4e670afb207f17ec136606be2a8";

function onGeoOk(position) {
    const lat = position.coords.latitude;
    const lon = position.coords.longitude;
    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric`;
    fetch(url)
    .then(response => response.json())
    .then(data => {
        const city = document.querySelector("#weather span:first-child");
        const temp = document.querySelector("#weather span:nth-child(2)");
        const weather = document.querySelector("#weather span:last-child");
        city.innerText = data.name;
        temp.innerText = `${Math.round(data.main.temp)}°C`;
        weather.innerText = data.weather[0].main;
    });
}

function onGeoError() {
    alert("Can't find tou. No weather for you.");
}

navigator.geolocation.getCurrentPosition(onGeoOk, onGeoError);