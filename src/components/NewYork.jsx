import React from 'react'
import { useState } from 'react'
import useFetch from '../hooks/useFetch';


const NewYork = () => {

  const {weather} = useFetch(40.71427, -74.00597, res => res.data)

    const [typeTemperature, setTypeTemperature] = useState(true)

      const celsius =  parseInt(weather.main?.temp - 273.15)
        const farenheit = parseInt((weather.main?.temp - 273.15) * 9/5 + 32)

    return (

        <div className='new-york'>
          <div className='description-small-card'>
            <div className='left-desciption-card'>
              <h1 className='country-small-card'>{weather?.name}, {weather.sys?.country}</h1>
              <ul className='icon-small-description'>
                <li><i class="fa-solid fa-wind"></i>Wind Speed: {weather.wind?.speed} m/s</li>
                <li><i class="fa-solid fa-cloud"></i>Clouds: {weather.clouds?.all} %</li>
                <li><i class="fa-solid fa-droplet"></i>Humidity: {weather.main?.humidity} %</li>
              </ul>
            </div>
            <div className='right-description-card'>
              <h2 className='small-description-weather'>{weather.weather?.[0].description}</h2>
              <img className='small-icon' src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="weather-icon" />
              <div className='temperature-small'>
                <h2 className='small-text-temperature'>{typeTemperature? celsius : farenheit}</h2>
                <div className='small-temperature'>
                  <p>{typeTemperature? '°C' : '°F'} |</p>
                  <button onClick={() => setTypeTemperature(!typeTemperature)}>{typeTemperature? '°F' : '°C'}</button>
                </div>
              </div>
            </div>
          </div>
        </div>
    );
};

export default NewYork;