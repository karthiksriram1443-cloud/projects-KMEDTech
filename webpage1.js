const unsplashKey = "YOUR_UNSPLASH_API_KEY"
const weatherKey = "YOUR_WEATHER_API_KEY"

function searchDestination(){

let city = document.getElementById("cityInput").value

getImages(city)
getWeather(city)

}

function getImages(city){

fetch(`https://api.unsplash.com/search/photos?query=${city}&client_id=${unsplashKey}`)

.then(response => response.json())

.then(data => {

let imagesDiv = document.getElementById("images")

imagesDiv.innerHTML = ""

data.results.slice(0,6).forEach(photo => {

let img = document.createElement("img")

img.src = photo.urls.small

imagesDiv.appendChild(img)

})

})

}

function getWeather(city){

fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${weatherKey}&units=metric`)

.then(response => response.json())

.then(data => {

document.getElementById("temperature").innerText =
"Temperature: " + data.main.temp + "°C"

document.getElementById("condition").innerText =
"Condition: " + data.weather[0].description

document.getElementById("humidity").innerText =
"Humidity: " + data.main.humidity + "%"

})

}