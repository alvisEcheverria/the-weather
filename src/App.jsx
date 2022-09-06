import { useEffect, useState } from 'react'
import WeatherLocal from './components/WeatherLocal'
import NewYork from './components/NewYork'
import Tokyo from './components/Tokyo'
import './App.css'
import useApiLocalWeather from './hooks/useApiLocalWeather';

function App() {

  const [loading, setLoading] = useState(false)

  useEffect(() => {

      setLoading(true)
        setTimeout(()=>{
          setLoading(false) 
        }, 3000)

  }, [])

  const {weather} = useApiLocalWeather(res => res.data)

  const listImg = [
                  {weather: 'Thunderstorm', img: "url(./img/Weather/Thunderstorm.gif)"},
                    {weather: 'Drizzle',  img: "url(./img/Weather/Drizzle.gif)"},
                      {weather: 'Rain', img: "url(./img/Weather/Rain.gif)"},
                        {weather: 'Snow', img: "url(./img/Weather/Snow.gif)"},
                          {weather: 'Clear', img: "url(./img/Weather/Clear.gif)"},
                            {weather: 'Clouds', img: "url(./img/Weather/Clouds.gif)"}
                  ]

    const changeBackground = (arrImg) =>{

        return arrImg.find(item => item.weather === weather.weather?.[0].main)

    }

    const myImage = changeBackground(listImg)

          let backgroundStyles =  {
                                  backgroundImage: `${myImage?.img}`,
                                    backgroundRepeat: 'no-repeat',
                                      backgroundPosition: 'left',
                                        backgroundSize: 'cover',
                                          boxShadow: '0px 0px 23px 3px #000000',
                                            position: 'relative',
                                              zIndex: '0',
                                                gridColumn: '1/2',
                                                  gridRow: '1/3'
                                  }

  return (

    <div className={"App"}>

      {
      loading ? (
        <div className="loader-container">
          <div className='spinner'></div>
        </div>
      ) : (
      <div className='card-container'>
        <div className="main-card" style={backgroundStyles}>
           <WeatherLocal weather={weather}/>
        </div>
        <div className='small-card' >
          <Tokyo/>
        </div>
        <div className='small-card'>
          <NewYork/>
        </div>
      </div>
      )}
    </div>
  )
}

export default App
