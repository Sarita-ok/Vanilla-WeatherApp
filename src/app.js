function displayTemperature(response) {
console.log(response.data.main.temp);
}


let apiKey = "b0a489d5d96ea5d4bb0300b20321b007";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=London,uk&appid=
${apiKey}&units=metric`;

axios.get(apiUrl).then(displayTemperature);