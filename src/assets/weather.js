import { useState } from "react";
import { useEffect } from "react";
import { useRef } from "react";
import cloudicon from "./assets/cloudy.png";
import drizzleicon from "./assets/drizzle.png";
import humicon from "./assets/humidity.png";
import snowicon from "./assets/snow.png";
import rainicon from "./assets/rainny.png";
import clearicon from "./assets/clear-sky.png";
import windicon from "./assets/wind.png";
import "./styles2.css";

export default function Weather() {
  // const [cityname, setcityname] = useState();
  // const [temp, settemp] = useState();
  // const [hum, sethum] = useState();
  // const [windspeed, setwindspeed] = useState();
  const inputRef = useRef();
  const [weatherdata, setWeatherdata] = useState(false);
  // const allIcons = {
  //   01d:,
  //   01n:,
  // };

  const apiKey = "28ea89e62b77b216469c98dd487ac456";
  const apiUrl =
    "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  async function checkWeather(location) {
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?units=metric&q=${location}&appid=${apiKey}`;
      const res = await fetch(url);
      var data1 = await res.json();
      console.log(data1);
    } catch (error) {
      console.log(error);
    }
    // const res = await fetch(apiUrl + city + `&appid=${apiKey}`);
    //var data1 = await res.json();
    setWeatherdata({
      name: data1.name,
      temperature: data1.main.temp,
      hum: data1.main.humidity,
      wind: data1.wind.speed,
    });
  }
  useEffect(() => {
    checkWeather("Delhi");
  }, []);
  return (
    <div className="card">
      <div className="search">
        <input
          type="text"
          placeholder="Enter city name"
          spellcheck="false"
          ref={inputRef}
        />
        <button onClick={() => checkWeather(inputRef.current.value)}>
          search
        </button>
      </div>
      <div className="weather">
        <div>
          <h2 className="temp">{weatherdata.temperature}</h2>
        </div>
        <div>
          <h2 className="city">{weatherdata.name}</h2>
        </div>
        <div className="col">
          <p>Humidity</p>
          <img src={humicon} alt="" />
          <h2 className="hum">{weatherdata.hum}</h2>
        </div>
        <div className="col">
          <p>Wind speed</p>
          <img src={windicon} alt="" />
          <h2 className="Wind">{weatherdata.wind}</h2>
        </div>
      </div>
    </div>
  );
}
