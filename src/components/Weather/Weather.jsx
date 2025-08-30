import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import cloudicon from "../../assets/cloudy.png";
import drizzleicon from "../../assets/drizzle.png";
import humicon from "../../assets/humidity.png";
import snowicon from "../../assets/snow.png";
import rainicon from "../../assets/rainny.png";
import clearicon from "../../assets/clear-sky.png";
import windicon from "../../assets/wind.png";
import searchicon from "../../assets/magnifying-glass.png";
import "./weather.css"

export default function Weather() {
  const inputRef = useRef();
  const [weatherdata, setWeatherdata] = useState(false);
  const allIcons = {
      "01d":clearicon,
      "01n":clearicon,
      "02d":cloudicon,
      "02n":cloudicon,
      "03d":cloudicon,
      "03n":cloudicon,
      "04d":drizzleicon,
      "04n":drizzleicon,
      "09d":rainicon,
      "09n":rainicon,
      "10d":rainicon,
      "10n":rainicon,
      "11d":rainicon,
      "11n":rainicon,
      "13d":snowicon,
      "13n":snowicon,
      "50d":snowicon,
      "5on":snowicon
  }

  const apiKey = "28ea89e62b77b216469c98dd487ac456";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(location) {
       try{
         const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;
         const getData = await fetch(url)
         const data = await getData.json()
         const icon = allIcons[data.weather[0].icon]
         console.log(data)
         if (data.cod === "404") {
            alert("City not found. Please try again!");
            return;
          }
         setWeatherdata({
            name:data.name,
            temperature: data.main.temp,
            hum: data.main.humidity,
            wind: data.wind.speed,
            icon:icon
         })

       }
       catch(error){
          console.log(error.message)
       }


  }
  
  useEffect(() => {
    checkWeather("Delhi");
  }, []);
  return (
     <div className="Card">
        <h1>Weather</h1>
        <div className="Search">
        <input className="search-box" type="text" placeholder="Enter a City" ref={inputRef} spellCheck="false" />
       <img src={searchicon} alt="" onClick={() => checkWeather(inputRef.current.value)} />
       {/* <button className="btn" onClick={}></button> */}
        </div>


     <img className="weather-icon" src={weatherdata.icon} alt="" />
     <h2 className="temp">{weatherdata.temperature}°C</h2>
     <h2 className="city">{weatherdata.name}</h2>

     
    <div className="weather">
        <div className="col">
        <img src={humicon} alt="" />
        <div>  
        <p className="hum">{weatherdata.hum}%</p>
        <span>Humidity</span>
        </div>
          
        </div>
        <div className="col">
        <img src={windicon} alt="" />
        <div>
        <p className="Wind">{weatherdata.wind}m/s</p>
        <span>Wind speed</span>
        </div>
        </div>
          
    </div>
        


     </div>
  );
}
