const apiKey = "28ea89e62b77b216469c98dd487ac456"; 
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
const search = document.querySelector(".search input");
const searchbtn = document.querySelector(".search button")


async function checkWeather(city){
    const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    var data = await res.json();
    console.log(data);

    document.querySelector(".temp").innerHTML =Math.round(data.main.temp) + "°C";
    document.querySelector(".city").innerHTML = data.name;
    document.querySelector(".hum").innerHTML = data.main.humidity + "%";
    document.querySelector(".Wind").innerHTML = data.wind.speed+ "km/h";

    document.querySelector(".weather").style.display = "block";
}


searchbtn.addEventListener("click", () =>{
    checkWeather(search.value);
    
})
