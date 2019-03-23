//Obtención de API desde el servidor
let weatherRequest = new XMLHttpRequest();
let apiURLstring = 'https://api.openweathermap.org/data/2.5/weather?id=5607916&units=imperial&APPID=ce1b41bea110dc29a315acc06cc91b63';
weatherRequest.open('Get',apiURLstring, true);
weatherRequest.send();
// JSON en variable para trabajar
weatherRequest.onload =  function () {
     let weatherData = JSON.parse(weatherRequest.responseText);
     //Console.log es solo para vizualizar el JSON desde inspeccionar en Google, se debe quitar una vez terminado
     console.log(weatherData);
     //Impresión de la variable deseada (desde JSON)
     document.getElementById('cc-temp').innerHTML = weatherData.main.temp;
     document.getElementById('Output-Currently').innerHTML = weatherData.weather[0].description;
     document.getElementById('Output-Temperature').innerHTML = weatherData.main.temp;
     document.getElementById('Output-Humidity').innerHTML = weatherData.main.humidity;
     document.getElementById('Output-Precipitation').innerHTML = weatherData.weather[0].main;
     document.getElementById('Output-WindSpeed').innerHTML = weatherData.wind.speed;
     //Obtención de la imagen desde el servidor usando el JSON 
     let icon = "http://openweathermap.org/img/w/" + weatherData.weather[0].icon + ".png";
     let desc = weatherData.weather[0].description;
     //Impresión de imagen según el clima actual junto con los atributos src y alt 
     document.getElementById('cc-img').setAttribute('src', icon);
     document.getElementById('cc-img').setAttribute('alt', desc);
}