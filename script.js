const apiKey = "YOUR_API_KEY";

const cityInput =
document.getElementById("cityInput");

const searchBtn =
document.getElementById("searchBtn");

searchBtn.addEventListener("click", () => {

const city = cityInput.value;

if(city === ""){
alert("Please enter a city name");
return;
}

fetch(
`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`
)

.then(response => response.json())

.then(data => {

document.getElementById("city")
.innerText = data.name;

document.getElementById("temp")
.innerText =
Math.round(data.main.temp) + "°C";

document.getElementById("condition")
.innerText =
data.weather[0].description;

document.getElementById("humidity")
.innerText =
data.main.humidity + "%";

document.getElementById("wind")
.innerText =
data.wind.speed + " km/h";

document.getElementById("feelsLike")
.innerText =
Math.round(data.main.feels_like) + "°C";

})

.catch(error => {

alert("City not found");

});

});