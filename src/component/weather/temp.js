import React,{useEffect, useState} from "react";
import "./stylee.css";
const Temp = () => {
const [searchValue,setSearchValue] = useState("bangalore")
const getWeatherInfo =async() =>{
try{
  let url = `https://api.openweathermap.org/data/2.5/weather?=&units=metric&q=${searchValue}&appid={fd6886f1e6ac39d1091f41004eb80cba}`
  const res = await fetch(url)
  const data=  res.json();

}
catch(error){
  console.log(error)
}
}

useEffect(()=>{getWeatherInfo();},[]);

  return (
    <>
      <div className="wrap">
        <div className="search">
          <input
            type="search"
            placeholder="search,.,"
            autoFocus
            id="search"
            className="searchTerm"
            value={searchValue}
            onChange={(e)=>setSearchValue(e.target.value)}
          />
          <button className="searchButton" type="button" onClick={getWeatherInfo}>
            Search
          </button>
        </div>
      </div>
      <article className="widget">
        <div className="weatherIcon">
            <i className={"wi wi-day-sunny"}></i>
        </div>
        <div className="weatherInfo">
            <div className="temperature">
                <span>25.56&deg;</span>
            </div>
            <div className="description"><div className="weatherCondition">Sunny</div>
            <div className="place">bangalore,in</div>
            </div>

        </div>
        <div className="date">{new Date().toLocaleString()}</div>
        <div className="extra-temp">
          <div className="temp-info-minmax">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-sunset"}></i>
              </p>
              <p className="extra-info-leftside">
                {/* {timeStr} PM <br /> */}
                Sunset
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-humidity"}></i>
              </p>
              <p className="extra-info-leftside">
                {/* {humidity} <br /> */}
                Humidity
              </p>
            </div>
          </div>

          <div className="weather-extra-info">
            <div className="two-sided-section">
              <p>
                <i className={"wi wi-rain"}></i>
              </p>
              <p className="extra-info-leftside">
                {/* {pressure} <br /> */}
                Pressure
              </p>
            </div>

            <div className="two-sided-section">
              <p>
                <i className={"wi wi-strong-wind"}></i>
              </p>
              <p className="extra-info-leftside">
                {/* {speed} <br /> */}
                Speed
              </p>
            </div>
          </div>
        </div>
      </article>
    </>
  );
};

export default Temp;
