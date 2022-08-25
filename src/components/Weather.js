import React from 'react'
import {useEffect} from 'react'

import {useWeather} from '../context/WeatherContext'
function Weather() {

    const {days,city,weather,setWeather} = useWeather();
    const api_key = '779c271986d91ab4f86362ce5d62e73c';
    useEffect(() => {
        fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${city.latitude}&lon=${city.longitude}&exclude={part}&appid=${api_key}`)
        .then(res => res.json())
        .then(data => setWeather(data.daily))
        
    },[city,setWeather]);
  return (
    <div className="weathers">
    {weather.map((item, i) => {
      return ( 
          <div className="weather" key={i}> 
              <div className="weather-title">
                {days[
                  new Date(item.dt * 1000).getDay()
                ]}
              </div>
              <img
                className="weather-img"
                src={`https://openweathermap.org/img/wn/${item.weather[0].icon}@2x.png`}
                alt={item.weather[0].description.toUpperCase()}
                title={item.weather[0].description.toUpperCase()}
              /> 
              <div className="day-deg"> 
                  <span className="tmp-high">
                  {Math.round(item.temp['max'] - 273.15)}
                  &deg;
                  </span> 
                  <span>
                  {Math.round(item.temp['min'] - 273.15)}
                  &deg;
                  </span> 
              </div>
              <div>
                    <span className="weather-desc">
                    {item.weather[0].description.toUpperCase()}
                    </span>
                
              </div>
          </div> 
      );
    })}
  </div>
  )
}

export default Weather