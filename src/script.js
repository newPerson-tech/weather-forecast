function formatDate(timestamp) {
    let date = new Date(timestamp);
    let day = days[date.getDay()];
    let hours = date.getHours();
    if (hours < 10) {
        hours = `0${hours}`;
    }
    let minutes = date.getMinutes();
    if (minutes < 10) {
        minutes = `0${minutes}`;
    }
    let days = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday"
    ];
    return `${day} ${hours} : ${minutes}`;
}

function displayTemperature(response) {
    let temperatureElement = document.querySelector("#temperature");
    let cityElement = document.querySelector("#city");
    let temperatureDayElement = document.querySelector("#temperature-day");
    let temperatureNightElement = document.querySelector("#temperature-night");
    let humidityConditionElement = document.querySelector("#humidity");
    let windConditionElement = document.querySelector("#wind");
    let dateElement = document.querySelector("#date");
    temperatureElement.innerHTML = Math.round(response.data.main.temp);
    cityElement.innerHTML = response.data.name;
    temperatureDayElement.innerHTML = Math.round(response.data.main.temp_max);
    temperatureNightElement.innerHTML = Math.round(response.data.main.temp_min);
    humidityConditionElement.innerHTML = response.data.main.humidity;
    windConditionElement.innerHTML = Math.round(response.data.wind.speed);
    dateElement.innerHTML = formatDate(response.data.dt * 1000);
}

let apiKey = "5ed1e5439462ada1b6de58f11508c5d7";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=New York&appid=${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);