function displayTemperature(response) {
let temperatureElement = document.querySelector("#temperature");
let cityElement = document.querySelector("#city");
let descriptionElement = document.querySelector("#description");
temperatureElement.innerHTML = Math.round
(response.data.main.temp);
cityElement.innerHTML = response.data.weather[0].description.;
}


let apiKey = "b0a489d5d96ea5d4bb0300b20321b007";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=
${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);