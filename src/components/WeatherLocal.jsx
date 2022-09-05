import React from 'react';
import { useState } from 'react'
import Clock from './Clock'
import '../styles.css'


const WeatherLocal = ({weather}) => {

    const [typeTemperature, setTypeTemperature] = useState(true)

      const celsius =  parseInt(weather.main?.temp - 273.15)
        const farenheit = parseInt((weather.main?.temp - 273.15) * 9/5 + 32)

          const minCelsius =  parseInt(weather.main?.temp_min - 273.15)
            const maxCelsius =  parseInt(weather.main?.temp_max - 273.15)

              const minFarenheit = parseInt((weather.main?.temp_min - 273.15) * 9/5 + 32)
                const maxFarenheit = parseInt((weather.main?.temp_max - 273.15) * 9/5 + 32)

  return (

      <div className='description-big-card'>
        <h1 className='country-big-card'>{weather?.name}, {weather.sys?.country}</h1>
        <Clock/>
        <div className='temperature-wheater'>
          <img src={`http://openweathermap.org/img/wn/${weather.weather?.[0].icon}@2x.png`} alt="weather-icon" />
          <h2 className='temperature'>{typeTemperature? celsius : farenheit}</h2>
          <p>{typeTemperature? '°C' : '°F'} |</p>
          <button className='icon-big-button' onClick={() => setTypeTemperature(!typeTemperature)}>{typeTemperature? '°F' : '°C'}</button>     
        </div>
        <div className='all-characteristics-weather'>
          <div className='min-max-temperature'>
            <h2> min: <i class="fa-solid fa-temperature-low"></i> {typeTemperature? minCelsius : minFarenheit} {typeTemperature? '°C' : '°F'}</h2>
            <h2> max: <i class="fa-solid fa-temperature-high"></i> {typeTemperature? maxCelsius : maxFarenheit} {typeTemperature? '°C' : '°F'}</h2>
          </div>
          <div className='characteristics-weather'>
            <h2 className='description-weather'>{weather.weather?.[0].description}</h2>
            <ul>
              <li>Wind Speed: {weather.wind?.speed} m/s <i class="fa-solid fa-wind"></i></li>
              <li>Clouds: {weather.clouds?.all} % <i class="fa-solid fa-cloud"></i></li>
              <li>Humidity: {weather.main?.humidity} % <i class="fa-solid fa-droplet"></i></li>
            </ul>
          </div>
        </div>
      </div>
  );
};

export default WeatherLocal;