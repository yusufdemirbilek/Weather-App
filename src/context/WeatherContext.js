import {useState,useContext,createContext} from 'react'
import cityJSON from '../Data/Data.json'

const WeatherContext = createContext();

export const WeatherProvider = ({ children }) => {

    const [city, setCity] = useState(cityJSON.find(item => item.id === 6));

    const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];

    const [weather , setWeather] = useState([]);

    const value = {
        city,
        setCity,
        days,
        weather,
        setWeather,
        cityJSON
    }
  return (
    <WeatherContext.Provider value={value}>
        {children}
    </WeatherContext.Provider>

  )
}

export const useWeather = () => useContext(WeatherContext);