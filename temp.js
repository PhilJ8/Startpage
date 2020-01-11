getWeather();

function getWeather() {
    let xmlhttp = new XMLHttpRequest();

    xmlhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            let weatherData = JSON.parse(this.responseText)
            if (weatherData) {
                document.getElementById("weather").innerText = weatherData.main.temp + "°C"
//add more weatherData if you want...
            }

        }
    };
//introduce your GPS latitude and longitude to get your local weather informations
    xmlhttp.open("GET", 'https://api.openweathermap.org/data/2.5/weather?lat=48.5839200&lon=7.7455300&units=metric&APPID=5cb51ce8b8a0b840ba9c6b64206801e1', true);
    xmlhttp.send();
}
